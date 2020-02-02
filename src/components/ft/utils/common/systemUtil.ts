class SystemUtil{
    isMobile(){
        const ua = navigator.userAgent.toLowerCase();
        const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);
        return isMobile;
    }
    
}
export default new SystemUtil();
