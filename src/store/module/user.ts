
import userMapper from '../../mapper/userMapper'
import UserIe from 'src/interface/UserIe';
import CommonIe from 'src/interface/CommonIe'
import {setToken} from '../../libs/util'
import config from '../../config/config'
import userUtil from '../../libs/userUtil';
const user = {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        loginActions({},data:UserIe.LoginParamIe){
            return new Promise((resolve,reject)=>{
                userMapper.login(data).then((res:CommonIe.ResParamIe)=>{
                    setToken(res.data.token);
                    userUtil.saveUser(res.data.user);
                    resolve(res.msg);
                },(err:any)=>{
                    reject(config.errMsg);
                })
            })
        } 
    }
}
export default user;