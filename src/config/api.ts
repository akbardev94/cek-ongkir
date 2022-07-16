import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.rajaongkir.com/starter",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "x-api-key": "4925958e0c79e55d22e756197e389f34",
  },
});
