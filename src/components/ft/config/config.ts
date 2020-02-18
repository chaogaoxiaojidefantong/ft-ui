interface ConfigIe{
    cssPrefix:string
}
class Config implements ConfigIe{
    readonly cssPrefix='ft-'
}
const config=new Config();
export default config;