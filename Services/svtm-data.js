import http from "./index";

const getAll = () => {
  console.log("asdasd")
  return http.get("/getdata");
};

const get = id => {
  return http.get(`/getdatabyid/${id}`);
};

const create = data => {
  return http.post("/postdata", data);
};

export default {
    getAll,
    get,
    create
  };