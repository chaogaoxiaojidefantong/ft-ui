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
    /**
     * 存储用户信息到storage里
     */
    saveUser(data:UserIe.UserObjIe):void{
        localStorage.setItem('user',JSON.stringify(data));      
    }

}
export default new UserUtil();