import axios from "axios";

const axiosObject = axios.create({
  baseURL: "http://localhost:3001/",
});

export default axiosObject;
