const { GOOGLE_API_KEY, NOAA_TOKEN } = process.env;
const axios = require('axios');


// Initialize TMAX and TMIN arrays for growing zone and GDD calcualtion
let TMAX = [];
let TMIN = [];

// Zip iteration and FiPS query iteration counts. 
let count = 1;
const zipIterations = 4;
const FIPSIterations = 5;

// function for delaying calls to NOAA
const delay = interval => new Promise(resolve => setTimeout(resolve, interval))
// Function designed to convert date into ISO formatted date without time data. 
const date2String = (dateParam = new Date()) => {
  return dateParam.toISOString().match(/\d\d\d\d-\d\d-\d\d/)[0];
}
// subtracts one year from passed-in date and returns new date object
const less1Date = (dateParam = new Date()) => {
  return new Date(dateParam.setFullYear(dateParam.getFullYear() - 1));
}

// Initialize start and end dates for temperature queries to NOAA 
let ed = new Date();
ed = new Date(ed.getFullYear() - 1, 12, 0)
let edString = ed.toISOString().match(/\d\d\d\d-\d\d-\d\d/)[0];
let sd = new Date();
sd = new Date(sd.getFullYear() - 1, 12, 0)
sd = less1Date(sd);
let sdString = date2String(sd);
// Pulled-out GET request to NOAA in order to make code easier to read
// Also added setTimeout to prevent too many requests per second to NOAA server when looping 
const getDataFromNOAA = async (edString, sdString, locationType, zipFips, iterations, db) => {
  // @ts-ignore
  axios.get(`https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=TMIN&datatypeid=TMAX&units=standard&startdate=${sdString}&enddate=${edString}&locationid=${locationType}:${zipFips}&limit=1000`, { headers: { token: NOAA_TOKEN } })
    .then(res => {
      res.data.results.forEach(el => el.datatype === "TMIN" ? TMIN.push({ value: el.value, date: el.date }) : TMAX.push({ value: el.value, date: el.date }));
      count === iterations ? calculateGParams(db) : count += 1;
      console.log(count)
    })
    .catch(err => { console.log(err) })
  await delay(350)
}

// Block of code used within the for loops, subtracts one year from sd and ed and uses this to getData from NOAA
const forBlock = async (locationType, location, iterations, db) => {
  sd = less1Date(sd);
  ed = less1Date(ed);
  edString = date2String(ed);
  sdString = date2String(sd);
  await getDataFromNOAA(edString, sdString, locationType, location, iterations, db);
}

const hardinessZoneCalculator = (TMINAvg) => {
  const zoneMap =
    [{ low: -60, high: -55, zone: "1a" },
    { low: -55, high: -50, zone: "1b" },
    { low: -50, high: -45, zone: "2a" },
    { low: -45, high: -40, zone: "2b" },
    { low: -40, high: -35, zone: "3a" },
    { low: -35, high: -30, zone: "3b" },
    { low: -30, high: -25, zone: "4a" },
    { low: -25, high: -20, zone: "4b" },
    { low: -20, high: -15, zone: "5a" },
    { low: -15, high: -10, zone: "5b" },
    { low: -10, high: -5, zone: "6a" },
    { low: -5, high: 0, zone: "6b" },
    { low: 0, high: 5, zone: "7a" },
    { low: 5, high: 10, zone: "7b" },
    { low: 10, high: 15, zone: "8a" },
    { low: 15, high: 20, zone: "8b" },
    { low: 20, high: 25, zone: "9a" },
    { low: 25, high: 30, zone: "9b" },
    { low: 30, high: 35, zone: "10a" },
    { low: 35, high: 40, zone: "10b" },
    { low: 40, high: 45, zone: "11a" },
    { low: 45, high: 50, zone: "11b" },
    { low: 50, high: 55, zone: "12a" },
    { low: 55, high: 60, zone: "12b" },
    { low: 60, high: 65, zone: "13a" },
    { low: 65, high: 70, zone: "13b" }];
  for (let i = 0; i < zoneMap.length; i++) {
    if (TMINAvg >= zoneMap[i].low && TMINAvg <= zoneMap[i].high) {
      return zoneMap[i].zone;
    }
  }
};

const avgStartDate = (seasonStarts) => {
  // normalize to current year
  let currentYear = new Date().getFullYear()
  const normalizedDates = seasonStarts.map(el => new Date(el.obs_date.setFullYear(currentYear)))
  // convert to milleseconds
  normalizedDates.forEach((el, ind, arr) => arr[ind] = el.getTime());
  // Sum and divide by normalized Dates' lengh creating a new date
  const averageDate = new Date(normalizedDates.reduce((prev, next) => prev + next) / normalizedDates.length);
  return averageDate.toISOString().substring(5, 10);

}

