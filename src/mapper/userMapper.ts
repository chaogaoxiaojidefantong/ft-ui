
import {axios} from '../libs/api.request'
import UserIe from '../interface/UserIe';
/**
 * 修改地区接口
 */
namespace UserMapperIe{
    export interface areaEditFormat {
        area: string,//所在地区
        province: string,//省
        city: string,//市
        areaCode: string,//地区编码
        code:string
    }
}
/**
 * UserMapper类的接口
 */
interface UserMapperIeTest{
    sendMsg(data:{moile:string}):any;
}


 class UserMapper implements UserMapperIeTest{
    //注册
    register(data:object){
        return axios.request({
            url: "/api/v1/register",
            method: "post",
            data: data
        });
    }
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
    /**
     * 登录验证码
     */
    login(data:object){
        return axios.request({
            url: "/api/v1/login",
            method: "post",
            data: data
        }) 
    }
    /**
     * 获取图形验证码
     */
    getCaptcha(data:object){
          return axios.request({
            url: "/api/v1/captcha",
            method: "get",
            data:data
          })  
    }
    /**
     * 修改地区接口
     * @param data 
     */
    areaEdit(data:UserMapperIe.areaEditFormat){
        return axios.request({
            url: "/api/v1/areaEdit",
            method: "post",
            data:data
          }) 
    }
    /**
     * 忘记密码修改支付密码
     */
    forgetPayPass(data:object){//忘记密码
        return axios.request({
            url: "/api/v1/forgetPayPass",
            method: "post",
            data:data
          }) 
    }

      /**
     * 旧密码修改支付密码
     */
    changePayPass(data:object){//忘记密码
        return axios.request({
            url: "/api/v1/changePayPass",
            method: "post",
            data:data
          }) 
    }

    /**
     * 旧密码修改密码
     */
    changePwd(data:object){
        return axios.request({
            url: "/api/v1/changePwd",
            method: "post",
            data:data
          }) 
    }

    /**
     * 
     * @param data 获取账户余额
     */
    getAccount(data:any){
        return axios.request({
            url: "/api/v1/getAccount",
            method: "post",
            data:data
          }) 
    }

}
export default new UserMapper();