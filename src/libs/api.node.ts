import config from "../config/config";
import HttpRequest from "./axios";
export const baseUrl:any = process.env.NODE_ENV === 'development' ? config.nodeDev : config.nodePro;
export const axios=new HttpRequest(baseUrl);