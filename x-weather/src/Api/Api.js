import axios from "axios";

const API_END_POINT = `https://api.weatherapi.com/v1/current.json`;
const API_KEY = `03f9bda54f4f41bba54125129250202`;

export async function fetchWeatherReport(cityName) {
  try {
    const response = await axios.get(API_END_POINT, {
      params: {
        key: API_KEY,
        q: cityName,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
