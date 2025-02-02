import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { fetchWeatherReport } from "../../Api/Api";
import Card from "../../Components/Card/Card";

export default function Home() {
  const { city } = useParams();
  const navigate = useNavigate();
  const [cityName, setCityName] = useState(city || "");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch weather data when city parameter changes
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  const fetchWeather = (city) => {
    setLoading(true);
    fetchWeatherReport(city).then((data) => {
      setWeatherData(data);
      setLoading(false);
      if (!data) {
        alert("Failed to fetch weather data");
      }
    });
  };

  const searchCity = (e) => {
    e.preventDefault();
    if (cityName) {
      navigate(`/weather/${cityName}`); // Update URL with city name
    }
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.inputWrapper}>
          <form onSubmit={searchCity}>
            <input
              type="text"
              name="cityName"
              className={styles.input}
              placeholder="Enter city name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              required
            />
            <button type="submit" className={styles.searchBtn}>
              Search
            </button>
          </form>
        </div>
        <div className={styles.detailWrapper}>
          {loading && <p>Loading data...</p>}
          {!loading && weatherData && (
            <>
              <Card
                title="Temperature"
                description={`${weatherData.current.temp_c}°C`}
              />
              <Card
                title="Humidity"
                description={`${weatherData.current.humidity}%`}
              />
              <Card
                title="Condition"
                description={weatherData.current.condition.text}
              />
              <Card
                title="Wind Speed"
                description={`${weatherData.current.wind_kph} kph`}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
