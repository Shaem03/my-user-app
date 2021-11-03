import axios from "axios";

export default axios.create({
    baseURL: "https://my-users-app.muhammedshaheem7.workers.dev",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});