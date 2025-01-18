import axios from "axios";

const API_END_POINT = `https://countries-search-data-prod-812920491762.asia-south1.run.app`;

export async function fetchCountries(){
    try {
        const response = await axios.get(`${API_END_POINT}/countries`);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
        return [];
    }
}
