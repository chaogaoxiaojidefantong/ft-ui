
import {axios} from '../libs/api.request'
import UserIe from '../interface/UserIe';

/**
 * UserMapper类的接口
 */
interface UserMapperIeTest{
    sendMsg(data:{moile:string}):any;
}


 class UserMapper implements UserMapperIeTest{

    /**
     * 发送手机验证码
     * @param data 
     */
    sendMsg(data:{moile:string}):any{
        return axios.request({
            url: "/api/v1/sendMsg",
            method: "post",
            data: data
        });
    }
  

}
export default new UserMapper();