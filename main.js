import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Cell, Checklist } from 'mint-ui'
import Vuex from 'vuex'

Vue.use(Vuex);  //引入Vuex
var store = new Vuex.Store({  //创建仓库
	state:{
		myValue: 0,
		addressInfo:[               //我的地址信息
			{
			    myName:"张梦磊",    					//我的名字
			    myCall:"先生",     					//我的称呼
			    myPhone:11111111111,  				//我的电话
			    myAddress:"合肥市蜀山区五里墩街道华邦繁华里",  //我的地址
			    myMp:"1栋1111",           			//我的详细门牌号
		    myPlace:"家",         					//我的地址的标签
			},
			{
				myName:"张梦磊",
			    myCall:"先生",
			    myPhone:22222222222,
			    myAddress:"合肥市瑶海区学林路与文忠路交叉口",
			    myMp:"2栋2222",
			    myPlace:"学校",
			},
			{
				myName:"张梦磊",
			    myCall:"先生",
			    myPhone:33333333333,
			    myAddress:"合肥经济开发区明珠广场",
			    myMp:"3栋3333",
			    myPlace:"公司",
			},
			{
				myName:"张梦磊",
			    myCall:"先生",
			    myPhone:44444444444,
			    myAddress:"合肥市政务新区的天鹅湖万达城市广场",
			    myMp:"4栋4444",
			    myPlace:'',
			},
			
		],
	},
	mutations:{
		addAddress(state,val){
			state.addressInfo.push(val); //增加数据
		},
		deleAddress(state,val){
			state.addressInfo.splice(val,1); //删除数据
		},
		updataAddress(state,val){
			state.addressInfo.splice(val.myindexs,1,val.myitems); //更改数据   第一个参数，选择要更改的位置，第二个参数，要更改数据的个数，第三个参数，更改之后替换的数据
		}
	}
	
});

Vue.use(mint);  //使用mint-ul组件库

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store       //引入Vuex仓库
})
