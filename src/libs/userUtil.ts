import UserIe from '../interface/UserIe';

class UserUtil{
    //获取本地储存的用户信息
    getUser(){
        let userJson:string|null=localStorage.getItem('user');
        if(userJson){
            const user=JSON.parse(userJson);
            return user;
        }
        return null;
    }

}
export default new UserUtil();