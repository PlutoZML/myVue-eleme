<template>

    <!--商家-点餐-->
	<div class="index-business">
		<div class="index-business-head">
			<div class="index-business-head-top">
				<router-link to="/myBLM">
					<img src="../../../assets/fanhui.png"/>
				</router-link>
			</div>
			<div class="index-business-head-info">
				<div class="index-business-photo"><img src="../../../assets/myhome-sj-pic1.png"/></div>
				<div class="index-business-name">
					<h2>
						<span>华莱士炸鸡汉堡(青阳路店)</span>
						<i><img src="../../../assets/index-right.png"/></i>
					</h2>
				</div>
				<div class="index-business-pingjia">
					<span>评价4.5</span><span>月销9999单</span><span>蜂鸟专送约99分钟</span>
				</div>
				<div class="index-business-quan">
					<div class="index-business-quan1 youhuiquan">
						<p><span><small>￥</small>6</span><span>无门槛</span></p>
						<p>领取</p>
					</div>
					<div class="index-business-quan2 youhuiquan">
						<p><span><small>￥</small>2</span><span>满45可用</span></p>
						<p>领取</p>
					</div>
				</div>
				<div class="index-business-youhui">
					<p>
						<span class="manjian">满减</span>
						<span>满6减6，满25减13，满38减20，满59减30</span>
					</p>
					<p>
						<span>5个优惠</span>
						<span><img src="../../../assets/myhome-down.png"/></span>
					</p>
				</div>
				<p class="gonggao">公告：烤鸡、汉堡、鸡肉卷等各种小食等你来抢！满减、折扣各种划算等你来享！用超低的价格买最多的量，划算多多！另本餐厅承接任何类型发型外卖订餐，餐厅电话：15105510552店长电话：15212783278华莱士期待着您的光临！</p>
			</div>
		</div>
		<div class="index-business-con">
			<div class="index-business-con-nav">
				<div class="index-business-nav chose-service">
					<span>点餐</span>
				</div>
				<div class="index-business-nav">
					<span>评价</span>
				</div>
				<div class="index-business-nav">
					<span>商家</span>
				</div>
			</div>
		</div>
		<!--点餐-->
		<div class="index-business-order" >
			<div class="index-business-order-left">
				<!--左侧-->
				<div class="myIndex">
					<ul>
						<li v-for="(list,index1) in myListFl" @click="choseFl(index1)" :class="{'active-fl':choseIndex === index1}">{{list.flname}}</li>
					</ul>
				</div>
			</div>
			<div class="index-business-order-right">
				<!--右侧-->
				<div class="myList">
					<ul>
						<li class="fenlei" v-for="(list,index1) in myListFl">
							<ul>
								<p class="list-title"><span>{{list.flname}}</span><span>--------------------------------</span></p>
								<li class="list-num" v-for="(pro,index2) in list.flpro">
									<span class="list-pic"><img :src="pro.pro_img"/></span>
									<span class="list-price">
											<p>{{pro.pro_name}}</p>
											<p>
												<span>￥{{pro.pro_price}}</span>
												<span>
													<span class="jian" v-show="pro.pro_num>0" @click="pro.pro_num>0?pro.pro_num--:''">-</span>
													<span class="number" v-show="pro.pro_num>0">{{pro.pro_num}}</span>
													<span class="jia" @click="pro.pro_num++">+</span>
												</span>
											</p>
									</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<!--购物车-->
			<div class="myshopcar">
				<div class="myshopcar-box">
					<div class="myshopcar-left" @click="findAllSelectPro">
						<div class="myshopcar-car">
							<div class="myshopcar-big" :class="animateCar?'myshopcarAnimate':''">
								<div class="myshopcar-small"></div>
								<span class="pro-num" v-cloak v-show="getAllPro.anum>0">{{getAllPro.anum}}</span>
							</div>
						</div>
						<div class="myshopcar-price">
							<p v-cloak v-show="!priceShow">未选购商品</p>
							<p v-cloak v-show="priceShow"><span class="allPrice">￥{{getAllPro.amoney}}</span></p>
							<p>另需配送费1元</p>
						</div>
					</div>
					<div class="myshopcar-right">
						<span class="qisong" v-cloak v-show="!payShow">￥{{qisongPrice}}起送</span>
						<span class="fukuan" v-cloak v-show="payShow">去结算</span>
					</div>
				</div>
			</div>
	
			<div class="myshopShowBox" v-cloak v-show="seemyproBool">
				<div class="myshopShowBox-box">
					<div class="myshopShowBox-title">
						<span>已选商品</span>
						<span @click="deleteAllselectPro"><img src="@/assets/clear.png"/>清空</span>
					</div>
					<div class="myshopShowBox-con">
						<ul>
							<li v-for="(pro,index) in myselectAllPro">
								<span class="choseProName">{{pro.pro_name}}</span>
								<span class="choseProPrice">￥{{pro.pro_price}}</span>
								<span class="choseProNum">
										<span class="jian" v-show="pro.pro_num>0" @click="pro.pro_num>0?pro.pro_num--:''">-</span>
										<span class="number" v-show="pro.pro_num>0">{{pro.pro_num}}</span>
										<span class="jia" @click="pro.pro_num++">+</span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
	
			<div class="modelBox" v-cloak v-show="seemyproBool">
				<div class="modelBox-box"></div>
			</div>
		</div>
		
		<!--评价-->
		<div class="index-business-assess">
			
		</div>
		
		<!--商家-->
		<div class="index-business-store">
			
		</div>
	</div>
	
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				choseIndex: 0,
				myListFl: [
				{
					flname: '堡堡有福',
					flpro: [{
							pro_img: '../../../../../static/img/eat1.png',
							pro_name: '香辣鸡腿堡',
							pro_price: 1,
							pro_num: 0,
						},
						{
							pro_img: '../../../../../static/img/eat2.png',
							pro_name: '至尊板烧堡',
							pro_price: 12.5,
							pro_num: 0,
						},
						{
							pro_img: '../../../../../static/img/eat3.png',
							pro_name: '牛肉煲',
							pro_price: 15.5,
							pro_num: 0,
						}
					]
				},
				{
					flname: '缤纷酷饮',
					flpro: [{
							pro_img: '../../../../../static/img/he.png',
							pro_name: '橙A果汁',
							pro_price: 10,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/he.png',
							pro_name: '橙B果汁',
							pro_price: 10.5,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/he.png',
							pro_name: '橙C果汁',
							pro_price: 12.5,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/he.png',
							pro_name: '橙D果汁',
							pro_price: 15,
							pro_num: 0
						}
					]
				},
				{
					flname: '今晚吃鸡',
					flpro: [{
							pro_img: '../../../../../static/img/ji1.png',
							pro_name: '蜜汁手扒鸡',
							pro_price: 25,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/ji2.png',
							pro_name: 'BBQ烤全鸡',
							pro_price: 22,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/ji3.png',
							pro_name: '黄金脆皮鸡', 
							pro_price: 20,
							pro_num: 0
						}
					]
				},
				{
					flname: '鸡肉卷系列',
					flpro: [{
							pro_img: '../../../../../static/img/juan.png',
							pro_name: '黄金鸡肉卷',
							pro_price: 11,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/juan.png',
							pro_name: '墨西哥鸡肉卷',
							pro_price: 12,
							pro_num: 0
						}
					]
				},
				{
					flname: '精选小食',
					flpro: [{
							pro_img: '../../../../../static/img/xiaochi1.png',
							pro_name: '脆皮小香蕉',
							pro_price: 10,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/xiaochi2.png',
							pro_name: '骨肉相连',
							pro_price: 8,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/xiaochi3.png',
							pro_name: '薯条',
							pro_price: 8,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/xiaochi4.png',
							pro_name: '玉米杯',
							pro_price: 10,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/xiaochi5.png',
							pro_name: '上校鸡块',
							pro_price: 8,
							pro_num: 0
						},
						{
							pro_img: '../../../../../static/img/xiaochi6.png',
							pro_name: '奥尔良烤翅',
							pro_price: 12,
							pro_num: 0
						}
					]
				},
				],

				myselectAllPro: [], //选取商品的集合
				animateCar: false, //给购物车添加动画效果
				priceShow: false, //是否显示总钱数
				payShow: false, //是否显示结算
				qisongPrice: 10, //起送费
				seemyproBool: false, //选取的商品展示
			}
		},
		
		methods: {
			choseFl(index) {

//				console.log(index);
				//把当前点击的元素的索引赋给choseIndex 改变索引值  为当前元素添加类
				this.choseIndex = index;

				// 根据索引值，获取当前点击的分类 对应的 商品类  
				var fenleiEle = document.getElementsByClassName("fenlei")[index];
				//获取到想要的标签  然后根据标签 获取 距离到 浏览器顶部的距离 
				var fenleiTop = fenleiEle.offsetTop;
				//根据想要的标签  获取父节点
				var fenleiEleParent = fenleiEle.parentNode;
				//获取父元素 到浏览器顶部的距离
				var fenleiEleParentTop = fenleiEleParent.offsetTop;
				//得到差值，获取元素到父元素的距离
				var chazhi = fenleiTop - fenleiEleParentTop;
				//调用mylist的滚动事件  使mylist滚动到指定的位置
				var listEle = document.getElementsByClassName("myList")[0]; //获取可以滚动的div
				listEle.scrollTop = chazhi; //当点击左侧时，右侧会对相应的跳转

			},

			//为mylist添加一个滚动事件
			listScroll() {

				var listEle = document.getElementsByClassName("myList")[0]; //获取可以滚动的div
				var fenleiEles = document.getElementsByClassName("fenlei"); //获取所有分类li标签
				var fenleiEleParent = fenleiEles[0].parentNode; //获取分类li标签的的父元素
				var fenleiEleParentTop = fenleiEleParent.offsetTop; //获取父元素到顶部的距离
				var scrollTops = []; //定义一个数组，存放所有分类li到顶部距离
					
				for(var i = 0; i < fenleiEles.length; i++) {
					scrollTops.push(fenleiEles[i].offsetTop);
				}
				

				//根据滚动的距离  改变 左侧导航栏 的索引值  使其添加类 
				listEle.addEventListener("scroll", () => {
										
					for(var j = 0; j < scrollTops.length; j++) {
						if(listEle.scrollTop >= scrollTops[j]) {
							this.choseIndex = j;
						}
					}
				});
			},

			//点击下面的购物车  如果选择了商品  可以点击查看  如果没有，则不能点击
			findAllSelectPro() {
				if(this.myselectAllPro.length != 0) {
					this.seemyproBool = !this.seemyproBool;
				}
			},

			//清空所有所选的商品
			deleteAllselectPro() {
				//console.log(this.myselectAllPro);
				this.myselectAllPro.forEach((value, index) => {
					value.pro_num = 0;
				});
			}

		},
		computed: {
			getAllPro() {
				var anum = 0; //选择的所有商品数量
				var amoney = 0; //选择的所有商品的总价

				//遍历整个数组  获取所有数量的总数  和  总价
				this.myListFl.forEach((value1, index1) => {
					value1.flpro.forEach((value2, index2) => {
						anum += value2.pro_num;
						amoney += value2.pro_num * value2.pro_price;
						//console.log("数量："+item.pro_num+"，单价："+item.pro_price+"，总价："+amoney);

						//当选取的数量不为0时，把当前数据加到新数组中
						if(value2.pro_num > 0 && this.myselectAllPro.indexOf(value2) === -1) {
							this.myselectAllPro.push(value2);

						}
						//循环新数组，判断数组里面是否有商品数量为0的值，如果有，就删除

						this.myselectAllPro.forEach((value3, index3) => {
							if(value3.pro_num == 0) {
								this.myselectAllPro.splice(index3, 1);
							}
						});

						if(this.myselectAllPro.length == 0) {
							this.seemyproBool = false;
						}

					});
				});
				//console.log(this.myselectAllPro);

				//如果选取的总数量大于0  就显总价和数量
				if(anum > 0) {
					this.animateCar = true;
					this.priceShow = true;
				} else {
					this.animateCar = false;
					this.priceShow = false;
				}

				//如果总金额大于等于起送费   就显示结算
				if(amoney >= 10) {
					this.payShow = true;
				} else {
					this.payShow = false;
					this.qisongPrice = 10 - amoney; //起送费随着总金额变化
				}

				return {
					anum,
					amoney
				};
			},

		},
		mounted() {
			//触发mylist的滚动事件
			this.listScroll();

		}
	}
