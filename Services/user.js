import http from "./index";


const login = data => {
  console.log(data)
  return http.post("/login", data);
};


const register = data => {
  return http.post("/register", data);
};
const user = async () => {
  var token = await localStorage.getItem('Auth')
  console.log(token)
  return http.get("/user", { headers: { "token": `${token}` } });
};
export default {
  login,
  register,
  user
};