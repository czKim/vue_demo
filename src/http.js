import axios from "axios";

const http = axios.create({
  baseURL: "https://poc-gateway.apps.dhccloud.com.cn",
});

export default http;