</script>

<style scoped>
.index-business{
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.index-business-head{
	width: 100%;
	height: auto;
}
.index-business-head-top{
	width: 100%;
	height: 130px;
	background: url(../../../assets/business-bg.png) no-repeat center;
	background-size: cover;
	position: relative;
	padding: 10px 10px;
}
.index-business-head-top:before{
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(0,0,0,0.5);
	z-index: 1;
}
.index-business-head-top>a{
	position: absolute;
	z-index: 10;
	padding: 5px;
}
.index-business-head-info{
	width: 100%;
	height: auto;
	position: relative;
	padding-top: 40px;
}
.index-business-photo{
	width: 90px;
	height: 90px;
	position: absolute;
	border-radius: 5px;
	box-shadow: rgba(0,0,0,.2) 0px 0px 5px 0px;
	background-color: #fff;
	z-index: 10;
	margin: auto;
	top: -70px;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.index-business-photo img{
	width: 98%;
}
.index-business-name{
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
}
.index-business-name h2{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	width: 70%;
}
.index-business-name h2 span{
	display: inline-block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.index-business-name h2 i{
	display: flex;
	justify-content: center;
	align-items: center;
}
.index-business-pingjia{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	color: #666;
	padding: 5px 0px;
}
.index-business-pingjia span{
	margin:0px 5px;
}
.index-business-quan{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.youhuiquan{
	width: 172px;
	height: 30px;
	position: relative;
	margin: 0px 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	color: #594519;
	font-size: 14px;
}
.youhuiquan>p{
	margin: 0px 10px;
}
.youhuiquan>p:nth-of-type(1)>span:nth-of-type(1){
	font-weight: bold;
	color: #594519;
	margin-right: 10px;
}

.youhuiquan:before{
	content: "";
	position: absolute;
	width: 6px;
	height: 6px;
	background-color: #fff;
	border-radius: 50%;
	left: 105px;
	top: -3px;
}
.youhuiquan:after{
	content: "";
	position: absolute;
	width: 6px;
	height: 6px;
	background-color: #fff;
	border-radius: 50%;
	left: 105px;
	bottom: -3px;
}
.index-business-quan1{
	background-color: #ffe578;
}
.index-business-quan2{
	background-color: #fff4f4;
}
.index-business-youhui{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	color: #333;
	margin: 5px 0px;
}
.manjian{
	display: inline-block;
	height: auto;
	background-color: rgb(240, 115, 115);
	color: #fff;
	padding: 0px 5px;
	margin-right: 5px;
}
.index-business-youhui>p{
	display: flex;
	align-items: center;
	margin: 0px 5px;
}
.index-business-youhui>p>span{
	display: flex;
	align-items: center;
}
.index-business-youhui>p:nth-of-type(2){
	color: #999;
}
.index-business-youhui>p:nth-of-type(1)>span:nth-of-type(2){
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.gonggao{
	width: 85%;
	margin: auto;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #999;
	font-size: 14px;
}

.index-business-con{
	width: 100%;
	height: auto;
	background-color: #fff;
}
.index-business-con-nav{
	width: 100%;
	height: 50px;
	display: flex;
	margin: 10px 0px 0px 0px;
	border-bottom: 1px solid #F8F8F8;
}
.index-business-nav{
	flex: 1;
	text-align: center;
	line-height: 50px;
	font-size: 18px;
	color: #666;
}
.index-business-nav span{
	display: inline-block;
	height: 100%;
}
.chose-service span{
	font-weight: bold;
	color: #333;
	border-bottom: 3px solid #2395FF;
}

/*点餐*/
.index-business-order{
	width: 100%;
	height: 830px;
	display: flex;
	position: relative;
}
.index-business-order-left{
	width: 22%;
	height: 100%;
	background-color: #F8F8F8;
}
.index-business-order-right{
	width: 78%;
	height: 100%;
	background-color: #fff;
}

.myIndex {
	width: 100%;
	height: 100%;
	background-color: #F5F5F5;
	overflow-y: auto;
}

.myList {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	box-sizing: border-box;
	padding: 10px;
	background-color: #fff;
    position: relative;
}

.myList>ul {
	padding-bottom: 150px;
}

.myIndex ul {
	width: 100%;
	height: auto;
	margin: 0 !important;
	padding-bottom: 200px;
}

.myIndex ul li {
	width: 100%;
	height: 80px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #666;
	cursor: pointer;
}

.fenlei {
	width: 100%;
	height: auto;
	margin-bottom: 40px;
}

.list-title {
	color: #666;
	font-size: 20px;
	font-weight: bold;
	display: flex;
	justify-content: space-between;
}
	
.list-num {
	width: 100%;
	height: auto;
	display: flex;
	margin: 20px 0px;
	font-size: 18px;
	color: #333;
}

.list-num>span {
	display: block;
}

.list-pic {
	width: 40%;
	font-size: 0px;
}

.list-pic img {
	width: 100%;
}

.list-price {
	width: 75%;
	height: auto;
	padding: 0px 0px 0px 10px;
	position: relative;
}

.list-price p {
	display: flex;
	justify-content: space-between;
}

.list-price span {
	display: flex;
}

.list-price>p:nth-of-type(1) {
	font-size: 22px;
	font-weight: bold;
	color: #333;
}

.list-price>p:nth-of-type(2) {
	width: 98%;
	position: absolute;
	bottom: 0;
}

.list-price>p:nth-of-type(2)>span:nth-of-type(1) {
	font-size: 20px;
	color: #FF5339;
}

.jian,
.jia,
.number {
	display: flex;
	width: 30px;
	height: 30px;
	align-items: center;
	justify-content: center;
	/*margin: 0px 5px;*/
	font-weight: bold;
}

.jian {
	border: 2px solid #2395FF;
	border-radius: 50%;
	color: #2395FF;
	cursor: pointer;
}

.jia {
	border-radius: 50%;
	color: #fff;
	background-color: #2395FF;
	cursor: pointer;
}
/*给选中的分类增加的样式*/

.active-fl {
	background-color: #fff;
}
/*购物车*/

.myshopcar {
	width: 100%;
	height: 80px;
	position: fixed;
	bottom: 0;
	margin: auto;
	left: 0;
	right: 0;
	z-index: 999;
}

.myshopcar-box {
	width: 100%;
	height: 100%;
	display: flex;
}

.myshopcar-left {
	width: 75%;
	height: 100%;
	background-color: #505052;
	display: flex;
}

.myshopcar-car {
	width: 200px;
	height: 100%;
	position: relative;
}

.myshopcar-price {
	width: 400px;
	height: 100%;
	color: #999;
	padding: 10px 0px;
	font-size: 18px;
}

.myshopcar-price>p {
	height: 50%;
	display: flex;
	align-items: center;
}

.myshopcar-right {
	width: 25%;
	height: 100%;
	background-color: #535356;
	display: flex;
	justify-content: center;
	align-items: center;
}

.qisong {
	display: block;
	width: 100%;
	height: 100%;
	color: #fff;
	font-size: 25px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
}

.fukuan {
	display: block;
	width: 100%;
	height: 100%;
	color: #fff;
	font-size: 25px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #38ca73;
	cursor: pointer;
}

.myshopcar-big {
	width: 90px;
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #444;
	border-radius: 50%;
	padding: 10px;
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	top: -18px;
}

.myshopcar-small {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background: url(../../../assets/car.png) no-repeat center;
	background-color: #363636;
}

.myshopcarAnimate {
	animation: myanimate .5s ease;
}

.myshopcarAnimate .myshopcar-small {
	background: url(../../../assets/car1.png) no-repeat center;
	background-color: #3190E8;
}

@keyframes myanimate {
	0% {
		transform: scale(1);
	}
	25% {
		transform: scale(0.9);
	}
	50% {
		transform: scale(1.1);
	}
	75% {
		transform: scale(0.9);
	}
	100% {
		transform: scale(1);
	}
}

[v-cloak] {
	display: none !important;
}

.pro-num {
	display: block;
	width: 30px;
	height: 30px;
	position: absolute;
	right: 0;
	top: 0;
	background-color: #ff4815;
	color: #fff;
	border-radius: 50%;
	line-height: 30px;
	text-align: center;
	font-size: 18px;
}

.allPrice {
	font-size: 30px;
	color: #fff;
	/*font-weight: bold;*/
}

.myshopShowBox {
	width: 100%;
	height: auto;
	position: fixed;
	margin: auto;
	bottom: 80px;
	left: 0;
	right: 0;
	/*padding: 20px 20px;*/
	z-index: 998;
}

.myshopShowBox-box {
	width: 100%;
	height: 100%;
	background-color: #fff;
}

.myshopShowBox-title {
	width: 100%;
	height: 90px;
	background-color: #eceff1;
	padding: 10px 18px;
	display: flex;
	justify-content: space-between;
	font-size: 25px;
	color: #666;
}

.myshopShowBox-title span {
	display: flex;
	align-items: center;
}

.myshopShowBox-title span img {
	margin-right: 10px;
}

.myshopShowBox-title span:nth-of-type(2) {
	cursor: pointer;
}

.modelBox {
	position: fixed;
	width: 100%;
	height: 100%;
	/*padding: 20px;*/
	left: 0px;
	top: 0;
	z-index: 900;
}

.modelBox-box {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .5);
}

.myshopShowBox-con {
	width: 100%;
	max-height: 300px;
	overflow-y: auto;
}

.myshopShowBox-con li {
	display: flex;
	padding: 25px 18px;
}

.myshopShowBox-con li span {
	display: flex;
	align-items: center;
}

.choseProName {
	flex: 5.5;
	font-size: 25px;
	color: #333;
}

.choseProPrice {
	flex: 2.5;
	text-align: right;
	font-size: 22px;
	color: #ff5339;
	font-weight: bold;
}

.choseProNum {
	display: flex;
	flex: 2;
	justify-content: flex-end;
}
</style>