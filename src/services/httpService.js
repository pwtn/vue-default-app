import * as axios from "axios";
// import store from "@/store/index";

axios.defaults.headers.common["Content-Type"] = "application/json";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  baseUrl: "http://localhost:3000"
};

//   headers: {
//     responseType: "application/json",
//     authorization: localStorage.getItem("user")
//       ? "bearer " + JSON.parse(localStorage.getItem("user")).token
//       : null
//   }
