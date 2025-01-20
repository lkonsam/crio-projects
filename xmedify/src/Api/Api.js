import axios from "axios";

const API_END_POINT = `https://meddata-backend.onrender.com`;

export async function fetchStates(){
    try {
        const response = await axios.get(`${API_END_POINT}/states`);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
        return [];
    }
}

export async function fetchCities(stateName){
    try {
        const response = await axios.get(`${API_END_POINT}/cities/${stateName}`);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
        return [];
    }
}

export async function fetchMedicalCentres(stateName, cityName){
    try {
        const response = await axios.get(`${API_END_POINT}/data?state=${stateName}&city=${cityName}`);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
        return [];
    }
}