const averageSeasonLength = (seasonEnds, seasonStarts) => {
  // normalize to current year
  let currentYear = new Date().getFullYear()
  const normalizedStarts = seasonStarts.map(el => new Date(el.obs_date.setFullYear(currentYear)))
  const normalizedEnds = seasonEnds.map(el => new Date(el.obs_date.setFullYear(currentYear)))

  // convert to milleseconds
  normalizedStarts.forEach((el, ind, arr) => arr[ind] = el.getTime());
  normalizedEnds.forEach((el, ind, arr) => arr[ind] = el.getTime());

  // Calculate the difference between start and end dates for each year
  const seasonLengthsDays = []
  for (let i = 0; i < normalizedStarts.length; i++) {
    seasonLengthsDays[i] = normalizedEnds[i] - normalizedStarts[i];
  }
  // Convert each difference into days
  seasonLengthsDays.forEach((el, ind, arr) => arr[ind] = el / 1000 / 60 / 60 / 24);
  // Calculate average season length
  console.log(seasonLengthsDays.reduce((prev, next) => prev + next) / seasonLengthsDays.length)

}
// THIS RETURN IS THE RETURN THAT WILL ULTIMATELY EXIT THIS SCRIPT!!!!

const calculateGParams = async (db) => {
  console.log(TMIN.length, TMAX.length);
  // insert values into TMIN and TMAX tables
  await db.growingCalcs.truncateTMAX();
  await db.growingCalcs.truncateTMIN();
  TMIN.forEach(async el => await db.growingCalcs.insertIntoTMIN(el.value, el.date))
  TMAX.forEach(async el => await db.growingCalcs.insertIntoTMAX(el.value, el.date))
  await db.growingCalcs.selectHighestDuplicates();
  await db.growingCalcs.selectLowestDuplicates();
  const TMINAvg = await db.growingCalcs.tminAvg();
  const seasonStarts = await db.growingCalcs.GDD35SpringTransitions();
  const seasonEnds = await db.growingCalcs.GDD35WinterTransitions();
  return {
    hardinessZone: hardinessZoneCalculator(TMINAvg[0].round),
    firstGDD35: avgStartDate(seasonStarts),
    averageSeasonLength: averageSeasonLength(seasonEnds, seasonStarts)
  }
};

// Get TMAX for the First year (1-Year Data Restriction)
// if data returned for zipcode, proceed with zipcode querying, if no data, use county FIPS code
// @ts-ignore
module.exports = {
  getGrowingParams: (zipcode, street, city, state, db) => {
    // @ts-ignore
    axios.get(`https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=TMAX&datatypeid=TMIN&units=standard&startdate=${sdString}&enddate=${edString}&locationid=ZIP:${zipcode}&limit=1000`, { headers: { token: NOAA_TOKEN } })
      .then(async res => {
        if (res.data.results.length === 0) {
          // Extra Steps required to get FIPS code to facilitate wider geographic range
          // @ts-ignore
          axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(street + "+" + city + "+" + state + "+" + zipcode)}&key=${GOOGLE_API_KEY}&address`)
            .then(axiosRes => {
              const location = axiosRes.data.results[0].geometry.location
              // Get lat and long from Google Maps API for Use with FCC lat/long-to-FIPS API
              // @ts-ignore
              axios.get(`https://geo.fcc.gov/api/census/block/find?latitude=${location.lat}&longitude=${location.lng}&showall=false&format=json`)
                .then(async res => {
                  // Run the query 5 times using FIPS code, reducing the year value each time to get 5 years of data
                  // Must run seperate queries to get around NOAA 1-year of Data limitation
                  const FIPS = res.data.County.FIPS;
                  for (let i = 0; i < 5; i++) {
                    await forBlock("FIPS", FIPS, FIPSIterations, db);
                  }
                })
                // Completed Google Maps API Promise
                .catch(err => console.log(err))
            })
            // Completed FCC Promise
            .catch(err => console.log(err))
        } else {
          // Add Data to TMIN/TMAX from first run
          res.data.results.forEach(el => el.datatype === "TMIN" ? TMIN.push({ value: el.value, date: el.date }) : TMAX.push({ value: el.value, date: el.date }));

          // Run the query 4 more times using zipcode, reducing the year value each time to get 4 more years of data
          // Must run seperate queries to get around NOAA Data Limitations
          for (let i = 0; i < 4; i++) {
            await forBlock("ZIP", zipcode, zipIterations, db);
          }

        };
      }).catch(err => console.log(err))
  }
};