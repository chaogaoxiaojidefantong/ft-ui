// 专门存放发送异步请求后接受到的数据
import { axios } from "@/libs/api.request";

const UserMapper = class UserMapper {
  getLoginMessage(data) {
    return axios.request({
      url: "/adminServiceZuul/User/login",
      method: "post",
      data: data
    });
  }
};
export default UserMapper;
