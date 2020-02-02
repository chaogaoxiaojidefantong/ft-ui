/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-01-02 11:20:15 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-01-05 18:52:56
 */
namespace CommonIe {
    export interface areaObjectIe{
        readonly [index: string]: number|string;//属性可以是数字或者字符串,readonly让所有属性不会被修改
        province:string;
        city:string;
        area:string;
        province_code:number;
        area_code:number;   
        city_code:number
    }
    /**
     * 错误参数的类型
     */
    export interface ErrParamIe{
        msg:string;//消息
    }
    /**
     * 上传文件后接口返回的数据
     */
    export interface UploadFileResultIe{
        title:string;
        content:string;
        url:string;
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
        data?:any|UploadFileResultIe;
        count?:any;
        info?:any;
        symbol:string;
        [name: string]: any;//可定义其他的属性，但是上面已有的几个也得照规范
        status?:number
    }


   
}
export default CommonIe