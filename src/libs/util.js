import Cookies from "js-cookie";
import config from "@/config/config";
//保存token到cookie里
export const setToken = token => {
  Cookies.set("token", token, config);
};

//获取cookie里的token
export const getToken = () => {
  return Cookies.get("token");
};
