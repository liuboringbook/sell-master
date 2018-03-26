<template>

  <div id="app">
   <v-header id=""></v-header>
    <div class="tab">
      <div class="tab-item"><a v-link="{path: '/goods'}">商品</a></div>
      <div class="tab-item"><a v-link="{path: '/ratings'}">评价</a></div>
      <div class="tab-item"><a v-link="{path: '/seller'}">商家</a></div>
    </div>
    <div class="content">
      I am content
    </div>
  </div>
</template>

<script>
import vHeader from './components/header.vue'
export default {
  name: 'App',
  components: {
    vHeader
  }
}
</script>

<style>
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
</style>
