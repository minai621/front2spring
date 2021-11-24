import axios from "axios";

let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {
    backendHost = "http://localhost:8080";
} else {
    backendHost = "http://MJ-TODO.ap-northeast-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;

const accessToken = localStorage.getItem("ACCESS_TOKEN");
let setHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    "Authorization": accessToken && accessToken !== null ? `Bearer ${accessToken}` : ""
};

export const client = axios.create(
    {
        baseURL: API_BASE_URL,
        headers: setHeaders
    }
);
