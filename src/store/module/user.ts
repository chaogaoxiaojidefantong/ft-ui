
import userMapper from '../../mapper/userMapper'
import { setToken, getToken } from '../../libs/util'
import config from '../../config/config'
import createPersistedState from 'vuex-persistedstate';
import CommonIe from '../../interface/common-ie';
import UserIe from '../../interface/UserIe';

interface State {
    mobile: string,
    userName: string,
    password: string,
    code: string,
    token: string,
    level: string,
    id:any
}
/**
 * 修改地区接口
 */
interface areaEditFormat {
    area: string,//所在地区
    province: string,//省
    city: string,//市
    areaCode: string,//地区编码
    code:string
}
interface User {
    state: State;
    mutations: any;
    actions: any;
}
const user = {
    namespaced: true,
    // plugins: [createPersistedState()],
    state: {
        mobile: '',
        userName: '',
        password: '',
        code: '',//验证码
        token: '',
        id:'',
        level: '',//用户等级
        area: '',//所在地区
        province: '',//省
        city: '',//市
        areaCode: ''//地区编码
    },
    mutations: {
        setMobile(state: State, mobile: string) {
            state.mobile = mobile
        },
        setUserName(state: State, userName: string) {
            state.userName = userName
        },
        setPassword(state: State, password: string) {
            state.password = password
        },
        setCode(state: State, code: string) {
            state.code = code
        },
        setToken(state: State, token: string,id:any) {
            state.token = token
            state.id = id
        },
        setLevel(state: State, level: string) {
             
            state.level = level
        },
        setUser(state: State, user: State) {
            state.mobile = user.mobile
            state.userName = user.userName
            state.password = user.password
            state.code = user.code
            state.token = user.token
            state.level = user.level
        }
    },
    actions: {
        //获取验证码
        sendMsg({ commit }: any, param: any) {
            return new Promise((resolve, reject) => {
                userMapper.sendMsg(param).then((res: any) => {
                    resolve(res.msg);
                }, (err: any) => {
                    reject(err.msg)
                })
            })
        },
        /**
         * 注册
         * @param param0 
         * @param param 
         */
        register({ commit }: any, param: any) {
            param.leaveToken = true
            return new Promise((resolve, reject) => {
                userMapper.register(param).then((res: any) => {
                    const {  code ,  msg  } = res
                    if (code == config.successCode) {
                        const {  data  } = res
                        const { token, ...user } = data
                        user.username = param.username
                        commit('setToken', token)
                        localStorage.setItem('user', JSON.stringify(user));
                        setToken(token);
                        resolve(msg);
                    }
                    else {
                        reject(msg);
                    }
                }, (err: any) => {
                    reject(err.msg);
                })
            })
        },
        /**
         * 登录
         */
        login({ commit }: any, param: any) {
            param.leaveToken = true
            return new Promise((resolve, reject) => {
                userMapper.login(param).then((res: any) => {
                    const {   code ,   msg  } = res
                    if (code == config.successCode) {
                        const {  data  } = res
                        const { token, ...user } = data
                        commit('setToken', token);
                        user.username = param.username
                        localStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('id', JSON.stringify(data.id));
                        setToken(token);
                        resolve(msg);
                    }
                    else {
                        reject(msg);
                    }
                }, (err: any) => {
                    reject(config.errMsg);
                })
            })
        },
        /**
         * 退出登录
         * @param param0 
         * @param param 
         */
        logout({ commit }: any) {
            return new Promise((resolve, reject) => {
                try {
                    localStorage.clear();
                    setToken('');
                    resolve('退出成功')
                }
                catch (e) {
                    reject('退出失败');
                }
            })
        },
        /**
         * 用户修改地址
         * @param param0 
         */
        areaEdit({commit}: any, param: areaEditFormat) {
            return new Promise((resolve,reject)=>{
                userMapper.areaEdit(param).then((res:any)=>{
                    const {code,msg}=res
                    if(code==200){
                        resolve(msg);
                    }else{
                        reject(msg);
                    }
                },(err: any)=>{
                    reject(config.errMsg);
                })
            })
        },
        /**
         * 获取账户余额
         * @param param0 
         * @param param 
         */
        getAccountActions({commit}: any, param:any){
            return new Promise((resolve,reject)=>{
                userMapper.getAccount(param).then((result:any)=>{
                    const res=(result as CommonIe.ResParamIe)
                    if(res.code==200){
                        resolve(res.data);
                    }else{
                        reject(res.msg);
                    }
                }),(err:CommonIe.ErrParamIe)=>{
                    reject(err.msg);
                }
            })
        },
        /**
         * 查询充值状态
         * @param param0 
         * @param param 
         */
        getRechargeStatusActions({commit}: any, param:UserIe.getRechargeStatusParamIe){
            return new Promise((resolve,reject)=>{
                userMapper.getRechargeStatus(param).then((result:any)=>{
                    const res=result as CommonIe.ResParamIe
                    if(res.code==200&&res.status==1){
                        resolve(res)
                    }
                    reject(res.msg)
                },(err:CommonIe.ErrParamIe)=>{
                    reject(err.msg)
                })
            })
        }
    }
}
export default user;