import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";

const Weather = () => {
  return (
    <div className="weather-display-container">
      <div className="weather-display-grid">
        <div className="icon">
          <div>
            <WbSunnyIcon
              sx={{
                fontSize: 150,
              }}
            />
          </div>
          <div> 32 degrees</div>
          <div>location</div>
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
            <div>70%</div>
            <div>humidity</div>
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
            <div>5.14 km/h</div>
            <div>windspeed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
