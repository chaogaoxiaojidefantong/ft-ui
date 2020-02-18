
import {axios} from '../libs/api.request'
import UserIe from 'src/interface/UserIe';
/**
 * UserMapper类的接口
 */
interface UserMapperIeTest{
    
}

 class UserMapper implements UserMapperIeTest{
    login(data:UserIe.LoginParamIe):any{
        return axios.request({
            url: "/User/login",
            method: "post",
            data: data
        });
    }
  

}
export default new UserMapper();