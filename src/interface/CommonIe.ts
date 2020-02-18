/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-01-02 11:20:15 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-01-05 18:52:56
 */
namespace CommonIe {
    /**
     * 错误参数的类型
     */
    export interface ErrParamIe{
        msg:string;//消息
    }


    /**
     * 没啥用的接口，限制数据是数组
     */
    export interface AnyArray {
        [index: number]: any;
    }

    /**
     * 数组的接口
     */
    export interface numberArray {
        [index: number]: number;
    }
    
    /**
     * 返回参数的类型
     */
    export interface ResParamIe{
       data:any,
       msg:string,
       ok:boolean,
       status:number
    }


   
}
export default CommonIe