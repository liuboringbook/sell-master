<template lang="html">
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" width="64" height="64">
        </div>
        <div class="content-right">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div class="support" v-if="seller.supports">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <div class="bulletin-wrapper"></div>
    </div>
</template>
<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>
<style>
.header{
  width:100%;
}
.content-wrapper{
  display: flex;
  background-color:rgba(7,17,27,0.5);
}
.header .avatar{
  margin:24px 16px 18px 24px;
  border-radius: 2px;
}
.header .content-right{
  display: flex;
  flex-direction: column;
  margin-top:24px;
}
.content-right .title{
  font-size: 16px;
  line-height: 18px;
  color: rgb(255,255,255);
  font-weight: bold;
}

</style>
