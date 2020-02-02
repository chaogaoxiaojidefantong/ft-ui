import axios from "axios";
import qs from 'qs';
import {getToken} from '@/libs/util';
import {objUtil} from '@/components/ft/index.ts'
import user  from '../store/module/user'
class HttpRequest{
    constructor(baseUrl){
        this.baseUrl=baseUrl;
    }
    getInsideConfig () {
        const config = {
          withCredentials:true,
          baseURL: this.baseUrl,
          paramsSerializer: (params)=> {
            if(params.levelToken){
                delete params.levelToken
            }else{
              const token={token:getToken()}; 
              params={...params,...token};
            }          
            return qs.stringify(params);
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        return config
      }      
      interceptor(axiosInstance){
        axiosInstance.interceptors.request.use(config=>{
            if(!config.data.leaveToken){
            const token={token:getToken()}; 
            if(token.token){
              config.data={...config.data,...token};
            }               
            }
            delete config.data.leaveToken   
            config.data=objUtil.deleteNull(config.data); //删除参数里为空的值
            config.data = qs.stringify(config.data);//转对象为url拼接的类型            
            return config;
          }, error=>{
            // 对请求错误做些什么
            return Promise.reject(error);
          });
          axiosInstance.interceptors.response.use(res=>{
            const { data, status } = res
            if(status!=200){
              alert('服务器内部出错');
              return '服务器内部出错';
            }
            return  data
          },err=>{
            // if(getToken()){//token过期的处理
            //   user.actions.logout({});
            //   location.href='/#/login'
            // }          
            return Promise.reject('服务器内部出错');
          })
      };
    request(option){
        let axiosInstance=axios.create();          
        let config=Object.assign(this.getInsideConfig(),option); 
        this.interceptor(axiosInstance);
        config=this.filterConfig(config);
        return axiosInstance(config);         
    }
     /**
     * 方便用户选择配置,参数带responseType则选择配置里的responseType
     * @param {*} config 
     */
    filterConfig(config){
      let data=config.data
        if(data.levelCredentials){
               config.withCredentials=false;
               delete data.levelCredentials
        }      
        if(data.responseType){        
            config.responseType=data.responseType
            delete data.responseType;
        }  
        config.data=data;      
        return config;
    }
};
export default HttpRequest