<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="主流媒体" name="first">
          <div class="channelTwo">
            <div class="channel">
              <p class="channelThree">频道类型：</p>
              <div class="channelFOur" v-if="radio == true">
                <el-radio-group v-model="radio1" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="IT科技"></el-radio-button>
                  <el-radio-button label="生活消费"></el-radio-button>
                  <el-radio-button label="女性时尚"></el-radio-button>
                  <el-radio-button label="娱乐休闲"></el-radio-button>
                  <el-radio-button label="游戏网站"></el-radio-button>
                  <el-radio-button label="汽车网站"></el-radio-button>
                  <el-radio-button label="教育培训"></el-radio-button>
                  <el-radio-button label="酒店旅游"></el-radio-button>
                  <el-radio-button label="医疗健康"></el-radio-button>
                  <el-radio-button label="房产家居"></el-radio-button>
                  <el-radio-button label="财经商业"></el-radio-button>
                  <el-radio-button label="新闻资讯"></el-radio-button>
                  <el-radio-button label="套餐系列"></el-radio-button>
                  <el-radio-button label="最新秒杀"></el-radio-button>
                  <el-radio-button label="十元专区"></el-radio-button>
                  <el-radio-button label="文化艺术"></el-radio-button>
                  <el-radio-button label="体育运动"></el-radio-button>
                  <el-radio-button label="食品餐饮"></el-radio-button>
                  <el-radio-button label="工业贸易"></el-radio-button>
                  <el-radio-button label="亲子母婴"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="channelFOur" v-if="radio == false">
                <el-checkbox-button
                  fill="#ffffff"
                  :indeterminate="isIndeterminate"
                  v-model="checkAll"
                  @change="handleCheckAllChange"
                >全部</el-checkbox-button>
                <el-checkbox-group
                  v-model="checkedCities"
                  @change="handleCheckedCitiesChange"
                  fill="#ffffff"
                >
                  <el-checkbox-button v-for="city in cities" :label="city" :key="city">
                    {{
                    city
                    }}
                  </el-checkbox-button>
                </el-checkbox-group>
              </div>
              <div class="channelOne" @click="multiSelect" v-if="radio == true">
                <img src="../../../assets/home/jiahao.png" />
                <span>多选</span>
              </div>
              <div class="channelOne" @click="multiSelect" v-if="radio == false">
                <img src="../../../assets/home/jiahao.png" />
                <span>单选</span>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">综合门户：</p>
              <div class="channelFOur" v-if="zonghe == true">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="不限"></el-checkbox>
                  <el-checkbox label="新浪网"></el-checkbox>
                  <el-checkbox label="搜狐网"></el-checkbox>
                  <el-checkbox label="腾讯网"></el-checkbox>
                  <el-checkbox label="网易新闻"></el-checkbox>
                  <el-checkbox label="凤凰网"></el-checkbox>
                  <el-checkbox label="中华网"></el-checkbox>
                  <el-checkbox label="新浪中国"></el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="channelFOur" v-if="zonghe == false">
                <el-radio-group v-model="radio2" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="新浪网"></el-radio-button>
                  <el-radio-button label="搜狐网"></el-radio-button>
                  <el-radio-button label="腾讯网"></el-radio-button>
                  <el-radio-button label="网易新闻"></el-radio-button>
                  <el-radio-button label="凤凰网"></el-radio-button>
                  <el-radio-button label="中华网"></el-radio-button>
                  <el-radio-button label="新浪中国"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="channelOne" @click="multiOne" v-if="zonghe == true">
                <img src="../../../assets/home/jiahao.png" />
                <span>单选</span>
              </div>
              <div class="channelOne" @click="multiOne" v-if="zonghe == false">
                <img src="../../../assets/home/jiahao.png" />
                <span>多选</span>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">覆盖地区：</p>
              <div class="channelFOur" v-if="diqu == true">
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model="checkAllTwo"
                  @change="handleCheckAllChangeTwo"
                >全选</el-checkbox>
                <div style="margin: 0px 15px;"></div>
                <el-checkbox-group
                  v-model="checkedCitiesTwo"
                  @change="handleCheckedCitiesChangeTwo"
                >
                  <el-checkbox v-for="city in citiesOne" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="channelFOur" v-if="diqu == false">
                <el-radio-group v-model="radio3" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="北京"></el-radio-button>
                  <el-radio-button label="上海"></el-radio-button>
                  <el-radio-button label="天津"></el-radio-button>
                  <el-radio-button label="重庆"></el-radio-button>
                  <el-radio-button label="河北"></el-radio-button>
                  <el-radio-button label="山西"></el-radio-button>
                  <el-radio-button label="内蒙古"></el-radio-button>
                  <el-radio-button label="广东"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="channelOne" @click="ButDiQu" v-if="diqu == true">
                <img src="../../../assets/home/jiahao.png" />
                <span>单选</span>
              </div>
              <div class="channelOne" @click="ButDiQu" v-if="diqu == false">
                <img src="../../../assets/home/jiahao.png" />
                <span>多选</span>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">价格分类：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio4" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="0-50"></el-radio-button>
                  <el-radio-button label="50-100"></el-radio-button>
                  <el-radio-button label="100-200"></el-radio-button>
                  <el-radio-button label="200以上"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="channelFive">
              <p class="channelThree">链接类型：</p>
              <div class="channelFOur">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="不限">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="新闻源">
                    <el-select v-model="formInline.region1" placeholder="不限">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="收录情况">
                    <el-select v-model="formInline.region2" placeholder="不限">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="入口级别">
                    <el-select v-model="formInline.region3" placeholder="不限">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div class="channelSix">
              <p class="channelThree">已选择：</p>
              <div class="channelFOur">
                <span>不限</span>
              </div>
            </div>
            <div class="channelFive">
              <p class="channelThree">链接类型：</p>
              <div class="channelFOur">
                <p class="moren">默认</p>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item>
                    <el-select v-model="formInline.region4" placeholder="活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="toufang" @click="openPopup">投放策略(2)</div>
              <el-dialog title="提示" :visible="strategy" append-to-body width="16%" center>
                <span class="close" @click="closePopup">X</span>
                <div class="modify">抱歉您还未有创建投放策略，请先创建。</div>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="closePopup">去创建</el-button>
                </span>
              </el-dialog>
            </div>
            <div>
              <el-table
                :header-cell-style="{background:'#E5E9F2'}"
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
              >
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="date" label="媒体名称"></el-table-column>
                <el-table-column prop="name" label="价格" sortable></el-table-column>
                <el-table-column prop="name" label="出稿率" sortable></el-table-column>
                <el-table-column prop="name" label="电脑权重" sortable></el-table-column>
                <el-table-column prop="name" label="移动权重" sortable></el-table-column>
                <el-table-column prop="date" label="新闻源"></el-table-column>
                <el-table-column prop="date" label="联系方法"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <div class size="mini" @click="handleEdit(scope.$index, scope.row)">+策略</div>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="dataTotal"
                @current-change="pageSelect"
                :page-size="pageSize"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自媒体" name="second">
          <div class="channelTwo">
            <div class="channel">
              <p class="channelThree">
                平
                <span style="margin-right:29px"></span>台：
              </p>
              <div class="channelFOur" v-if="radio == true">
                <el-radio-group v-model="radio1" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="今日头条"></el-radio-button>
                  <el-radio-button label="百家号"></el-radio-button>
                  <el-radio-button label="微信公众号"></el-radio-button>
                  <el-radio-button label="豆瓣号"></el-radio-button>
                  <el-radio-button label="知乎"></el-radio-button>
                  <el-radio-button label="一点资讯"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="channelFOur" v-if="radio == false">
                <el-checkbox-button
                  fill="#ffffff"
                  :indeterminate="isIndeterminate"
                  v-model="checkAll"
                  @change="handleCheckAllChange"
                >全部</el-checkbox-button>
                <el-checkbox-group
                  v-model="checkedCities"
                  @change="handleCheckedCitiesChange"
                  fill="#ffffff"
                >
                  <el-checkbox-button v-for="city in cities" :label="city" :key="city">
                    {{
                    city
                    }}
                  </el-checkbox-button>
                </el-checkbox-group>
              </div>
              <div class="channelOne" @click="multiSelect" v-if="radio == true">
                <img src="../../../assets/home/jiahao.png" />
                <span>多选</span>
              </div>
              <div class="channelOne" @click="multiSelect" v-if="radio == false">
                <img src="../../../assets/home/jiahao.png" />
                <span>单选</span>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">行业分类：</p>
              <div class="channelFOur" v-if="zonghe == true">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="不限"></el-checkbox>
                  <el-checkbox label="文化"></el-checkbox>
                  <el-checkbox label="汽车"></el-checkbox>
                  <el-checkbox label="三农"></el-checkbox>
                  <el-checkbox label="娱乐"></el-checkbox>
                  <el-checkbox label="时尚"></el-checkbox>
                  <el-checkbox label="美食"></el-checkbox>
                  <el-checkbox label="摄影"></el-checkbox>
                  <el-checkbox label="旅游"></el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="channelFOur" v-if="zonghe == false">
                <el-radio-group v-model="radio2" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="文化"></el-radio-button>
                  <el-radio-button label="汽车"></el-radio-button>
                  <el-radio-button label="三农"></el-radio-button>
                  <el-radio-button label="娱乐"></el-radio-button>
                  <el-radio-button label="时尚"></el-radio-button>
                  <el-radio-button label="美食"></el-radio-button>
                  <el-radio-button label="摄影"></el-radio-button>
                  <el-radio-button label="旅游"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="channelOne" @click="multiOne" v-if="zonghe == true">
                <img src="../../../assets/home/jiahao.png" />
                <span>单选</span>
              </div>
              <div class="channelOne" @click="multiOne" v-if="zonghe == false">
                <img src="../../../assets/home/jiahao.png" />
                <span>多选</span>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">覆盖地区：</p>
              <div class="channelFOur" v-if="diqu == true">
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model="checkAllTwo"
                  @change="handleCheckAllChangeTwo"
                >全选</el-checkbox>
                <div style="margin: 0px 15px;"></div>
                <el-checkbox-group
                  v-model="checkedCitiesTwo"
                  @change="handleCheckedCitiesChangeTwo"
                >
                  <el-checkbox v-for="city in citiesOne" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="channelFOur" v-if="diqu == false">
                <el-radio-group v-model="radio3" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="北京"></el-radio-button>
                  <el-radio-button label="上海"></el-radio-button>
                  <el-radio-button label="天津"></el-radio-button>
                  <el-radio-button label="重庆"></el-radio-button>
                  <el-radio-button label="河北"></el-radio-button>
                  <el-radio-button label="山西"></el-radio-button>
                  <el-radio-button label="内蒙古"></el-radio-button>
                  <el-radio-button label="广东"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="channelOne" @click="ButDiQu" v-if="diqu == true">
                <img src="../../../assets/home/jiahao.png" />
                <span>单选</span>
              </div>
              <div class="channelOne" @click="ButDiQu" v-if="diqu == false">
                <img src="../../../assets/home/jiahao.png" />
                <span>多选</span>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">粉丝数：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio4" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="0-1000"></el-radio-button>
                  <el-radio-button label="1000-5000"></el-radio-button>
                  <el-radio-button label="5000-1万"></el-radio-button>
                  <el-radio-button label="1万-5万"></el-radio-button>
                  <el-radio-button label="5万-10万"></el-radio-button>
                  <el-radio-button label="10万-100万"></el-radio-button>
                  <el-radio-button label="100万以上"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">阅读量：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio5" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="0-1000"></el-radio-button>
                  <el-radio-button label="1000-5000"></el-radio-button>
                  <el-radio-button label="5000-1万"></el-radio-button>
                  <el-radio-button label="1万-5万"></el-radio-button>
                  <el-radio-button label="5万-10万"></el-radio-button>
                  <el-radio-button label="10万以上"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">价格分类：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio6" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="0-50"></el-radio-button>
                  <el-radio-button label="50-200"></el-radio-button>
                  <el-radio-button label="200-500"></el-radio-button>
                  <el-radio-button label="500-1000"></el-radio-button>
                  <el-radio-button label="1000-2000"></el-radio-button>
                  <el-radio-button label="2000-5000"></el-radio-button>
                  <el-radio-button label="5000以上"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">账号认证：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio7" fill="#ffffff">
                  <el-radio-button label="默认"></el-radio-button>
                  <el-radio-button label="已验证"></el-radio-button>
                  <el-radio-button label="未验证"></el-radio-button>
                </el-radio-group>
              </div>
            </div>

            <div class="channelSix">
              <p class="channelThree">已选择：</p>
              <div class="channelFOur">
                <span>不限</span>
              </div>
            </div>
            <div class="channelFive">
              <p class="channelThree">链接类型：</p>
              <div class="channelFOur">
                <p class="moren">默认</p>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item>
                    <el-select v-model="formInline.region4" placeholder="活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="toufang" @click="openPopup">投放策略(2)</div>
              <el-dialog title="提示" :visible="strategy" append-to-body width="16%" center>
                <span class="close" @click="closePopup">X</span>
                <div class="modify">抱歉您还未有创建投放策略，请先创建。</div>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="closePopup">去创建</el-button>
                </span>
              </el-dialog>
            </div>
            <div>
              <el-table
                :header-cell-style="{background:'#E5E9F2'}"
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
              >
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="date" label="媒体名称"></el-table-column>
                <el-table-column prop="name" label="价格" sortable></el-table-column>
                <el-table-column prop="name" label="初稿率" sortable></el-table-column>
                <el-table-column prop="name" label="电脑权重" sortable></el-table-column>
                <el-table-column prop="name" label="移动权重" sortable></el-table-column>
                <el-table-column prop="date" label="新闻源"></el-table-column>
                <el-table-column prop="date" label="媒体名称"></el-table-column>
                <el-table-column prop="date" label="联系方法"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <div class size="mini" @click="handleEdit(scope.$index, scope.row)">+策略</div>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="dataTotal"
                @current-change="pageSelect"
                :page-size="pageSize"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="区块链媒体" name="third">
          <div class="channelTwo">
            <div class="channel">
              <p class="channelThree">新闻源：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio1" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="百度新闻源"></el-radio-button>
                  <el-radio-button label="非百度新闻源"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">价格分类：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio6" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="0-50"></el-radio-button>
                  <el-radio-button label="50-200"></el-radio-button>
                  <el-radio-button label="200-500"></el-radio-button>
                  <el-radio-button label="500-1000"></el-radio-button>
                  <el-radio-button label="1000-2000"></el-radio-button>
                  <el-radio-button label="2000-5000"></el-radio-button>
                  <el-radio-button label="5000以上"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">账号认证：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio7" fill="#ffffff">
                  <el-radio-button label="默认"></el-radio-button>
                  <el-radio-button label="已验证"></el-radio-button>
                  <el-radio-button label="未验证"></el-radio-button>
                </el-radio-group>
              </div>
            </div>

            <div class="channelSix">
              <p class="channelThree">已选择：</p>
              <div class="channelFOur">
                <span>不限</span>
              </div>
            </div>
            <div class="channelFive">
              <p class="channelThree">链接类型：</p>
              <div class="channelFOur">
                <p class="moren">默认</p>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item>
                    <el-select v-model="formInline.region4" placeholder="活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="toufang" @click="openPopup">投放策略(2)</div>
              <el-dialog title="提示" :visible="strategy" append-to-body width="16%" center>
                <span class="close" @click="closePopup">X</span>
                <div class="modify">抱歉您还未有创建投放策略，请先创建。</div>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="closePopup">去创建</el-button>
                </span>
              </el-dialog>
            </div>
            <div>
              <el-table
                :header-cell-style="{background:'#E5E9F2'}"
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
              >
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="date" label="媒体名称"></el-table-column>
                <el-table-column prop="name" label="价格" sortable></el-table-column>
                <el-table-column prop="name" label="初稿率" sortable></el-table-column>
                <el-table-column prop="name" label="电脑权重" sortable></el-table-column>
                <el-table-column prop="name" label="移动权重" sortable></el-table-column>
                <el-table-column prop="date" label="新闻源"></el-table-column>
                <el-table-column prop="date" label="媒体名称"></el-table-column>
                <el-table-column prop="date" label="联系方法"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <div class size="mini" @click="handleEdit(scope.$index, scope.row)">+策略</div>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="dataTotal"
                @current-change="pageSelect"
                :page-size="pageSize"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="快讯" name="fourth">
          <div class="channelTwo">
            <div class="channel">
              <p class="channelThree">价格分类：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio6" fill="#ffffff">
                  <el-radio-button label="不限"></el-radio-button>
                  <el-radio-button label="0-50"></el-radio-button>
                  <el-radio-button label="50-200"></el-radio-button>
                  <el-radio-button label="200-500"></el-radio-button>
                  <el-radio-button label="500-1000"></el-radio-button>
                  <el-radio-button label="1000-2000"></el-radio-button>
                  <el-radio-button label="2000-5000"></el-radio-button>
                  <el-radio-button label="5000以上"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="channel">
              <p class="channelThree">账号认证：</p>
              <div class="channelFOur">
                <el-radio-group v-model="radio7" fill="#ffffff">
                  <el-radio-button label="默认"></el-radio-button>
                  <el-radio-button label="已验证"></el-radio-button>
                  <el-radio-button label="未验证"></el-radio-button>
                </el-radio-group>
              </div>
            </div>

            <div class="channelSix">
              <p class="channelThree">已选择：</p>
              <div class="channelFOur">
                <span>不限</span>
              </div>
            </div>
            <div class="channelFive">
              <p class="channelThree">链接类型：</p>
              <div class="channelFOur">
                <p class="moren">默认</p>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item>
                    <el-select v-model="formInline.region4" placeholder="活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="toufang" @click="openPopup">投放策略(2)</div>
              <el-dialog title="提示" :visible="strategy" append-to-body width="16%" center>
                <span class="close" @click="closePopup">X</span>
                <div class="modify">抱歉您还未有创建投放策略，请先创建。</div>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="closePopup">去创建</el-button>
                </span>
              </el-dialog>
            </div>
            <div>
              <el-table
                :header-cell-style="{background:'#E5E9F2'}"
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
              >
                <el-table-column type="selection"></el-table-column>
                <el-table-column align="center" prop="date" label="媒体名称"></el-table-column>
                <el-table-column align="center" prop="name" label="价格" sortable></el-table-column>
                <el-table-column align="center" prop="name" label="初稿率" sortable></el-table-column>
                <el-table-column align="center" prop="name" label="电脑权重" sortable></el-table-column>
                <el-table-column align="center" prop="name" label="移动权重" sortable></el-table-column>
                <el-table-column align="center" prop="date" label="新闻源"></el-table-column>
                <el-table-column align="center" prop="date" label="媒体名称"></el-table-column>
                <el-table-column align="center" prop="date" label="联系方法"></el-table-column>
                <el-table-column align="center" label="操作">
                  <template slot-scope="scope">
                    <div class size="mini" @click="handleEdit(scope.$index, scope.row)">+策略</div>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="dataTotal"
                @current-change="pageSelect"
                :page-size="pageSize"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
