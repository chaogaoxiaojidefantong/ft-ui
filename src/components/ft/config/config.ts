interface ConfigIe{
    cssPrefix:string
}
class Config implements ConfigIe{
    readonly cssPrefix='ft-'
    readonly stylePrefix='ft'
    readonly componentPrefix='Ft'
}
const config=new Config();
export default config;