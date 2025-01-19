import axios from "axios";

const API_END_POINT = `https://geektrust.s3-ap-southeast-1.amazonaws.com`;

export async function fetchEmployee(){
    try {
        const response = await axios.get(`${API_END_POINT}/adminui-problem/members.json`);
        // console.log("From API.js", response.data);
        return response.data;

    } catch (error) {
        console.error("Error fetching data: ",error);
        return [];
    }
}
