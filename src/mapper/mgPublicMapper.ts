/*
 * @Author: your name
 * @Date: 2019-12-26 13:26:41
 * @LastEditTime : 2019-12-29 15:22:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\mapper\mgPublicMapper.ts
 */
import {axios} from '../libs/api.request'
class MgPublicMapper{
    /**
     * 管理首页home数据
     */
    home(data:object){ 
        return axios.request({
            url: "/api/v1/home",
            method: "post",
            data:data
        }) 
    }

    /**
     * 媒体分发分类列表
     * @param data 
     */
    typeList(data:object){
        return axios.request({
            url: "/api/v1/index",
            method: "get",
            data:data
        }) 
    } 
}
export default new MgPublicMapper();