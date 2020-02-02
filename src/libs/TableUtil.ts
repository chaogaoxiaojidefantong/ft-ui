import TableShowIe from '../interface/TableShowIe';
class TableUtil{
        /**
     * 过滤表格
     */
    filterTable(list:Array<TableShowIe.mediasIe>){
        list.map(item=>{     
         if(item.url_type==0){
             item.url_type='不带联系方式'
         }
         else if(item.url_type==1){
           item.url_type='超链接'
         }
         else if(item.url_type==2){
           item.url_type='网址'
         }
         else{
           item.url_type='微信QQ'
         }

         if(item.news_source==0){
           item.news_source='非百度新闻源'
         }
         else{
           item.news_source='百度新闻源'
         }
         item.account_auth==0?item.account_auth='未认证':item.account_auth='已认证'
         //item.draft_rate=item.draft_rate+'%'
         //item.price=item.price+' MET'

        })
        return list;
     }
}
const tableUtil=new TableUtil();
export default tableUtil;