import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./component/Searchbar";
import Weather from "./component/Weather";

function App() {
  const [city, setCity] = useState("korea");
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, [city]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=89c46bc426ab3acd9f8c9cd0b5c756a3`
      );

      if (!response.ok) {
        throw Error("Failed to get coordinates of the city");
      }

      let jsonResponse = await response.json();

      const { lat, lon } = jsonResponse[0];

      const weatherDataFetch = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,daily&appid=89c46bc426ab3acd9f8c9cd0b5c756a3&units=imperial`
      );

      if (!weatherDataFetch.ok) {
        throw Error("Failed to fetch weather data");
      }

      const weatherData = await weatherDataFetch.json();

      setData(weatherData);
      setIsDataFetched(true);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="component-holder">
        <Searchbar city={city} setCity={setCity} />
        {isDataFetched && <Weather city={city} data={data} />}
      </div>
    </div>
  );
}

export default App;
