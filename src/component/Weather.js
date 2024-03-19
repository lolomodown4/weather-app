import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";

const Weather = ({ city, actualData }) => {
  return (
    <div className="weather-display-container">
      <div className="weather-display-grid">
        <div className="icon-details-container">
          <div className="icon">
            <WbSunnyIcon
              sx={{
                fontSize: 100,
              }}
            />
          </div>
          <h1> {actualData.current.temp}</h1>
          <h2>{city}</h2>
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
              <div>{actualData.current.humidity}</div>
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
              <div>{actualData.current.wind_speed}</div>
              <div>windspeed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
