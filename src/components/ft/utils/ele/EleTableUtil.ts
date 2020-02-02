import choose from '../../../../views/manage/Media/choose.vue'
class EleTableUtil<T>{
    /**
   * 取消全选，大表格
   */
  cancelCheckAll<T>(tableData:Array<T>,refName:string){
      
    tableData.forEach(item=>{
      // let ref:any=choose.$refs;
      //   
      //ref.toggleRowSelection(item,false); 
    })
  }
}
export default EleTableUtil;