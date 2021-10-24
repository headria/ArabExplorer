import axios from "axios";
axios.defaults.baseURL = "http://18.220.171.18:5111/api/postgres";
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

// declare interceptors there

export default axios;
