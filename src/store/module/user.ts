
import userMapper from '../../mapper/userMapper'


const user = {
    namespaced: true,
    // plugins: [createPersistedState()],
    state: {

    },
    mutations: {

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
        }
       

    }
}
export default user;