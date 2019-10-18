import { axios } from "@/libs/api.request";
const ComponentMapper = class componentMapper {
  constructor() {}
  selectAll() {
    return axios.request({
      url: "/componentServiceZuul/Component/selectAll",
      method: "post"
    });
  }
};
export default ComponentMapper;
