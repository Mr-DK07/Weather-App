import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import PropTypes from "prop-types";

function WeatherInfo({ weatherInfo }) {
  const RAIN_URL =
    "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/2148221665/photo/summer-sun-and-a-thermometer.webp?a=1&b=1&s=612x612&w=0&k=20&c=sv-pwvmTKzkmz6Aqk3bOufcIc6eglxYWgRNaFLZAlJw=";
  const COLD_URL =
    "https://media.istockphoto.com/id/848162418/video/winter-forest-timelapse-on-the-dolomites.jpg?s=640x640&k=20&c=rHwzM6i6LeX8SsESDdq-1P32SgIQ2TM67dnzEWIhBLk=";

  return (
    <div className="WeatherInfo">
      <Card sx={{ minWidth: 200 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            weatherInfo.humidity > 80
              ? RAIN_URL
              : weatherInfo.temp > 20
              ? HOT_URL
              : COLD_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city}{" "}
            {weatherInfo.humidity > 80 ? (
              <ThunderstormIcon />
            ) : weatherInfo.temp > 20 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature: {weatherInfo.temp}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Temperature: {weatherInfo.tempMin}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Max Temperature: {weatherInfo.tempMax}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity: {weatherInfo.humidity}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feels Like: {weatherInfo.feelsLike}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather: {weatherInfo.weather}
          </Typography>
        </CardContent>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Card>
    </div>
  );
}

WeatherInfo.propTypes = {
  weatherInfo: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    feelsLike: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherInfo;
