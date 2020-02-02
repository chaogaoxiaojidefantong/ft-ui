
/**
 * 表格传的参数
 */
namespace TableIe{
    /**
     * 传参时公用的属性
     */
   export interface PublicIe{
        page?:number|string,
        size?:number|string,
        start?:number|string,
        end?:number|string,
        province?:number|string,
        city?:number|string,
        area?:number|string
    }
    
}


export default TableIe;