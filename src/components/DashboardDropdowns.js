import React, { useState, useEffect } from 'react';
import SwitchMaker from './SwitchMaker';
import axios from 'axios';

const DashboardDropdowns = (props) => {

  const [weedOptions, setWeedOptions] = useState([]);
  const [switches, setSwitches] = useState([]);

  // @ts-ignore
  const getWeedsByVegType = (vegType) => {
    axios.get(`/api/weeds?vegType=${vegType}`)
      .then(res => {
        setWeedOptions(res.data.map(el => (
          <option key={`weed${el.weed_id}`} value={el.weed_id} >{el.common_name}</option>
        )))
      })
      .catch(err => console.log(err))
  }

  const getWeedMethodsByID = (weed_id) => {
    axios.get(`/api/weeds/methods/${weed_id}`)
      .then(res => {
        setSwitches(res.data.map(el => (<SwitchMaker key={`method${el.method_id}`} weedMethod={el} />)))
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getWeedsByVegType("f")
  }, [])

  return (
    <>
      <fieldset className="dropdownBox">
        <h4 id="dropdownLegend">Select Management Options</h4>
        <select onChange={e => getWeedsByVegType(e.target.value)}>
          <option value='f' >Forbs</option>
          <option value='w' >Woody Species</option>
          <option value='g' >Graminoids</option>
        </select>
        <select onChange={e => getWeedMethodsByID(e.target.value)} disabled={weedOptions.length <= 0 ? true : false} >
          {weedOptions}
        </select>
        <br />
        {switches}
      </fieldset>

    </>
  )
}

export default DashboardDropdowns