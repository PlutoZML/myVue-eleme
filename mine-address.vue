<template>
	<!--我的地址-->
	<div class="mine-address">
		<!--固定  带有返回的头部-->
		<div class="myheadReturn">
			<div class="myhead-return">
				<div class="myreturn-left">
					<router-link to="/mine" class="a-box">
						<img src="../../../assets/fanhui.png"/>
					</router-link>
				</div>
				<span class="myhead-return-title">我的地址</span>
			</div>
		</div>
		
		<div class="mine-address-content">
			<div class="mine-address-num" v-for="(item,index) in this.$store.state.addressInfo">
				<div class="mine-address-num-left">
					<div class="mine-address-num-left-name">
						<span class="mine-address-num-myname">{{item.myName}}</span>
						<span class="mine-address-num-call">{{item.myCall}}</span>
						<span class="mine-address-num-phone">{{item.myPhone}}</span>
					</div>
					<div class="mine-address-num-left-address">
						<span class="school" :class="{'home':item.myPlace==='家','gongsi':item.myPlace==='公司','myNull':item.myPlace <= 0}">{{item.myPlace}}</span>
						<span class="mine-address-num-address">{{item.myAddress}}{{item.myMp}}</span>
					</div>
				</div>
				<div class="mine-address-num-right">
					<span @click="updateAddress(item,index)"><img src="../../../assets/revise.png"/></span>
					<span @click="deleteAddress(index)"><img src="../../../assets/delete.png"/></span>
				</div>
			</div>
		</div>
		<div class="mine-address-add">
			<router-link to="/addAddress" class="a-box">
				<img src="../../../assets/address-add.png"/><span>新增收货地址</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		methods:{
			deleteAddress(index){
				this.$store.commit('deleAddress',index); //获取Vuex的删除数据方法
			},
			updateAddress(item,index){
//				console.log(item+"，"+index);
				this.$router.push({path:'/updataAddress',query:{items:item,indexs:index}}); //修改数据跳转并传参
			}
		}
	}
</script>

<style scoped>
.mine-address{
	width: 100%;
	height: auto;
}
.mine-address-content{
	width: 100%;
	height: auto;
	padding-bottom: 120px;
}
.mine-address-num{
	width: 100%;
	height: auto;
	display: flex;
	padding: 20px;
	background-color: #fff;
	justify-content: space-between;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #EBEBEB;
}
.mine-address-num-left{
	width: 85%;
	height: auto;
	padding-right: 5px;
}
.mine-address-num-right{
	width: 15%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}
.mine-address-num-right>span{
	display: flex;
	align-items: center;
	margin: 0px 8px;
	cursor: pointer;
}
.mine-address-num-left-name{
	width: 100%;
	height: auto;
}
.mine-address-num-myname{
	font-size: 22px;
	font-weight: bold;
	color: #333;
}
.mine-address-num-call{
	font-size: 22px;
	color: #666;
}
.mine-address-num-phone{
	font-size: 22px;
	color: #666;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.mine-address-num-address{
	width: 85%;
	font-size: 16px;
	color: #666;
}
.school{
	display: inline-block;
	display: -moz-inline-box;
	border: 1px solid  #00d762;
	font-size: 12px;
	color: #00D762;
	padding: 2px;
	margin-right: 5px;
	text-align: center;
}
.home{
	display: inline-block;
	display: -moz-inline-box;
	border: 1px solid  #ff5722;
	font-size: 12px;
	color: #ff5722;
	padding: 2px;
	margin-right: 5px;
	text-align: center;
}
.gongsi{
	display: inline-block;
	display: -moz-inline-box;
	border: 1px solid  #3190e8;
	font-size: 12px;
	color: #3190e8;
	padding: 2px;
	margin-right: 5px;
	text-align: center;
}
.myNull{
	padding: 0px !important;
	border: 0px !important;
	margin-right: 0px !important;
}
.mine-address-num-left-address{
	width: 100%;
	display: flex;
	padding: 2px 0px;
	align-items: center;
}
.mine-address-add{
	width: 100%;
	height: 70px;
	background-color: #fff;
	position: fixed;
	margin: auto;
	bottom: 0px;
	left: 0;
	right: 0;
	border-top: 2px solid #e5e5e5;
}
.mine-address-add a{
	color: #3190e8;
	font-size: 21px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
}
.mine-address-add a img{
	width: 25px;
	margin-right: 5px;
}
</style>