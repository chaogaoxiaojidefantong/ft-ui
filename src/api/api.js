// 专门存放发送异步请求后接受到的数据
import { axios } from "@/libs/api.request";

//用户

//获取登录信息
export const getLoginMessage = data => {
  return axios.request({
    url: "/adminServiceZuul/User/login",
    method: "post",
    data: data
  });
};

//获取登录信息
export const emailCheck = data => {
  return axios.request({
    url: "/adminServiceZuul/User/sendCode",
    method: "post",
    data: data
  });
};

//通过id查询用户信息
export const selectOneUser = data => {
  return axios.request({
    url: "/adminServiceZuul/User/selectOne",
    method: "post",
    data: data
  });
};

//修改用户信息
export const updateOneUser = data => {
  return axios.request({
    url: "/adminServiceZuul/User/updateUser",
    method: "post",
    data: data
  });
};

//通过token获取用户信息
export const loginByToken = data => {
  return axios.request({
    url: "/adminServiceZuul/User/loginByToken",
    data: { token: data }, //因为要传的是对象
    method: "post"
  });
};

//通过邮箱验证码登录
export const loginByCo = data => {
  return axios.request({
    url: "/adminServiceZuul/User/loginByCode",
    method: "post",
    data: data
  });
};

//通过邮箱验证码修改密码
export const updateUserByCode = data => {
  return axios.request({
    url: "/adminServiceZuul/User/updateUserByCode",
    method: "post",
    data: data
  });
};

//获取注册信息
export const registGo = data => {
  return axios.request({
    url: "/adminServiceZuul/User/regist",
    method: "post",
    data: data
  });
};

//退出操作
export const userLogout = data => {
  return axios.request({
    url: "/adminServiceZuul/User/logout",
    method: "post",
    data: { token: data }
  });
};
