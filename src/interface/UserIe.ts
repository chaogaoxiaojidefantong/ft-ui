
namespace UserIe{
    export interface UserObjIe{
    id:number;
    fid:number;//推荐id
    level:number;//会员等级
    username:string;//用户名
    mobile:string;//手机号
    password:string;//登陆密码
    pay_pass:string;//支付密码
    invite_code:string;//邀请码
    last_time:string;//
    state:number;//0正常,1禁止
    create_time:string;//创建时间
    up_date?:string|number;
    from_id?:number;
    area_code:string;
    province:string;
    city:string;
    area:string;
    is_right:number;//代理商是否可以正常获取发稿返利和发布任务 1正常 2停用
    }
    export interface LoginParamIe{
        userEmail:string,
        userPwd:string
    }
    


}
export default UserIe