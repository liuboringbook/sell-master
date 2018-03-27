<template>
  <div id="app">
   <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评价</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import vHeader from './components/header.vue'
const ERR_OK = 0
export default {
  name: 'App',
  components: {
    vHeader
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('api/seller').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = response.data
        console.log(this.seller)
      }
    })
  }
}
</script>

<style>
@import "./common/css/mixin.css";
.tab{
  width:100%;
  display: flex;
  flex-direction: row;
  height:40px;
  line-height: 40px;
}
.tab-item{
  flex: 1;
  text-align: center;
}
.tab-item a{
  display: block;
  font-size: 14px;
  color: #778593;
}
.tab-item .router-link-active{
  color: rgb(240,20,20);
}
</style>
