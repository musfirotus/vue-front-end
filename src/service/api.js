import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default instance;
