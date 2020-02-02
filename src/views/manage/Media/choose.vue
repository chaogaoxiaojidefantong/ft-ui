<template>
  <div class="mediaDistribution">
    <div class="media mb20">
      <p class="f20 c1 fw600 mb20">发稿进度</p>
      <div class="flexStart">
        <div class="flexBetween">
          <div class="flexStart">
            <p class="midiaOne width30 height30 lg30 c9 t-center bg3">1</p>
            <p class="width65 f14 c1">编辑稿件</p>
            <p class="mediaSix"></p>
          </div>
        </div>
        <div class="flexBetween">
          <div class="flexStart">
            <p class="midiaOne width30 height30 lg30 c9 t-center bg3">2</p>
            <p class="width65 f14 c1">选择渠道</p>
            <p class="mediaSix"></p>
          </div>
        </div>
        <div class="flexBetween">
          <div class="flexStart">
            <p class="mediaEng width30 height30 lg30 c8 t-center bg">3</p>
            <p class="width65 c8 f14">已处理</p>
            <p class="editorOne"></p>
          </div>
        </div>
        <div class="flexBetween">
          <div class="flexStart">
            <p class="mediaEng width30 height30 lg30 c8 t-center bg1">4</p>
            <p class="width65 c8 f14">发布中</p>
            <p class="editorOne "></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg1 pl40 pt20 mb60">
      <div class="flexStart mb10" v-if='query.type==1'>
        <p class="f14 c7 width180">频道类型:</p>
        <section v-if="radio.channel" class="flexStart">
          <div class="channelFOur flex1">
            <el-radio-group
              fill="#ffffff"
              @change="channelRadioChange"
              v-model="radioVal.channel"
            >
              <el-radio-button label="">不限</el-radio-button>
              <el-radio-button
                v-for="channel in channelArr"
                :label="channel.id"
                :key="channel.id"
                >{{ channel.name }}</el-radio-button
              >
            </el-radio-group>
          </div>
          <div class="channelOne flexStart ml20" @click="toggleRadioChannel">
            <img src="../../../assets/home/jiahao.png" />
            <span>多选</span>
          </div>
        </section>
        <section v-else class="flexCenter">
          <div class="channelFOur flex1">
            <el-checkbox
              :indeterminate="indeterminate.channel"
              v-model="checkAll.channel"
              @change="handleChannelCheckAllChange"
              >全选</el-checkbox
            >
            <el-checkbox-group
              v-model="checkboxArr.channel"
              @change="handleChannelChange"
            >
              <el-checkbox
                v-for="channel in channelArr"
                :label="channel.id"
                :key="channel.id"
                >{{ channel.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div class="channelOne flexStart ml20" @click="toggleRadioChannel">
            <img src="../../../assets/home/jiahao.png" />
            <span>单选</span>
          </div>
        </section>
      </div>

      <div class="flexStart mb10 " v-if='query.type==1'>
        <p class="f14 c7 width220">综合门户:</p>
        <section v-if="radio.portalMedia" class="flexStart">
          <div class="channelFOur flex1">
            <el-radio-group
              fill="#ffffff"
              @change="portalMediaRadioChange"
              v-model="radioVal.portalMedia"
            >
              <el-radio-button label="">不限</el-radio-button>
              <el-radio-button
                v-for="item in portalMediaArr"
                :key="item.id"
                :label="item.id"
                >{{ item.name }}</el-radio-button
              >
            </el-radio-group>
          </div>
          <div
            class="channelOne flexStart ml20"
            @click="toggleRadioPortalMedia"
          >
            <img src="../../../assets/home/jiahao.png" />
            <span>多选</span>
          </div>
        </section>
        <section v-else class="flexStart">
          <div class="channelFOur flex1">
            <el-checkbox
              :indeterminate="indeterminate.portalMedia"
              v-model="checkAll.portalMedia"
              @change="handlePortalMediaCheckAllChange"
              >全选</el-checkbox
            >
            <el-checkbox-group
              v-model="checkboxArr.portalMedia"
              @change="handlePortalMediaChange"
            >
              <el-checkbox
                v-for="item in portalMediaArr"
                :label="item.id"
                :key="item.id"
                >{{ item.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div
            class="channelOne flexStart ml20"
            @click="toggleRadioPortalMedia"
          >
            <img src="../../../assets/home/jiahao.png" />
            <span>单选</span>
          </div>
        </section>
      </div>


    <div class="flexStart mb10" v-if='query.type==2'>
        <p class="f14 c7 width180">平台:</p>
        <section v-if="radio.platform" class="flexStart">
          <div class="channelFOur flex1">
            <el-radio-group
              fill="#ffffff"
              @change="channelRadioChange"
              v-model="radioVal.platform"
            >
              <el-radio-button label="">不限</el-radio-button>
              <el-radio-button
                v-for="platform in platformArr"
                :label="platform.id"
                :key="platform.id"
                >{{ platform.name }}</el-radio-button
              >
            </el-radio-group>
          </div>
          <div class="channelOne flexStart ml20" @click="toggleRadioPlatform">
            <img src="../../../assets/home/jiahao.png" />
            <span>多选</span>
          </div>
        </section>
        <section v-else class="flexCenter">
          <div class="channelFOur flex1">
            <el-checkbox
              :indeterminate="indeterminate.platform"
              v-model="checkAll.platform"
              @change="handlePlatformCheckAllChange"
              >全选</el-checkbox
            >
            <el-checkbox-group
              v-model="checkboxArr.platform"
              @change="handlePlatformChange"
            >
              <el-checkbox
                v-for="platform in platformArr"
                :label="platform.id"
                :key="platform.id"
                >{{ platform.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div class="channelOne flexStart ml20" @click="toggleRadioPlatform">
            <img src="../../../assets/home/jiahao.png" />
            <span>单选</span>
          </div>
        </section>
      </div>


        <div class="flexStart mb10 " v-if='query.type==2'>
        <p class="f14 c7 width220">行业分类:</p>
        <section v-if="radio.category" class="flexStart">
          <div class="channelFOur flex1">
            <el-radio-group
              fill="#ffffff"
              @change="categoryRadioChange"
              v-model="radioVal.category"
            >
              <el-radio-button label="">不限</el-radio-button>
              <el-radio-button
                v-for="item in categoryArr"
                :key="item.id"
                :label="item.id"
                >{{ item.name }}</el-radio-button
              >
            </el-radio-group>
          </div>
          <div
            class="channelOne flexStart ml20"
            @click="toggleRadioCategory"
          >
            <img src="../../../assets/home/jiahao.png" />
            <span>多选</span>
          </div>
        </section>
        <section v-else class="flexStart">
          <div class="channelFOur flex1">
            <el-checkbox
              :indeterminate="indeterminate.category"
              v-model="checkAll.category"
              @change="handleCategoryCheckAllChange"
              >全选</el-checkbox
            >
            <el-checkbox-group
              v-model="checkboxArr.category"
              @change="handleCategoryChange"
            >
              <el-checkbox
                v-for="item in categoryArr"
                :label="item.id"
                :key="item.id"
                >{{ item.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div
            class="channelOne flexStart ml20"
            @click="toggleRadioCategory"
          >
            <img src="../../../assets/home/jiahao.png" />
            <span>单选</span>
          </div>
        </section>
      </div>

      <div class="flexStart mb10" v-if="query.type==1||query.type==2">
        <p class="f14 c7 width210">覆盖地区:</p>
        <section v-if="radio.city" class="flexStart ">
          <div class="channelFOur flex1">
            <el-radio-group
              fill="#ffffff"
              @change="cityRadioChange"
              v-model="radioVal.city"
            >
              <el-radio-button label="">不限</el-radio-button>
              <el-radio-button
                v-for="item in cityArr"
                :key="item.id"
                :label="item.id"
                >{{ item.name }}</el-radio-button
              >
            </el-radio-group>
          </div>
          <div class="channelOne flexStart ml20" @click="toggleRadioCity">
            <img src="../../../assets/home/jiahao.png" />
            <span>多选</span>
          </div>
        </section>
        <section v-else class="flexStart">
          <div class="channelFOur flex1">
            <el-checkbox
              :indeterminate="indeterminate.city"
              v-model="checkAll.city"
              @change="handleCityCheckAllChange"
              >全选</el-checkbox
            >
            <el-checkbox-group
              v-model="checkboxArr.city"
              @change="handleCityChange"
            >
              <el-checkbox
                v-for="item in cityArr"
                :label="item.id"
                :key="item.id"
                >{{ item.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div class="channelOne flexStart ml20" @click="toggleRadioCity">
            <img src="../../../assets/home/jiahao.png" />
            <span>单选</span>
          </div>
        </section>
      </div>

      <div class="flexStart mb10 " v-if="query.type==3">
        <p class="f14 c7 width80">新闻源:</p>
        <div class="channelFOur flex1">
          <el-radio-group
            fill="#ffffff"
            v-model="radioVal.newsSource"
            @change="newsSourceRadioChange"
          >
            <el-radio-button label="">不限</el-radio-button>
            <el-radio-button label="0">百度新闻源</el-radio-button>
            <el-radio-button label="1">非百度新闻源</el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <div class="flexStart mb10 " >
        <p class="f14 c7 width80">价格分类:</p>
        <div class="channelFOur flex1">
          <el-radio-group
            fill="#ffffff"
            v-model="radioVal.price"
            @change="priceRadioChange"
          >
            <el-radio-button label="">不限</el-radio-button>
            <el-radio-button label="0-50">0-50</el-radio-button>
            <el-radio-button label="50-200">50-200</el-radio-button>
            <el-radio-button label="200-500">200-500</el-radio-button>
            <el-radio-button label="500-1000">500-1000</el-radio-button>
            <el-radio-button label="1000-2000">1000-2000</el-radio-button>
            <el-radio-button label="2000-5000">2000-5000</el-radio-button>
            <el-radio-button label="5000以上">5000以上</el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <div class="flexStart mb10" v-if='query.type==2'>
        <p class="f14 c7 width80">粉丝数:</p>
        <div class="channelFOur flex1">
          <el-radio-group
            fill="#ffffff"
            v-model="radioVal.fansNum"
            @change="fansNumRadioChange"
          >
            <el-radio-button label="">不限</el-radio-button>
            <el-radio-button label="1">0-1000</el-radio-button>
            <el-radio-button label="5">1000-5000</el-radio-button>
            <el-radio-button label="10">5001-1万</el-radio-button>
            <el-radio-button label="50">1万-5万</el-radio-button>
            <el-radio-button label="100">5万-10万</el-radio-button>
            <el-radio-button label="1000">10万-100万</el-radio-button>
            <el-radio-button label="1001">100万以上</el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <div class="flexStart mb10" v-if='query.type==2||query.type==3||query.type==4'>
        <p class="f14 c7 width80">账号认证:</p>
        <div class="channelFOur flex1">
          <el-radio-group
            fill="#ffffff"
            v-model="radioVal.accountAuth"
            @change="accountAuthRadioChange"
          >
            <el-radio-button label="">默认</el-radio-button>
            <el-radio-button label="0">未认证</el-radio-button>
            <el-radio-button label="1">已认证</el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <div class="flexStart mb10 bor-cor pb20" v-if='query.type==1'>
        <p class="f14 c7 width80">链接类型:</p>
        <div class="channelFOur flex1">
          <el-form :inline="true" class="demo-form-inline flexStart">
            <el-select
              placeholder="不限"
              clearable
              v-model="selectVal.isUrl"
              @change="otherSortChange('链接类型')"
            >
              <!-- <el-option  v-for="item in otherSortInitArr.isUrl" :key="item.id" :value="item.id" :label="item.name"></el-option> -->
              <el-option value="0" label="不带联系方式"></el-option>
              <el-option value="1" label="超链接"></el-option>
              <el-option value="2" label="网址"></el-option>
              <el-option value="3" label="微信QQ"></el-option>
            </el-select>
            <div class="flexStart ml10">
              <p class="f14 c10 mr10">新闻源:</p>
              <el-select
                v-model="selectVal.newsSource"
                placeholder="不限"
                @change="otherSortChange('新闻源')"
                clearable
              >
                <!-- <el-option  v-for="item in otherSortInitArr.newsSource" :key="item.id" :value="item.id" :label="item.name"></el-option> -->
                <el-option value="0" label="非百度新闻源"></el-option>
                <el-option value="1" label="百度新闻源"></el-option>
              </el-select>
            </div>
            <div class="flexStart ml10">
              <p class="f14 c10 mr10">收录情况:</p>
              <el-select
                v-model="selectVal.included"
                placeholder="不限"
                @change="otherSortChange('收录情况')"
                clearable
              >
                <!-- <el-option  v-for="item in otherSortInitArr.included" :key="item.id" :value="item.id" :label="item.name"></el-option> -->
                <el-option value="0" label="不包收录"></el-option>
                <el-option value="1" label="包收录"></el-option>
              </el-select>
            </div>

            <div class="flexStart ml10">
              <p class="f14 c10 mr10">入口级别:</p>
              <el-select
                v-model="selectVal.entranceLevel"
                placeholder="不限"
                @change="otherSortChange('入口级别')"
                clearable
              >
                <!-- <el-option  v-for="item in otherSortInitArr.entranceLevel" :key="item.id" :value="item.id" :label="item.name"></el-option> -->
                <el-option value="0" label="没有入口"></el-option>
                <el-option value="1" label="首页入口"></el-option>
                <el-option value="2" label="频道入口"></el-option>
                <el-option value="3" label="上级入口"></el-option>
              </el-select>
            </div>
          </el-form>
        </div>
      </div>

      <div class="flexBetween mb10">
        <p class="f14 c7 width80">排序：</p>
        <div class="channelFOur flexRow">
          <p class="f14 c10 mr20">默认</p>
          <el-form :inline="true" class="demo-form-inline flexRow mt20">
            <el-form-item>
              <el-input
                v-model="tableDataParam.keyword"
                placeholder="搜索媒体"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="tableSearch">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="toufang" @click="showStrategyDialog">
          投放策略({{ dataTotal.strategy }})
        </div>
        <!-- <div class="toufang" >投放策略({{dataTotal.strategy}})</div> -->
      </div>
      <div class="channel">
        <el-table
          :header-cell-style="{ background: '#E5E9F2' }"
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'id', order: 'descending' }"
          ref="checkTable"
          @select-all="mediasArrSelectAll"
          @select="handleChooseMediasArrChangeSelect"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column
            align="center"
            prop="media_name"
            label="媒体名称"
          ></el-table-column>
           <el-table-column
            align="center"
            prop="category_id"
            label="行业分类"
             v-if="query.type==2"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="channel_id"
            label="栏目分类"
             v-if="query.type==2"
          ></el-table-column>
          <el-table-column align="center" label="价格" sortable>
            <template slot-scope="scope">{{ scope.row.price }} MET</template>
          </el-table-column>
           <el-table-column
            align="center"
            prop="fans_num"
            label="粉丝数"
             v-if="query.type==2"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="read_num"
            label="阅读量"
             v-if="query.type==2"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="draft_rate"
            label="出稿率"
            sortable
            v-if="query.type==1"
          >
            <template slot-scope="scope">{{ scope.row.draft_rate }} %</template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="pc_weight"
            label="电脑权重"
            sortable
            v-if="query.type==1"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="m_weight"
            label="移动权重"
            sortable
            v-if="query.type==1"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="news_source"
            label="新闻源"
             v-if="query.type==1"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="url_type"
            label="联系方式"
            v-if="query.type==1"
          ></el-table-column>
           <el-table-column
            align="center"
            prop="account_auth"
            label="账号认证"
            v-if="query.type==4||query.type==3"
          ></el-table-column>
           <el-table-column
            align="center"
            prop="remark"
            label="备注"
             v-if="query.type==2||query.type==4||query.type==3"
          ></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <div class size="mini" @click="addPolicyDialogShow(scope.row)">
                +策略
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="flexEnd mt10 pb10">
          <el-pagination
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataTotal.mediaDataTotal"
            :page-sizes="[10, 20, 30, 40]"
            :current-page="current"
            :page-size="tableDataParam.size"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div class="footerOne ">
      <div class="flexBetween">
        <div class="flexStart pl10 pr10">
          <p class="f14 c7 width120">已选媒体:</p>
          <div class="flexStartWrap width60 mr10 ml10 ">
            <ft-card2
              @cancel="deleteChooseMediasArr(item)"
              v-for="item in chooseMediasArr"
              :key="item.id"
              class="mr10"
              >{{ item.media_name }}</ft-card2
            >
          </div>
        </div>
        <div class="flexStart">
          <div class="flexColumn">
            <div class="lh40 flexStart">
              <p class="width70 c1 f14">合计金额：</p>
              <p class="f28 c11 ">{{ priceSum }}</p>
              <span>MET</span>
            </div>
            <div class="lh40 flexStart">
              <p class="width70 c1 f14">账户余额：</p>
              <p class="f20 c11 ">{{ usable }}</p>
              <span>MET</span>
            </div>
          </div>
          <div class="footerSev" @click="showSubmitOrderDialog">提交订单</div>
        </div>
      </div>
    </div>
    <!-- 提示创建策略的弹窗 -->
    <el-dialog
      title="创建策略"
      :visible="dialogShow.nullStrategy"
      append-to-body
      width="16%"
      center
    >
      <span class="close" @click="dialogShow.nullStrategy = false">X</span>
      <div class="flexStart mb20">抱歉您还未有创建投放策略，请先创建。</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toggleCreateStrategyDialog"
          >去创建</el-button
        >
      </span>
    </el-dialog>

    <!-- 创建策略的弹窗 -->
    <el-dialog :visible="dialogShow.createStrategy">
      <div class="pb20 mr20">
        <span class="close" @click="dialogShow.createStrategy = false">X</span>
        <p>请输入新策略名称</p>
        <el-input
          v-model="createStrategyParam.policyName"
          placeholder="请输入内容"
          class="mt10 mb10"
        ></el-input>
        <ft-button backgroundColor="#2D68F6" @click="createStrategyMethod"
          >确认</ft-button
        >
      </div>
    </el-dialog>

    <!-- 已选媒体的弹窗 -->
    <el-dialog
      :visible="dialogShow.strategyMedias"
      append-to-body
      width="30"
      center
    >
      <span class="close" @click="dialogShow.strategyMedias = false">X</span>
      <div class="flexStartWrap">
        <ft-card2
          v-for="item in dataShow.strategyMedia"
          :key="item.id"
          class="mr10"
          @cancel="cancelStrategyMedia(item)"
          >{{ item.media_name }}</ft-card2
        >
      </div>
    </el-dialog>

    <!-- 添加媒体到策略的弹窗 -->
    <el-dialog :visible="dialogShow.addPolicy" class="strategyDialog">
      <div class="pb20 mt20">
        <span class="close" @click="dialogShow.addPolicy = false">X</span>
        <el-table
          :header-cell-style="{ background: '#E5E9F2' }"
          :data="strategyTableData"
          style="width: 100%"
          :default-sort="{ prop: 'id', order: 'descending' }"
          @selection-change="handleChooseStrategyArrChange"
          ref="strategyCheckTable"
        >
          <el-table-column type="selection" row-key="id"></el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="策略名称"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="count"
            label="媒体数量"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="money"
            label="价格"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="num"
            label="投放次数"
          ></el-table-column>
        </el-table>
        <ft-button
          backgroundColor="#2D68F6"
          @click="addPolicyMethod"
          class="mt10"
          >确认</ft-button
        >
      </div>
    </el-dialog>

    <!-- 投放策略列表的弹窗 -->
    <el-dialog :visible="dialogShow.strategyList">
      <div class="pb20 mt20">
        <span class="close" @click="dialogShow.strategyList = false">X</span>
        <p class="mb10">投放策略</p>
        <el-table
          :header-cell-style="{ background: '#E5E9F2' }"
          :data="strategyTableData"
          style="width: 100%"
          :default-sort="{ prop: 'id', order: 'descending' }"
          @selection-change="chooseMediasInStrategyListChange"
          ref="totalStrategyTable"
        >
          <el-table-column type="selection" row-key="id"></el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="策略名称"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="count"
            label="媒体数量"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="money"
            label="价格"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="num"
            label="投放次数"
          ></el-table-column>
          <el-table-column align="center" label="媒体详情">
            <template slot-scope="scope">
              <div
                class
                size="mini"
                @click="toggleStrategyMediasDialog(scope.row)"
                style="color:#99A9BF"
              >
                +展开
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <div
                class
                size="mini hover-pointer"
                @click="delStrategyMethod(scope.row)"
                style="color:#FF4949"
              >
                清除
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="flexCenter mt20">
          <ft-button
            backgroundColor="white"
            color="black"
            class="mr10"
            @click="toggleCreateStrategyDialog"
            >新增</ft-button
          >
          <ft-button backgroundColor="#2D68F6" @click="addStrategyInMedias"
            >确认</ft-button
          >
        </div>
      </div>
    </el-dialog>

    <!-- 确定订单的弹窗 -->
    <el-dialog :visible="dialogShow.submitOrder">
      <div class="pb20">
        <span class="close" @click="dialogShow.submitOrder = false">X</span>
        <p>确认订单</p>
        <ft-line class="mt10 mb10" leftCon="用户标题">
          <b slot="right">{{ upArticleParam.title }}</b>
        </ft-line>
        <ft-line class="mt10 mb10" leftCon="类型">
          <b slot="right">{{ query.typeName }}</b>
        </ft-line>
        <ft-line class="mt10 mb10" leftCon="费用">
          <b slot="right">{{ priceSum }} MET</b>
        </ft-line>
        <ft-line class="mt10 mb10" leftCon="媒体订单">
          <b slot="right"></b>
        </ft-line>
        <el-table
          :header-cell-style="{ background: '#E5E9F2' }"
          :data="chooseMediasArr"
          style="width: 100%"
          :default-sort="{ prop: 'id', order: 'descending' }"
        >
          <el-table-column
            align="center"
            prop="id"
            label="序号"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="media_name"
            label="媒体名称"
          ></el-table-column>
          <!-- <el-table-column align="center" prop="money" label="回链"></el-table-column> -->
          <el-table-column
            align="center"
            prop="price"
            label="费用"
          ></el-table-column>
        </el-table>
        <ft-button
          backgroundColor="#2D68F6"
          @click="
          dialogPaymentShow
          "
          class="mt20"
          >确认发布</ft-button
        >
      </div>
    </el-dialog>
    <div>
      <el-dialog
        :visible="dialogShow.payment"
        @close="dialogShow.payment = false"
        :center="true"
        width="450px"
      >
        <ft-line2
          title="支付密码"
          placeholder="请输入支付密码"
          @cancel="dialogShow.payment = false"
          @submit="upArticleMethod"
        ></ft-line2>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import mgPublicMapper from "../../../mapper/mgPublicMapper";
import CommonIe from "../../../interface/common-ie";
import MediaIe from "../../../interface/MediaIe";
import TableIe from "../../../interface/TableIe";
import TableShowIe from "../../../interface/TableShowIe";
import {
  arrUtil,
  stringUtil,
  EleTableUtil,
  numberUtil
} from "../../../components/ft/index";
import Vue from "vue";
import { objUtil } from "../../../components/ft";
import strategyMapper from "../../../mapper/StrategyMapper";
import StrategyIe from "../../../interface/StrategyIe";
import ArticleIe from "../../../interface/articleIe";
import articleMapper from "../../../mapper/ArticleMapper";
export default Vue.extend({
  name: "choose",
  components: {},
  data() {
    return {
      lifeControl:true,//控制能不能多次点击
      mediaType:this.$route.query.type,
      radio: {
        //单选框
        channel: true, //频道类型
        platform:true,//平台,自媒体
        portalMedia: false, //综合门户
        city: false, //覆盖地区
        category:false//行业分类 自媒体
      },
      query: this.$route.query,
      priceSum: 0, //合计金额
      usable: 0, //用户余额减去合计金额
      accountMoney: 0, //用户余额
      radioVal: {
        //单选时选中的值
        channel: "",
        portalMedia: "",
        city: "",
        price: "",
        platform:'',//平台
        category:'',//行业分类
        fansNum:'',//粉丝数
        accountAuth:'',
        newsSource:''//新闻源
      },
      indeterminate: {
        channel: false, //频道类型
        portalMedia: false, //综合门户
        city: false,
        platform:false,//平台
        category:false,//行业分类
      },
      checkAll: {
        //全选状态
        channel: false,
        portalMedia: false, //综合门户
        city: false,
        platform:false,//平台
        category:false,//行业分类
      },
      checkboxArr: {
        channel: [], //频道类型多选时选中的集合
        portalMedia: [],
        city: [],
        platform:[],//平台
        category:[],//行业分类
      },
      checkAllArr: {
        channel: [], //频道类型全选时的id集合
        portalMedia: [],
        city: [],
        platform:[],//平台
        category:[],//行业分类
      },
      channelArr: [], //初始化时频道的数据
      portalMediaArr: [], //初始化时综合门户的数据
      cityArr: [], //初始化时城市的数据
      priceArr: [], //初始化时价格的数据
      platformArr:[],//初始化时平台的数据
      categoryArr:[],//初始化时行业分类的数据
      otherSortInitArr: {
        //其他分类初始化时的搜索条件
        isUrl: [], //链接类型
        newsSource: [], //新闻源
        included: [], //收录情况
        entranceLevel: [] //入口级别
      },
      tableDataParam: {
        //请求资源列表的参数
        channelId: "", //频道类型或品台id多个用逗号（,）隔开
        portalMedia: "", //综合门户或行业分类多个用逗号（,）隔开
        cityId: "", //城市id多个逗号隔开
        price: "", //价格区间
        isUrl: "", //链接类型 0不带联系方式 1超链接 2网址 3微信QQ
        newsSource: "", //0非百度新闻源 1.百度新闻源
        included: "", //收录情况0.不包收录 1.包收录
        entranceLevel: "", //入口级别0没有入口 1首页入口 2频道入口 3上级入口
        isPrice: "", //按价格排序 选择就传1
        draftRate: "", //出稿率 选择就传1
        pcWeight: "", //电脑权重 选择就传1
        mWeight: "", //移动权重 选择就传1
        page: 1, //页码 必传
        size: 10, //每页默认显示条数 默认20条
        type: this.$route.query.type, //1媒体2自媒体3区块链4快讯
        keyword: "", //搜索关键字
        category:''
      },
      dataShow: {
        strategyMedia: [] //弹窗显示的策略里的媒体列表
      },
      typeListParam: '',
      selectVal: {
        //选中的数据
        isUrl: "", //链接类型
        newsSource: "", //新闻源
        included: "", //收录情况
        entranceLevel: "" //入口级别
      },
      tableData: [],
      dataTotal: {
        //表格总条数
        mediaDataTotal: 0,
        strategy: 0
      },
      lastChooseMediasArr: [], //已选媒体列表上次
      chooseMediasArr: [], //已选媒体列表
      chooseStrategyArr: [], //策略表格已选的策略
      dialogShow: {
        //弹窗的显示
        nullStrategy: false, //没有策略时的提示
        createStrategy: false, //创建策略时
        addPolicy: false,
        strategyMedias: false, //表格里媒体的弹窗
        strategyList: false,
        submitOrder: false, //确认订单的弹窗
        payment: false //支付密码的弹窗
      },
      createStrategyParam: {
        policyName: "", //策略名称
        type: this.$route.query.type //1媒体2自媒体3区块链4快讯
      },
      current: 1, //表格的当前页数
      strategyTableData: [],
      addPolicyParam: {
        //请求后端的参数
        policyId: "",
        mediaId: ""
      },
      upArticleParam: {
        type: this.$route.query.type,
        title: "",
        content: "",
        payPass: "",
        ids: ""
      },
      chooseMediasInStrategyList: []
    };
  },
  created() {
    this.typeListParam={type:this.query.type}
    this.initData();
    Object.preventExtensions(this.tableDataParam);
  },
  computed: {
    /**
     * 媒体分发那边单选时选择不限传的参
     */
    unlimitedNum() {
      return Vue.$config.unlimitedNum;
    }
  },
  methods: {
    /**
     * 频道类型多选时选全选
     */
    handleChannelCheckAllChange(val: boolean) {
      this.checkboxArr.channel = val ? this.checkAllArr.channel : [];
      let param = { channelId: this.checkboxArr.channel.join(",") };
      let getParam: MediaIe.mediasParamIe = this.updateTableDataParam(param);
      this.getTable(getParam);
      this.indeterminate.channel = false;
    },


        /**
     * 频道类型多选时选全选
     */
    handlePlatformCheckAllChange(val: boolean) {
      this.checkboxArr.platform = val ? this.checkAllArr.platform : [];
      let param = { channelId: this.checkboxArr.platform.join(",") };
      let getParam: MediaIe.mediasParamIe = this.updateTableDataParam(param);
      this.getTable(getParam);
      this.indeterminate.platform = false;
    },

    /**
     * 综合门户多选时选全选
     */
    handlePortalMediaCheckAllChange(val: boolean) {
      this.checkboxArr.portalMedia = val ? this.checkAllArr.portalMedia : [];
      let param = { portalMedia: this.checkboxArr.portalMedia.join(",") };
      let getParam: MediaIe.mediasParamIe = this.updateTableDataParam(param);
      this.getTable(getParam);
      this.indeterminate.portalMedia = false;
    },

      /**
     * 行业分类多选时选全选
     */
    handleCategoryCheckAllChange(val: boolean) {
      this.checkboxArr.category = val ? this.checkAllArr.category : [];
      let param = { category: this.checkboxArr.portalMedia.join(",") };
      let getParam: MediaIe.mediasParamIe = this.updateTableDataParam(param);
      this.getTable(getParam);
      this.indeterminate.category = false;
    },

    /**
     * 覆盖地区多选时选全选
     */
    handleCityCheckAllChange(val: boolean) {
      this.checkboxArr.city = val ? this.checkAllArr.city : [];
      let param = { cityId: this.checkboxArr.city.join(",") };
      let getParam: MediaIe.mediasParamIe = this.updateTableDataParam(param);
      this.getTable(getParam);
      this.indeterminate.city = false;
    },
    /**
     * 初始化数据
     */
    initData() {
      let param: MediaIe.typeListParamIe = this.typeListParam;
      param.levelToken=true;
      param = objUtil.deleteNull(param);
      if(param.type!=4){
        this.getTypeLst(param);
      }
      this.getTable(this.tableDataParam);
      this.getStrategyList();
      this.getContent();
      this.getUsable();
    },
    /**
     * 获取用户余额
     */
    getUsable() {
      this.getAccountActions({}).then(
        (res: any) => {
          this.accountMoney = parseFloat(res.usable).toFixed(6);
          //this.usable = this.accountMoney;
          this.usable = numberUtil.getPreciseNum(this.accountMoney,6);
        },
        (err: string) => {
          this.$message.error(err);
        }
      );
    },
    /**
     * 获取上个页面带过来的内容与标题
     */
    getContent() {
      let param: any = sessionStorage.getItem(
        Vue.$config.articleSessionStorageName
      );
      param = JSON.parse(param);
      this.upArticleParam = { ...this.upArticleParam, ...param };
    },

    /**
     * 获取策略列表
     */
    getStrategyList() {
      this.getStrategyListActions(this.typeListParam).then(
        (res: Array<TableShowIe.strategyIe>) => {
          this.strategyTableData = res;
          this.dataTotal.strategy = res.length;
        },
        (err: string) => {
          this.$message.error(err);
        }
      );
    },

    /**
     * 获取类型分类
     */
    getTypeLst(param: MediaIe.typeListParamIe) {
      this.getTypeListActions(param).then(
        (res: MediaIe.typeListInfoIe) => {
          this.typeSort(res);
          console.log(res);
        },
        (err: string) => {
          this.$message.error(err);
        }
      );
    },
    /**
     * 切换频道的单选与多选框
     */
    toggleRadioChannel() {
      this.radio.channel = !this.radio.channel;
      if (this.radio.channel) {
        this.tableDataParam.channelId = this.radioVal.channel; //切换为单选时将原来单选时的值绑定上
        this.checkAll.channel = false;
      } else {
        this.checkboxArr.channel = []; //切换为多选时清空值
        this.tableDataParam.channelId = "";
      }
      this.getTable(this.tableDataParam);
    },

      /**
     * 切换频道的单选与多选框
     */
    toggleRadioPlatform() {
      this.radio.platform = !this.radio.platform;
      if (this.radio.platform) {
        this.tableDataParam.channelId = this.radioVal.platform; //切换为单选时将原来单选时的值绑定上
        this.checkAll.platform = false;
      } else {
        this.checkboxArr.platform = []; //切换为多选时清空值
        this.tableDataParam.channelId = "";
      }
      this.getTable(this.tableDataParam);
    },



    /**
     * 切换综合门户的的单选与多选框
     */
    toggleRadioPortalMedia() {
      this.radio.portalMedia = !this.radio.portalMedia;
      if (this.radio.portalMedia) {
        this.tableDataParam.portalMedia = this.radioVal.portalMedia; //切换为单选时将原来单选时的值绑定上
        this.checkAll.portalMedia = false;
      } else {
        this.checkboxArr.portalMedia = []; //切换为多选时清空值
        this.tableDataParam.portalMedia = "";
      }
      this.getTable(this.tableDataParam);
    },

      /**
     * 切换行业分类的的单选与多选框
     */
    toggleRadioCategory() {
      this.radio.category = !this.radio.category;
      if (this.radio.category) {
        this.tableDataParam.category = this.radioVal.category; //切换为单选时将原来单选时的值绑定上
        this.checkAll.category = false;
      } else {
        this.checkboxArr.category = []; //切换为多选时清空值
        this.tableDataParam.category = "";
      }
      this.getTable(this.tableDataParam);
    },

    /**
     * 切换覆盖地区的单选与多选框
     */
    toggleRadioCity() {
      this.radio.city = !this.radio.city;
      if (this.radio.city) {
        this.tableDataParam.cityId = this.radioVal.city; //切换为单选时将原来单选时的值绑定上
        this.checkAll.city = false;
      } else {
        this.checkboxArr.city = []; //切换为多选时清空值
        this.tableDataParam.cityId = "";
      }
      this.getTable(this.tableDataParam);
    },

    /**
     * 类型分类
     */
    typeSort(arr: Array<MediaIe.typeListInfoIe>) {
      arr.forEach(item => {
        if (item.name == "频道类型") {
          let son: CommonIe.AnyArray = item.son;
          this.channelArr = son;
          this.checkAllArr.channel = this.getCheckAllArr(item.son);
        }
        if (item.name == "综合门户媒体") {
          this.portalMediaArr = item.son;
          this.checkAllArr.portalMedia = this.getCheckAllArr(item.son);
        }
        if (item.name == "覆盖区域") {
          this.cityArr = item.son;
          this.checkAllArr.city = this.getCheckAllArr(item.son);
        }
        if (item.name == "平台") {
          this.platformArr = item.son;
          this.checkAllArr.platform = this.getCheckAllArr(item.son);
        }
        if (item.name == "行业分类") {
          this.categoryArr = item.son;
          this.checkAllArr.category = this.getCheckAllArr(item.son);
        }
      });
    },

    /**
     * 获取全选时的id集合
     */
    getCheckAllArr(arr: Array<MediaIe.typeListInfoIe>): CommonIe.numberArray {
      let resArr: Array<number> = [];
      arr.forEach(item => {
        resArr.push(item.id);
      });
      return resArr;
    },

    /**
     * 频道类型单选
     */
    handleChannelChange(value: Array<any>) {
      let checkedCount = value.length;
      this.checkAll.channel = checkedCount === this.channelArr.length;
      this.indeterminate.channel =
        checkedCount > 0 && checkedCount < this.channelArr.length;
      let channelId = this.checkboxArr.channel.join(",");
      let param = { channelId: channelId };
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 平台类型单选
     */
    handlePlatformChange(value: Array<any>) {
      let checkedCount = value.length;
      this.checkAll.platform = checkedCount === this.platformArr.length;
      this.indeterminate.platform =
        checkedCount > 0 && checkedCount < this.platformArr.length;
      let channelId = this.checkboxArr.platform.join(",");
      let param = { channelId: channelId };
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 综合门户单选
     */
    handlePortalMediaChange(value: Array<any>) {
      let checkedCount = value.length;
      this.checkAll.portalMedia = checkedCount === this.portalMediaArr.length;
      this.indeterminate.portalMedia =
        checkedCount > 0 && checkedCount < this.portalMediaArr.length;
      let portalMediaStr = this.checkboxArr.portalMedia.join(",");
      let param = { portalMedia: portalMediaStr };
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

     /**
     * 行业分类单选
     */
    handleCategoryChange(value: Array<any>) {
      let checkedCount = value.length;
      this.checkAll.category = checkedCount === this.categoryArr.length;
      this.indeterminate.category =
        checkedCount > 0 && checkedCount < this.categoryArr.length;
      let categoryStr = this.checkboxArr.category.join(",");
      let param = { category: categoryStr };
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 覆盖地区单选
     */
    handleCityChange(value: Array<any>) {
      let checkedCount = value.length;
      this.checkAll.city = checkedCount === this.cityArr.length;
      this.indeterminate.city =
        checkedCount > 0 && checkedCount < this.cityArr.length;
      let cityStr = this.checkboxArr.city.join(",");
      let param = { cityId: cityStr };
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 获取表格数据
     */
    getTable(param: MediaIe.mediasParamIe) {
      this.mediasActions(param).then(
        (res: TableShowIe.LopoResIe) => {
          let list: Array<TableShowIe.mediasIe> = res.list;
          this.tableData = list;
          this.dataTotal.mediaDataTotal = res.total;
          this.lightenCheck(
            this.deepCopy(this.chooseMediasArr),
            this.tableData
          );
        },
        (err: string) => {
          this.$message.error(err);
        }
      );
    },

    /**
     * 更新medias接口的参数，返回必填参数
     */
    updateTableDataParam(param: any): MediaIe.mediasParamIe {
      let data: MediaIe.mediasParamIe = { ...this.tableDataParam, ...param };
      this.tableDataParam = this.deepCopy(data); //深拷贝，避免参数被修改
      return data;
    },

    /**
     * 频道类型单选时选中某值
     */
    channelRadioChange(val: number) {
      let param: any = {};
      param.channelId = val;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    // /**
    //  * 频道类型单选时选中某值
    //  */
    // platformRadioChange(val: number) {
    //   let param: any = {};
    //   param.channelId = val == 0 ? "" : val + "";
    //   param = this.updateTableDataParam(param);
    //   this.getTable(param);
    // },

    /**
     * 综合门户单选时选中某值
     */
    portalMediaRadioChange(val: number) {
      let param: any = {};
      param.portalMedia = val ;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

      /**
     * 行业分类单选时选中某值
     */
    categoryRadioChange(val: number) {
      let param: any = {};
      param.category = val ;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 覆盖地区单选时选中某值
     */
    cityRadioChange(val: number) {
      let param: any = {};
      param.cityId = val ;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 价格分类单选改变时
     */
    priceRadioChange(val: number | string) {
      let param: any = {};
      param.price = val;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 粉丝分类单选改变时
     */
    fansNumRadioChange(val: number | string) {
      let param: any = {};
      param.fansNum = val ;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 新闻源分类单选改变时,和之前的不同，为空时才会
     */
    newsSourceRadioChange(val: number | string){
      let param: any = {};
      param.newsSource = val;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 粉丝分类单选改变时
     */
    accountAuthRadioChange(val: number | string) {
      let param: any = {};
      param.accountAuth = val;
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 其他分类选中时
     */
    otherSortChange(val: string) {
      let param: any = {};
      if (val == "链接类型") {
        param.isUrl = this.selectVal.isUrl;
      }
      if (val == "新闻源") {
        param.newsSource = this.selectVal.newsSource;
      }
      if (val == "收录情况") {
        param.included = this.selectVal.included;
      }
      if (val == "入口级别") {
        param.entranceLevel = this.selectVal.entranceLevel;
      }
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },

    /**
     * 计算合计金额
     */
    calculatePrice(chooseArr: Array<TableShowIe.mediasIe>): boolean {
      let arr: Array<TableShowIe.mediasIe> = this.deepCopy(chooseArr);
      let sum: number = 0;
      arr.forEach(item => {
        let price = parseFloat(item.price);
        sum = sum + price;
      });
      let usable: number = parseFloat((this.accountMoney - sum).toFixed(6));
      if (usable < 0) {
        return false;
      }
      this.usable = usable;
      this.priceSum = sum;
      return true;
    },


    /**
     * 删除chooseMedias里的某对象
     */
    deleteChooseMediasArr(mediasObj: TableShowIe.mediasIe) {
      let arr: Array<TableShowIe.mediasIe> = [];
      this.chooseMediasArr.forEach((item: TableShowIe.mediasIe) => {
        if (item.id != mediasObj.id) {
          arr.push(item);
        }
      });
      this.chooseMediasArr = this.deepCopy(arr);
      this.handleCheckData(mediasObj, this.tableData);
    },

    /**
     * 处理表格选中的数据,传要删除的对象
     */
    handleCheckData(
      checkObj: TableShowIe.mediasIe,
      tableData: Array<TableShowIe.mediasIe>
    ) {
      tableData.forEach((item: TableShowIe.mediasIe) => {
        if (checkObj.id == item.id) {
          this.$refs.checkTable &&
            this.$refs.checkTable.toggleRowSelection(item, false);
        }
      });
      this.calculatePrice(this.chooseMediasArr);
    },

    /**
     * 其他分类清空时
     */
    otherSortClear(val: string) {
      let param: any = {};
      if (val == "链接类型") {
        param.isUrl = "";
      }
      if (val == "新闻源") {
        param.news_source = "";
      }
      if (val == "收录情况") {
        param.included = "";
      }
      if (val == "入口级别") {
        param.entranceLevel = "";
      }
      param = this.updateTableDataParam(param);
      this.getTable(param);
    },
    /**
     * 搜索
     */
    tableSearch() {
      this.getTable(this.tableDataParam);
    },

    /**
     * 打开策略的弹窗
     */
    showStrategyDialog() {
      if (this.strategyTableData.length == 0) {
        this.dialogShow.nullStrategy = true;
        return;
      }
      this.dialogShow.strategyList = true;
      // this.cancelStrategyCheckAll(this.strategyTableData);
      this.clearSelectionCheckTable("totalStrategyTable");
    },

    /**
     * 打开提交订单的按钮
     */
    showSubmitOrderDialog() {
      if (this.chooseMediasArr.length == 0) {
        this.$message("请先选择媒体");
      } else {
        this.dialogShow.submitOrder = true;
      }
    },

    /**
     * 切换没有策略时展示的弹窗
     */
    toggleNullStrategyDialog() {
      this.dialogShow.nullStrategy = !this.dialogShow.nullStrategy;
    },

    /**
     * 切换创建策略的弹窗
     */
    toggleCreateStrategyDialog() {
      this.dialogShow.createStrategy = !this.dialogShow.createStrategy;
      setTimeout(() => {
        this.dialogShow.nullStrategy = false;
      }, 100);
    },

    /**
     * 创建策略方法
     */
    createStrategyMethod() {
      if (!stringUtil.removeSpace(this.createStrategyParam.policyName)) {
        this.$message("不能输入空值");
        return;
      }
      let param = this.deepCopy(this.createStrategyParam);
      this.createStrategyActions(param).then(
        (res: string) => {
          this.createStrategyParam.policyName = "";
          this.successNotify(res);
          this.dialogShow.createStrategy = false;
          this.getStrategyList();
        },
        (err: string) => {
          this.$message.error(err);
        }
      );
    },

    /**
     * 添加媒体到策略方法的弹窗显示
     */
    addPolicyDialogShow(item: TableShowIe.mediasIe) {
      this.addPolicyParam.mediaId = item.id;
      this.dialogShow.addPolicy = true;
    },
    /**
     * 打开策略表格弹窗时默认选中项
     * id 这条媒体的id
     */
    checkedStrategyData(id: number): void {
      let tableData: Array<TableShowIe.strategyIe> = this.strategyTableData;
      let strategyId: number = 0;
      tableData.map(item => {
        let mediaList: Array<TableShowIe.simpleMediasIe> = item.medias;
        mediaList.forEach(mediaItem => {
          if (id == mediaItem.id) {
            strategyId = item.id;
            return;
          }
        });
        if (strategyId) {
          return;
        }
      });
      if (strategyId != 0) {
      }
    },

    /**
     * 添加媒体到策略方法的接口
     */
    addPolicyMethod() {
      let param: StrategyIe.AddPolicyParamIe = this.deepCopy(
        this.addPolicyParam
      );
      if (!param.policyId) {
        this.$message("请先选择策略");
        return;
      }
      strategyMapper.addPolicy(param).then(
        (result: any) => {
          const res = result as CommonIe.ResParamIe;
          this.notifyResult(res.code, res.msg);
          this.dialogShow.addPolicy = false;
          this.addPolicyParam = objUtil.clearObj(this.addPolicyParam); //清空参数
          this.getStrategyList();
        },
        (err: CommonIe.ErrParamIe) => {
          this.$message.error(err.msg);
        }
      );
    },
    /**
     * 页码切换
     */
    handleSizeChange(val: string | number) {
      let param: any = {};
      param.size = val;
      param = this.updateTableDataParam(param);
      this.getTable(this.tableDataParam);
    },
    /**
     * 页数切换
     */
    handleCurrentChange(val: string | number) {
      let param: any = {};
      param.page = val;
      param = this.updateTableDataParam(param);
      this.getTable(this.tableDataParam);
    },
    /**
     * 策略表格单选时选中某策略
     */
    handleChooseStrategyArrChange(array: Array<TableShowIe.strategyIe>) {
      if (array.length == 0) {
        this.addPolicyParam.policyId = "";
        return;
      }
      this.addPolicyParam.policyId = array[array.length - 1].id;
      let obj = array[array.length - 1];
      this.handleStrategyCheckData(obj);
    },

    /**
     * 处理表格选中的数据,传要删除的对象
     */
    handleStrategyCheckData(checkObj: TableShowIe.strategyIe) {
      let table = this.strategyTableData; // 从后台获取到的数据
      table.forEach((item: TableShowIe.strategyIe) => {
        if (checkObj.id != item.id) {
          this.$refs.strategyCheckTable &&
            this.$refs.strategyCheckTable.toggleRowSelection(item, false);
        }
      });
    },

    /**
     * 打开已选媒体的弹窗
     */
    toggleStrategyMediasDialog(obj: TableShowIe.strategyIe) {
      this.dataShow.strategyMedia = obj.medias;
      this.dialogShow.strategyMedias = !this.dialogShow.strategyMedias;
    },
    /**
     * 删除策略
     */
    delStrategyMethod(obj: TableShowIe.strategyIe) {
      let param = { strategyId: obj.id };
      strategyMapper.delStrategy(param).then(
        (result: any) => {
          let res = result as CommonIe.ResParamIe;
          this.successNotify(res.msg);
          this.getStrategyList();
          this.dialogShow.strategyList = false;
        },
        (err: CommonIe.ErrParamIe) => {
          this.$message.error(err.msg);
        }
      );
    },

    /**
     * 提交订单接口
     */
    upArticleMethod(password: string) {
      debugger
      let param: ArticleIe.UpArticleParamIe = this.upArticleParam;
      param.payPass = password;
      param.ids = this.getMediasIds();
      if(this.lifeControl){
        this.lifeControl=false;
         articleMapper.upArticle(param).then(
        (result: any) => {
          this.lifeControl=true;
          let res = result as CommonIe.ResParamIe;
          this.notifyResult(res.code, res.msg);
          if (res.code == 200) {
            this.$router.push({ name: "mgMediaOrder" });
          }
        },
        (err: CommonIe.ErrParamIe) => {
          this.$message.error(err.msg);
          this.lifeControl=true;
        }
      );
      }  
    },

    /**
     * 获取已选媒体的id
     */
    getMediasIds(): string {
      let arr: Array<TableShowIe.mediasIe> = this.chooseMediasArr;
      let arrRes: Array<number> = [];
      arr.map(item => {
        arrRes.push(item.id);
      });
      let ids = arrRes.join(",");
      return ids;
    },

    /**
     * 删除某个策略里的某个媒体
     */
    cancelStrategyMedia(item: StrategyIe.mediaStrategyObjIe) {
      let param: StrategyIe.delPolicyParamIe = {
        strategyId: item.strategy_id,
        mediaId: item.id
      };
      strategyMapper.delPolicy(param).then(
        (result: any) => {
          let res = result as CommonIe.ResParamIe;
          this.notifyResult(res.code, res.msg);
          this.dialogShow.strategyMedias = false;
          this.getStrategyList();
        },
        (err: CommonIe.ErrParamIe) => {
          this.$message.error(err.msg);
        }
      );
    },
    /**
     * 添加策略在媒体里
     */
    addStrategyInMedias() {
      let list = this.deepCopy(this.chooseMediasInStrategyList);
      if (list.length == 0) {
        this.$message("请选择策略");
        return;
      }
      this.handleChooseMediasArrChangeSelect(list, null);
      this.dialogShow.strategyList = false;
      this.chooseMediasInStrategyList = [];
    },

    /**
     * 选择策略中的媒体
     */
    chooseMediasInStrategyListChange(arr: Array<TableShowIe.strategyIe>) {
      let mediasArr: Array<TableShowIe.simpleMediasIe> = [];
      arr.map(item => {
        let medias = item.medias;
        medias.map(mediaItem => {
          mediasArr.push(mediaItem);
        });
      });
      let resArr = [...this.chooseMediasInStrategyList, ...mediasArr];
      this.chooseMediasInStrategyList = arrUtil.repeatArr(resArr);
    },

    /**
     * 媒体列表表格全选
     */
    mediasArrSelectAll(arr: any) {
      if (arr.length == 0) {
        //如果是取消全选的按钮
        this.handleChooseMediasArrChangeSelect(arr, null);
      } else {
        this.handleChooseMediasArrChangeSelect(arr, {});
      }
    },

    /**
     * 处理表格选择多选的操作
     */
    handleChooseMediasArrChangeSelect(
      arr: Array<TableShowIe.mediasIe>,
      row: TableShowIe.mediasIe
    ) {
      let arrLast = this.deepCopy(this.chooseMediasArr); //获得上次选中的媒体
      let chooseMediasArr = arrUtil.repeatArr([...arrLast, ...arr]); //数组通过id去重
      let flag = true; //余额是否充足
      let tableData: Array<TableShowIe.mediasIe> = this.tableData;
      if (arr.length == 0 && row == null) {
        //如果用户点了取消全选
        chooseMediasArr = this.cancelCheckAll(tableData, chooseMediasArr);
        this.calculatePrice(chooseMediasArr);
      } else if (arrLast.length - chooseMediasArr.length == 0 && row != null) {
        //如果用户在表格里点去掉某个媒体
        this.$refs.checkTable.toggleRowSelection(row, false);
        chooseMediasArr = arrUtil.delArrObj(row, arrLast);
      } else if (arr.length == this.tableData.length) {
        //如果用于点了全选
        flag = this.calculatePrice(chooseMediasArr); //余额够不够
        if (!flag) {
          tableData.forEach(item => {
            this.handleCheckData(item, this.tableData);
          });
          this.$message("余额不够无法添加");
          return;
        }
      } else {
        flag = this.calculatePrice(chooseMediasArr); //余额够不够
        if (!flag) {
          this.$refs.checkTable.toggleRowSelection(row, false);
          this.$message("余额不够无法添加");
          return;
        }
      }
      this.chooseMediasArr = chooseMediasArr;
      this.calculatePrice(this.chooseMediasArr);
    },

    /**
     * 取消策略表格的全选
     *
     */
    cancelStrategyCheckAll(strategyTableData: Array<TableShowIe.strategyIe>) {
      this.$nextTick(() => {
        let g = this.$refs;
          ;
        strategyTableData.map((item: any) => {
          this.$refs.strategyCheckTable.toggleRowSelection(item, false);
        });
      });
    },
    /**
     * 取消全选，大表格
     * tableData 表格全选时的数据
     * chooseArr 已选媒体的数据
     */
    cancelCheckAll(
      tableData: Array<TableShowIe.mediasIe>,
      chooseArr: Array<TableShowIe.mediasIe>
    ): Array<TableShowIe.mediasIe> {
      let resArr: Array<TableShowIe.mediasIe> = []; //已选媒体
      chooseArr.forEach(chooseItem => {
        let chooseItemIid = chooseItem.id;
        let flag = false; //是否已存在
        tableData.forEach(tableItem => {
          if (tableItem.id == chooseItemIid) {
            flag = true;
          }
        });
        if (!flag) {
          resArr.push(chooseItem);
        }
      });
      return resArr;
    },

    /**
     * 点亮多选框
     *
     * 不要问逻辑为什么这么多，产品经理有毒,记得反抗
     * chooseArr 选中的媒体集合
     * tableArr 表格的结合
     */
    lightenCheck(
      chooseArr: Array<TableShowIe.mediasIe>,
      tableArr: Array<TableShowIe.mediasIe>
    ) {
      let lightArr: Array<TableShowIe.mediasIe> = [];
      chooseArr.forEach(chooseItem => {
        tableArr.forEach(tableItem => {
          if (tableItem.id == chooseItem.id) {
            lightArr.push(tableItem);
          }
        });
      });
      this.$nextTick(() => {
        lightArr.forEach(item => {
          this.$refs.checkTable.toggleRowSelection(item, true);
        });
      });
    },

    dialogPaymentShow(){
         this.dialogShow.payment = true;
         setTimeout(()=>{
           this.dialogShow.submitOrder = false;
         },500)
          
    }
  }
});
</script>
<style lang="less" scoped>
@import url("../../../style/margin-padding");
@import url("../../../style/common");
@import url("../../../style/width-height");
.media {
  height: 140px;
  background: #ffffff;
  padding: 30px 40px;
  .midiaOne {
    border-radius: 15px;
    margin-right: 5px;
  }
  .mediaSix {
    width: 75px;
    height: 2px;
    background: #2d68f6;
    margin-left: 10px;
    margin-right: 10px;
  }
  .mediaEng {
    border: 1px solid #bfbfbf;
    border-radius: 15px;
  }
  .editorOne {
    width: 75px;
    height: 2px;
    background: #bfbfbf;
    margin-left: 10px;
    margin-right: 10px;
  }
}
.channelOne {
  height: 20px;
  display: flex;
  width: 80px;
  img {
    width: 12px;
    height: 12px;
  }
  span {
    font-size: 14px;
    color: #99a9bf;
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
.footerOne {
  position: fixed;
  min-height: 70px;
  width: 100vw;
  bottom: 0;
  right: 0;
  z-index: 10000;
  padding-left: 320px;
  background: #ffffff;
}
.footerSev {
  min-width: 200px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  background: rgba(226, 48, 47, 1);
  margin-left: 40px;
  font-size: 20px;
}
.close {
  color: #d3dce6;
  position: absolute;
  top: 20px;
  right: 23px;
  background: #ffffff;
  cursor: pointer;
}

.close {
  color: #d3dce6;
  position: absolute;
  top: 20px;
  right: 23px;
  background: #ffffff;
}
</style>
<style>
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
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 0;
}
.channelFOur .el-checkbox__label {
  display: inline-block;
  padding: 5px 5px !important;
  line-height: 19px;
  font-size: 14px;
}
.channelFOur .el-radio-button:active {
  border: none !important;
}
.channelFOur .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #409eff;
  background-color: #ffffff;
  border: none !important;
  -webkit-box-shadow: -1px 0 0 0 #409eff;
  box-shadow: -1px 0 0 0 #409eff;
  border-left: 0 !important;
}
.channelFOur .el-radio-button .is-active {
  border: 0px solid #ffffff !important;
}
.channel .el-table td,
.el-table th {
  padding: 7px 0;
  min-width: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: center;
}
.channelFOur .el-input__inner {
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
  width: 130px;
}
.channelFOur .el-button {
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
  padding: 0px 10px;
  font-size: 14px;
  border-radius: 4px;
  width: 100px;
  height: 35px;
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
.channelFOur .el-checkbox-button__inner {
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background: #fff;
  border: 0px solid #fff;
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
  padding: 4px 5px;
  font-size: 14px;
  border-radius: 0;
}
.channelFOur .el-checkbox-button.is-checked .el-checkbox-button__inner {
  color: #409eff;
  background-color: #ffffff;
  border-color: #ffffff;
  -webkit-box-shadow: -1px 0 0 0 #ffffff;
  box-shadow: -1px 0 0 0 #ffffff;
}
.channelFOur
  .el-checkbox-button.is-checked:first-child
  .el-checkbox-button__inner {
  border-left-color: #ffffff !important;
}
.channelFOur
  .el-checkbox-button.is-checked:first-child
  .el-checkbox-button__inner {
  border-left-color: #ffffff !important;
}
.channelFOur.el-checkbox-button:first-child .el-checkbox-button__inner {
  border-left: 1px solid #ffffff;
  border-radius: 4px 0 0 4px;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.channelFOur .el-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 15px;
}
</style>
