import axios from "axios";

const instance = axios.create({
    //THE API (cloud function) url
    baseURL: 'http://localhost:5001/fir-5ac9b/us-central1/api'
})

export default instance