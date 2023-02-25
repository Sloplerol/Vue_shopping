<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <table class="order-item"  v-for="order in myoder.records" :key="order.id">
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle"
                  >{{order.createTime}} 订单编号: {{order.outTradeNo}}
                  <span class="pull-right delete"
                    ><img src="../images/delete.png" /></span
                ></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart,index) in order.orderDetailList" :key="cart.id">
              <td width="60%">
                <div class="typographic">
                  <img style="width: 100px;height: 100px" :src="cart.imgUrl" />
                  <a href="#" class="block-text">{{cart.skuName}}</a>
                  <span>x{{cart.skuNum}}</span>
                  <a href="#" class="service">售后申请</a>
                </div>
              </td>
              <td :rowspan="order.orderDetailList.length" v-if="index===0" width="8%" class="center">{{order.consignee}}</td>
              <td :rowspan="order.orderDetailList.length" v-if="index===0" width="13%" class="center">
                <ul class="unstyled">
                  <li>总金额¥{{cart.totalAmount}}</li>
                  <li>在线支付</li>
                </ul>
              </td>
              <td :rowspan="order.orderDetailList.length" v-if="index===0" width="8%" class="center">
                <a href="#" class="btn">{{cart.orderStatusName}}</a> 
              </td>
              <td :rowspan="order.orderDetailList.length" v-if="index===0" width="13%" class="center">
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">评价|晒单</a>
                  </li>
                </ul>
              </td>
            </tr>
            
          </tbody>
        </table>

      </div>
      <div class="choose-order">
          <Pagination :pageNo='page' :pageSize='limited' :total="myoder.total" :continue='5' @getPageNo="getPageNo"/>
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="like">
      <h4 class="kt">猜你喜欢</h4>
      <ul class="like-list">
        <li class="likeItem">
          <div class="p-img">
            <img src="../images/itemlike01.png" />
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <em>¥</em>
            <i>3699.00</i>
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'myOrder',
    data() {
        return {
            page: 1,
            limited: 3,
            myoder: {}
        }
    },
    methods: {
        async getData(){
            const {page,limited} = this
            let result = await this.$API.reqMyMsg(page,limited);
            if(result.code===200) {
                this.myoder = result.data;
            }
        },
        getPageNo(page){
            this.page = page;
            this,this.getData();
        }
    },
    mounted(){
        this.getData();
    }
};
</script>

<style>
</style>