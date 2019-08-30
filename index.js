import Vue from 'vue'
import Router from 'vue-router'
import myindex from '@/components/index/myBLM'                       //首页
import myfind from '@/components/find/find'                          //发现
import myorder from '@/components/order/order'                       //订单
import mymine from '@/components/mine/mine'                          //我的

import mineInfo from '@/components/mine/mine-son/mine-info'          //我的----个人信息
import mineDiscount from '@/components/mine/mine-son/mine-discount'  //我的----红包
import mineShop from '@/components/mine/mine-son/mine-shop'          //我的----店铺红包
import mineCoin from '@/components/mine/mine-son/mine-coin'          //我的----金币
import mineAddress from '@/components/mine/mine-son/mine-address'    //我的----地址


import indexBusiness from '@/components/index/other/index-business'       //首页----商家信息（点餐）

import addAddress from '@/components/mine/mine-son/addAddress'   //增加地址
import updataAddress from '@/components/mine/mine-son/updataAddress' //修改地址


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: myindex
    },
    {
    	path: '/myBLM',
      name: 'myBLM',
      component: myindex
    },
    {
    	path: '/find',
      name: 'find',
      component: myfind
    },
    {
    	path: '/order',
      name: 'order',
      component: myorder
    },
    {
    	path: '/mine',
      name: 'mine',
      component: mymine
    },
    {
    	path:'/mine-info',
    	name:'mine-info',
    	component: mineInfo
    },
    {
    	path:'/mine-discount',
    	name:'mine-discount',
    	component: mineDiscount
    },
    {
    	path:'/mine-shop',
    	name:'mine-shop',
    	component: mineShop
    },
    {
    	path:'/mine-coin',
    	name:'mine-coin',
    	component: mineCoin
    },
    {
    	path:'/mine-address',
    	name:'mine-address',
    	component: mineAddress
    },
    {
    	path:'/index-business',
    	name:'index-business',
    	component: indexBusiness
    },
    {
    	path:'/addAddress',
    	name:'addAddress',
    	component: addAddress
    },
    {
    	path:'/updataAddress',
    	name:'updataAddress',
    	component: updataAddress
    },
  ]
})
