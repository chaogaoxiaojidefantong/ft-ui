
import {axios} from '../libs/api.node'
type getFileParamIe={
    session:string;//章节
    page:string;//哪页
}
/**
 * FileMapper类的接口
 */
interface FileMapperIe{
    getFile(data:getFileParamIe):any;
}
 class FileMapper implements FileMapperIe{
    /**
     * 获取代码的数据
     * @param data 
     */
    getFile(data:getFileParamIe){
        return axios.request({
            url: "/File/read",
            method: "get",
            params:data,
            data:data
        });
    }
    /**
     * 获取表格的数据
     * @param data 
     */
    getJson(data:getFileParamIe){
        return axios.request({
            url: "/File/json",
            method: "get",
            params:data,
            data:data
        });
    }
}
export default new FileMapper();