import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMethod } from '../redux/mgmtMethodReducer';
import axios from 'axios';
import Nav from './Nav';

// From Store userMethods[], getMethods(), addMethod() removeMethod()

const WeedPage = (props) => {
  console.log("render")
  const { weed_id } = props.location.state
  const dispatch = useDispatch();

  const [src, setSrc] = useState("");
  const [commonName, setCommonName] = useState("");
  const [botanicalName, setBotanicalName] = useState("");
  const [annualPerennialBiennial, setAnnualPerennialBiennial] = useState("");
  const [vegType, setVegType] = useState("");
  const [description, setDescription] = useState("");
  const [mgmtOptions, setMgmtOptions] = useState([]);
  // @ts-ignore
  const userMethods = useSelector(state => state.mgmtMethodReducer.userMethods);
  // Creates local state to avoid lagginess and render errors caused by adding/removing methods on switch toggle
  const [loading, setLoading] = useState(true);

  // @ts-ignore

  const getWeedDetails = async () => {
    await axios.get(`/api/weeds/${weed_id}`)
      .then(res => {
        const { src, common_name, botanical_name, annual_perennial_biennial, veg_type, description } = res.data;
        setSrc(src);
        setCommonName(common_name);
        setBotanicalName(botanical_name);
        setAnnualPerennialBiennial(annual_perennial_biennial);
        setVegType(veg_type);
        setDescription(description)
      })
      .catch(err => console.log(err))
    await axios.get(`/api/weeds/methods/${weed_id}`)
      .then(res => {
        setMgmtOptions(res.data);
      })
      .catch(err => { console.log(err) })
    setLoading(false)
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getWeedDetails()
  }, [])
  const switchMaker = (weedMethod) => {
    // Determine if weed method is in user method list and check inputs accordingly
    if (userMethods) {
      let checked = false
      if (userMethods.reduce((acc, el) => weedMethod.method_id === el.method_id ? ++acc : acc, 0)) {
        checked = true
      }
      return (
        <div key={weedMethod.method_id}>
          <p>
            <strong>Name: </strong>{weedMethod.name}
            <br />
            <strong>Description: </strong>{weedMethod.description}
          </p>
          <div className="switch" >
            <input type="checkbox"
              id={`switch${weedMethod.method_id}`}
              checked={checked}
              onChange={() => {
                dispatch(toggleMethod(weedMethod.method_id))
              }} />
            <label htmlFor={`switch${weedMethod.method_id}`}>
              <span className="switchSpan"></span>
            </label>
          </div>
        </div>
      )
    }
  }

  const switches = mgmtOptions.map(el => switchMaker(el))
  const output = (
    <>
      <Nav />
      <section>
        <h2>{commonName}</h2>
        <h2>{botanicalName}</h2>
        <h3>{annualPerennialBiennial === "a" ? "Annual" : annualPerennialBiennial === "p" ? "Perennial" : "Biennial"} {vegType === "f" ? "Forb" : vegType === "g" ? "Graminoid" : "Woody"}</h3>
        <img alt={`${botanicalName} commonly known as ${commonName}`} src={src} />
        <h4>Description</h4>
        <article>
          {description}
        </article>
      </section>
      <section>
        <h4>Management Options</h4>
        <br />
        {switches}
      </section>
    </>
  )

  return loading ? (<></>) : output

};

export default WeedPage