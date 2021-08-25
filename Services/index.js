import axios from "axios";

export default axios.create({
  baseURL: "https://svtm-server.herokuapp.com/svtm"
});