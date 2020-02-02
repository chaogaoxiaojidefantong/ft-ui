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
        code:number;
        msg?:string;
        data?:any;
        count?:any;
        info?:any;
        symbol:string;
        [name: string]: any;//可定义其他的属性，但是上面已有的几个也得照规范
        status?:number
    }


   
}
export default CommonIe