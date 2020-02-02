/**
 * 专用于省市区的处理
 */
class AreaUtil{
    /**
     * 
     * @param arr 第一个参数为地区area码，后面依次为省市区的中文
     */
    getAreaObject(arr:[number,string,string,string]){
        return {area_code:arr[0],province:arr[1],city:arr[2],area:arr[3]};
    }
}
export default new AreaUtil();