const cityOptions = [
  "不限",
  "IT科技",
  "生活消费",
  "女性时尚",
  "娱乐休闲",
  "游戏网站",
  "汽车网站",
  "教育培训",
  "酒店旅游",
  "医疗健康",
  "房产家居",
  "财经商业",
  "新闻资讯",
  "套餐系列",
  "最新秒杀",
  "十元专区",
  "文化艺术",
  "体育运动",
  "食品餐饮",
  "工业贸易",
  "亲子母婴"
];
const cityOptionsTwo = [
  "北京",
  "上海",
  "天津",
  "重庆",
  "河北",
  "山西",
  "内蒙古",
  "广东"
];
export default {
  data() {
    return {
      activeName: "first", //切换tab
      radio1: "", //频道类型
      radio2: "", //综合
      radio3: "", //覆盖地区
      radio4: "", //价格区间
      radio5: "",
      radio6: "",
      radio7: "",
      checkList: ["新浪网"],
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false,
      dataTotal: 0, //数据总数
      pageSize: 0, //每页展示的总页数
      strategy: false, //策略
      checkAllTwo: false,
      checkedCitiesTwo: [],
      citiesOne: cityOptionsTwo,
      radio: true, //单选
      zonghe: true, //综合
      diqu: true, //覆盖地区
      formInline: {
        user: "",
        region: "",
        region1: "",
        region2: "",
        region3: "",
        region4: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    //tab标签切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //多选
    multiSelect() {
      this.radio = !this.radio;
    },
    //单选
    multiOne() {
      this.zonghe = !this.zonghe;
    },
    ButDiQu() {
      this.diqu = !this.diqu;
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },

    handleCheckAllChangeTwo(val) {
      this.checkedCitiesTwo = val ? cityOptionsTwo : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChangeTwo(value) {
      let checkedCountOne = value.length;
      this.checkAllTwo = checkedCountOne === this.citiesOne.length;
      this.isIndeterminate =
        checkedCountOne > 0 && checkedCountOne < this.citiesOne.length;
    },
    onSubmit() {
      console.log("submit!");
    },
    formatter(row, column) {
      return row.address;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    pageSelect(page) {
      //   let param={page:page,key:this.input,user_id: this.user_id,limit:this.pageLimit}
      // this.getTable(param);
    },
    //投放策略
    openPopup() {
      this.strategy = true;
    },
    closePopup() {
      this.strategy = false;
    },
    SubmitInformation(a) {
      this.$router.push(a);
      // query: {
      //   match_id: match_id,
      //   round: round
      // }
    },
    //购物车，已选择
    
  }
};
</script>
<style lang="less" scoped>
.channelTwo {
  background: #ffffff;
  padding: 10px 40px;
  margin-bottom: 60px;
}
.channel {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  .channelThree {
    width: 120px;
    font-size: 14px;
    color: #5e6d82;
  }
  .channelOne {
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80px;
    margin-left: 50px;
    img {
      width: 12px;
      height: 12px;
    }
    span {
      font-size: 14px;
      color: #99a9bf;
    }
  }
}

.toufang {
  width: 104px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: rgba(255, 193, 75, 1);
  border-radius: 6px;
  color: #ffffff;
}
.channelFOur {
  display: flex;
  flex: 1;
}
.channelFive {
  display: flex;
  justify-content: flex-start;
  .channelThree {
    width: 120px;
    font-size: 14px;
    color: #5e6d82;
  }
}
//  .channelSix {
//    float: left;
//   }
.channelSix {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e6ed;
  .channelThree {
    width: 120px;
    font-size: 14px;
    color: #5e6d82;
  }
}

.close {
  color: #d3dce6;
  position: absolute;
  top: 20px;
  right: 23px;
  background: #ffffff;
}

.modify {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
}
.dangqian {
  width: 330px;
  height: 36px;
  margin-left: 8px;
}
.dangqianOne {
  font-size: 14px;
  color: #475669;
  letter-spacing: 5px;
}
.dangqianTwo {
  font-size: 14px;
  color: #475669;
  letter-spacing: 14px;
}
.moren {
    margin-right: 20px;
    line-height: 30px;
}
</style>
<style  >
.channelFOur .el-radio-button__inner {
  white-space: nowrap;
  background: #fff;
  border: 0 !important;
  font-weight: 500;
  border-left: 0 !important;
  border-right: 0 !important;
  color: #333333;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  position: relative;
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 0;
}

.el-radio-button:active {
  border: none !important;
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #409eff;
  background-color: #ffffff;
  border: none !important;
  -webkit-box-shadow: -1px 0 0 0 #409eff;
  box-shadow: -1px 0 0 0 #409eff;
  border-left: 0 !important;
}
.el-radio-button .is-active {
  border: 0px solid #ffffff !important;
}
.el-table td,
.el-table th {
  padding: 5px 0;
  min-width: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 28px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #409eff;
  border: 1px solid #dcdfe6;
  color: #ffffff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
}
/* .el-form-item__content {
  line-height: 0px;
} */
.el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  padding: 0 12px 0 0;
  line-height: 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-dialog__body {
  padding: 0px 30px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
  line-height: 20px;
  text-align: center !important;
}
.el-checkbox-button__inner {
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background: #fff;
  border: 0px solid #dcdfe6;
  border-left: 0;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 0;
}
.el-checkbox-button.is-checked .el-checkbox-button__inner {
  color: #409eff;
  background-color: #ffffff;
  border-color: #ffffff;
  -webkit-box-shadow: -1px 0 0 0 #ffffff;
  box-shadow: -1px 0 0 0 #ffffff;
}
.el-checkbox-button.is-checked:first-child .el-checkbox-button__inner {
  border-left-color: #ffffff !important;
}
.el-checkbox-button.is-checked:first-child .el-checkbox-button__inner {
  border-left-color: #ffffff !important;
}
.el-checkbox-button:first-child .el-checkbox-button__inner {
  border-left: 1px solid #ffffff;
  border-radius: 4px 0 0 4px;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.el-tabs__item.is-active {
  color: #ffffff;
  background: #409eff;
}
.el-tabs__item {
  width: 100px;
  padding: 0;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #2d68f6;
  position: relative;
  margin-right: 10px;
  border: 1px solid #e9e9e9;
  background: #ffffff;
}
.el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0px;
  background-color: none;
  z-index: 1;
  -webkit-transition: -webkit-transform 0.3s
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  list-style: none;
}
.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
  border: 0;
}
.el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
  background-color: #e4e7ed;
  z-index: 1;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 28px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #409eff;
  border: 1px solid #dcdfe6;
  color: #ffffff;
  -webkit-appearance: none;
  text-align: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
}
.el-form-item__content {
  line-height: 0px;
}
.el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  padding: 0 12px 0 0;
  line-height: 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-dialog__body {
  padding: 0px 30px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
  line-height: 20px;
  text-align: center !important;
}
.el-checkbox-button__inner {
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background: #fff;
  border: 0px solid #dcdfe6;
  border-left: 0;
  color: #606266;
  -webkit-appearance: none;
  text-align: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 0;
}
</style>