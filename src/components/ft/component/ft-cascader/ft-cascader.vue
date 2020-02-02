<template>
  <div>
    <el-cascader
      placeholder="请选择地区"
      :options="options"
      filterable
      v-model="selectRegion"
      @change="getVal"
      ref="cascaderAddr"
      :props="{ checkStrictly: multiple }"
      clearable
    >
    </el-cascader>
  </div>
</template>
<script>
import regions from "../../utils/region";
export default {
  name: "FtCascader",
  data() {
    return {
      selectRegion: [],
      options: []
    };
  },
  props: {
    multiple: {
      //是否支持只选一级或者二级
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.getData();
  },
  updated() {
    this.selectRegion;
  },
  methods: {
    getVal() {
      let label=''
      if (this.$refs["cascaderAddr"].getCheckedNodes()[0]) {
        label = this.$refs["cascaderAddr"].getCheckedNodes()[0].pathLabels;
        let res = {
          province: label[0],
          city: label[1],
          area: label[2],
          province_code: this.selectRegion[0],
          city_code: this.selectRegion[1],
          area_code: this.selectRegion[2]
        };
        this.$emit("getArr", res);
      }
      else{
         this.$emit("clearCascaderData");
      }
    },
    getData() {
      let arr1 = this.getProvinces();
      let arr2 = this.getCitys(arr1);
      this.options = arr2;
    },
    getProvinces() {
      let arr = [];
      regions.map(item => {
        let { id, name, parent_id } = item;
        let obj = {};
        if (parent_id == "0") {
          obj.value = id;
          // obj.value=name
          obj.label = name;
          arr.push(obj);
        }
      });
      return arr;
    },
    /**
     *
     */
    getCitys(arr) {
      arr.map(province => {
        let childArr = [];
        regions.map(city => {
          let obj = {};
          if (province.value == city.parent_id) {
            obj.value = city.id;
            obj.label = city.name;
            obj.children = this.getArea(obj);
            childArr.push(obj);
          }
        });
        province.children = childArr;
        this.getArea(childArr);
      });
      return arr;
    },
    /**
     * arr 某省城市的地区集合
     */
    getArea(city) {
      let childArr = [];
      regions.map(area => {
        if (area.parent_id == city.value) {
          let obj = {};
          if (area.parent_id == city.value) {
            obj.value = area.id;
            obj.label = area.name;
          }
          childArr.push(obj);
        }
      });
      return childArr;
    }
  }
};
</script>