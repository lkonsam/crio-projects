import axios from "axios";

const API_END_POINT = `https://crio-location-selector.onrender.com`;

export async function fetchCountries(){
    try {
        const response = await axios.get(`${API_END_POINT}/countries`);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
    }
}
export async function fetchStates(countryName){
    try {
        const response = await axios.get(`${API_END_POINT}/country=${countryName}/states`);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
    }
}
export async function fetchCities(countryName, stateName){
    try {
        const response = await axios.get(`${API_END_POINT}/country=${countryName}/state=${stateName}/cities`);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
    }
}

