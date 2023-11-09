// Components

import Main from "./Main.js";
import { MAIN_DATA } from "./data.js";
import React, { useState, useEffect } from 'react';

function LandingView() {
  const zip = "92612";
  const country = "US";
  const APIkey = "d4edf840d5642e9fafcafb3c7f4adc73";
  const[loading, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [data, setData] = useState(false);
  // const lat = "33.6425";
  // const lon = "-117.8417";
  const lat = "42.3601";
  const lon = "-71.057083";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
    )
      // handling responses
      .then((response) => response.json())
      // handling normal data state
      .then((actualData) => {
        console.log(actualData);
        setLoadingData(false);
        setError(false);
        setData(actualData);
      })
      // handling errors
      .catch((err) => {
        // console.log(err.message);
        setLoadingData(false);
        setError(true);
      });
  }, []);

  return (
    <>
        <Main content={MAIN_DATA[0].content} />

      <div style={{ display: !loading? 'none': 'block'}}>
      {/* loading: {!loading ? "loading" : "not loading"} */}
      LOADINGG
      </div>
      <br />
      error: {error ? "error" : "no error"}
      <br />

      {!loading && !error && (
    <>
      location: {data.name}
      <br />
      temperature(C): {data.main.temp}  {'\u00A0'}
      min temperature(C): {data.main.temp_min}  {'\u00A0'}
      max temperature(C): {data.main.temp_max}
      <br/>
      description: {data.weather[0].description}
      <br/>
      wind speed:{data.wind.speed} {'\u00A0'}
      wind degree:{data.wind.deg}
    </>
)}
    </>
  );
}

export default LandingView;