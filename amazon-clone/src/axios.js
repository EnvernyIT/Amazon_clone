import axios from "axios";

const instance = axios.create({
    baseURL: '...' //THE API (cloud function) url
})

export default instance