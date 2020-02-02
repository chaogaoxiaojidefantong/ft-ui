import UserIe from '../interface/UserIe';

class UserUtil{
    /**
     * 获取用户等级
     */
    getLevel():number{
        const user=this.getUser()
        if(user){
            return user.level;
        }
        else{
            return 0;
        }   
    }
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
     * 存储微信支付的链接到session
     */
    setWeixinData(data: UserIe.weiXinResIe){
        let saveData: UserIe.weiXinResIe={code_url:data.code_url,out_trade_no:data.out_trade_no}       
        sessionStorage.setItem('weixinData',JSON.stringify(saveData));
    }
    /**
     * 获取微信支付的链接
     */
    getWeixinData(): UserIe.weiXinResIe{
        let dataStr=sessionStorage.getItem('weixinData');
        let data=dataStr as string
      return JSON.parse(data);
    }
}
export default new UserUtil();