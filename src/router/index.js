import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods'
import Ratings from '@/components/ratings'
import Seller from '@/components/seller'
import VueResource from 'vue-resource'
import '@/common/css/base.css'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
