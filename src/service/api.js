import axios from "axios";

export const api = axios.create({
    baseURL:"https://rocketfood-api-wwmt.onrender.com"
    //baseURL:"http://localhost:3337"
});