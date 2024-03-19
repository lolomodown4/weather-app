import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./component/Searchbar";
import Weather from "./component/Weather";

function App() {
  const [city, setCity] = useState("london");
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [actualData, setActualData] = useState();

  useEffect(() => {
    getData();
  }, [city]);

  const getData = async () => {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=89c46bc426ab3acd9f8c9cd0b5c756a3`
      );

      if (!response.ok) {
        throw Error("Failed to fetch data");
      }

      let jsonResponse = await response.json();

      setData(jsonResponse);

      /* call fucntion */
      getCoordinates();
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  const getCoordinates = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasOwnProperty("lat") && data[i].hasOwnProperty("lon")) {
        setLatitude(data[i].lat);
        setLongitude(data[i].lon);
        console.log(data[i].lat);
        console.log(data[i].lon);
        break;
      }
    }
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,daily&appid=89c46bc426ab3acd9f8c9cd0b5c756a3&units=imperial`
    );
    if (!response.ok) {
      throw Error("Failed to fetch data");
    }

    let respData = await response.json();

    setActualData(respData);
  };

  return (
    <div className="App">
      <div className="component-holder">
        <Searchbar city={city} setCity={setCity} />
        <Weather city={city} actualData={actualData} />
      </div>
    </div>
  );
}

export default App;
