import axios from "axios";

export const API = axios.create({
  // baseURL: "https://api.rajaongkir.com/starter",
  // headers: {
  //   "Content-Type": "application/json",
  //   "x-api-key": "4925958e0c79e55d22e756197e389f34",
  // },
  baseURL: "https://rajaongkir-ahsan.herokuapp.com/api/",
});
