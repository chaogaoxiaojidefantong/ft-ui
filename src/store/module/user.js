import { setToken, getToken } from "@/libs/util";
import Cookies from "js-cookie";
import {
  getLoginMessage,
  loginByCo,
  updateOneUser,
  loginByToken
} from "@/api/api.js";
let user = {
  state: {
    userEmail: "",
    userPwd: "",
    userName: "",
    token: "",
    userStatus: "",
    userId: "",
    userPhone: ""
  },
  mutations: {
    setuserEmail(state, userEmail) {
      state.userEmail = userEmail;
    },
    setuserPwd(state, userPwd) {
      state.userPwd = userPwd;
    },
    setuserName(state, userName) {
      state.userName = userName;
    },
    setToken(state, token) {
      state.token = token;
    },
    setuser(state, user) {
      state.userEmail = user.userEmail;
      state.userPwd = user.userPwd;
      state.userName = user.userName;
      state.token = user.token;
      state.userStatus = user.userStatus;
      state.userId = user.userId;
      state.userPhone = user.userPhone;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        getLoginMessage(user).then(
          res => {
            let result = res.data.data;
            if (!result) {
              reject("登录失败");
              return;
            }
            commit("setuser", result.user);
            setToken(result.token);
            localStorage.setItem("user", JSON.stringify(result.user));
            resolve(result.user);
          },
          err => {
            reject("登录失败");
          }
        );
      });
    },
    //通过验证码登录
    loginByCode({ commit }, user) {
      return new Promise((resolve, reject) => {
        loginByCo(user).then(
          res => {
            debugger;
            let result = res.data.data;
            commit("setuser", result.user);
            setToken(result.token);
            localStorage.setItem("user", JSON.stringify(result.user));
            resolve(result.user);
          },
          err => {
            reject("登录失败");
          }
        );
      });
    },

    //修改用户信息
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        updateOneUser(user).then(
          res => {
            let result = res.data.data;
            if (!result) {
              reject("更新失败");
              return;
            }
            commit("setuser", result.user);
            setToken(result.token);
            localStorage.setItem("user", JSON.stringify(result.user));
            resolve(result.user);
          },
          err => {
            reject("更新失败");
          }
        );
      });
    },

    //token登录获取登录信息
    tokenLogin({ commit }) {
      return new Promise((resolve, reject) => {
        const token = getToken();
        loginByToken(token).then(
          res => {
            let result = res.data.data;
            let userVuex = result.user;
            commit("setuser", userVuex);
            setToken(result.token);
            localStorage.setItem("user", JSON.stringify(userVuex));
            resolve(userVuex);
          },
          err => {
            reject("信息错误");
          }
        );
      });
    },
    logout({ commit }) {
      const token = getToken();
      return new Promise((resolve, reject) => {
        userLogout(token).then(
          res => {
            if (res.data.status == 201) {
              reject("退出失败");
              return;
            }
            localStorage.clear();
            commit("setToken", "");
            Cookies.remove("token");
            resolve("退出成功");
          },
          err => {
            reject("退出失败");
          }
        );
      });
    }
  }
};
export default user;
