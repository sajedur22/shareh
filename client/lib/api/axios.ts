import axios, { AxiosInstance } from "axios";

const BASE = process.env.NEXT_PUBLIC_API_URL;

export const api: AxiosInstance = axios.create({
    baseURL: BASE,
    headers: {
        "Content-Type": "application/json",
    },
});
