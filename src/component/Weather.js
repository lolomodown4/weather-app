import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";

const Weather = ({ city, data }) => {
  console.log(data);

  const icon = () => {
    if (data.current.weather[0].main === "Clear") {
      return (
        <WbSunnyIcon
          sx={{
            fontSize: 100,
          }}
        />
      );
    } else if (data.current.weather[0].main === "Rain") {
      return (
        <ThunderstormIcon
          sx={{
            fontSize: 100,
          }}
        />
      );
    } else if (data.current.weather[0].main === "Clouds") {
      return (
        <CloudIcon
          sx={{
            fontSize: 100,
          }}
        />
      );
    }
  };

  return (
    <div className="weather-display-container">
      <div className="weather-display-grid">
        <div className="icon-details-container">
          <div className="icon">{icon()}</div>
          <h1> {data ? data.current.temp : "{temp data}"}</h1>
          <h2>{city ? city : "{city name}"}</h2>
        </div>
        <div className="humid-container">
          <div className="humid-icon">
            <WaterIcon
              sx={{
                fontSize: 60,
              }}
            />
          </div>
          <div className="humid-details">
            <div>
              <div>{data ? data.current.humidity : "{humidity data}"}</div>
              <div>humidity</div>
            </div>
          </div>
        </div>
        <div className="windspeed-container">
          <div className="windspeed-icon">
            <AirIcon
              sx={{
                fontSize: 60,
              }}
            />
          </div>
          <div className="windspeed-details">
            <div>
              <div>{data ? data.current.wind_speed : "{windspeed data}"}</div>
              <div>windspeed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
