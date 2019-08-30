<template>
	<div class="myapp">
		<!--首页 主要内容-->
		<div class="myapp-index" v-show="!showAddress">
			<div class="myHeader">
				<div class="myHeader-address">
					<span @click="showAddress = !showAddress"><img src="../../assets/address.png"/></span>
					<span @click="showAddress = !showAddress">{{currentAddress}}</span>
					<span @click="showAddress = !showAddress"><img src="../../assets/up.png"/></span>
				</div>
				<div class="myHeader-search" :class="isScroll==true?'myHeader-search-position':''">
					<div class="myHeader-search-box" @click="myalert">
						<span><img src="../../assets/serch.png"/></span>
						<span>搜索饱了么商家，商品名称</span>
					</div>
				</div>
			</div>
			<div class="myCenter">
				<div class="myhome">
					<div class="myhome-rota">
						<mt-swipe :auto="0">
						  <mt-swipe-item class="slide1">
						  	<ul class="myhome-ul clearfix">
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico1.png"/></p><p>美食</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico2.png"/></p><p>早餐</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico3.png"/></p><p>商超便利</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico4.png"/></p><p>水果</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico5.png"/></p><p>医药健康</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico6.png"/></p><p>浪漫鲜花</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico7.png"/></p><p>跑腿代购</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico8.png"/></p><p>汉堡披萨</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico9.png"/></p><p>厨房生鲜</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico10.png"/></p><p>甜品饮品</p></a></li>
						  	</ul>
						  </mt-swipe-item>
						  <mt-swipe-item class="">
						  	<ul class="myhome-ul clearfix">
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico11.png"/></p><p>速食简餐</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico12.png"/></p><p>地方小吃</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico13.png"/></p><p>大牌惠吃</p></a></li>
						  		<li><a href="javascript:;"><p><img src="../../assets/myhome-ico14.png"/></p><p>速食简餐</p></a></li>
						  	</ul>
						  </mt-swipe-item>
						</mt-swipe>
					</div>
					<div class="myhome-content">
						<!--品质套餐-->
						<div class="myhome-quality clearfix">
							<router-link to="" class="a-box clearfix">
								<div class="myhome-quality-left">
									<p>品质套餐</p>
									<p>搭配齐全吃得好</p>
									<p>立即抢购&gt;</p>
								</div>
								<div class="myhome-quality-right">
									<img src="../../assets/myhome-pic1.png"/>
								</div>
							</router-link>
						</div>
						
						<!--超级会员-->
						<div class="myhome-vip">
							<a href="javascript:;">
								<img src="../../assets/myhome-vip.png"/><span>超级会员·</span>已为我节省<span>238</span>元
							</a>
							<a href="javascript:;"><span>4.5</span>个奖励金</a>
						</div>
						
						<!--推荐商家-->
						<div class="myhome-recommend">
							<div class="myhome-recommend-head">
								<div class="myhome-recommend-head-title">
									<span>推荐商家</span>
								</div>
								<div class="myhome-recommend-head-choose">
									<div class="myhome-recommend-head-choose-ul" :class="myScroll===true?'myhome-recommend-chose-position':''">
										<ul>
											<li><a href="javascript:;"><span>综合排序</span><img src="../../assets/myhome-down.png"/></a></li>
											<li><a href="javascript:;"><span>距离最近</span></a></li>
											<li><a href="javascript:;"><img src="../../assets/myhome-hg.png"/>&nbsp;<span>会员领红包</span></a></li>
											<li><a href="javascript:;"><span>筛选</span>&nbsp;<img src="../../assets/myhome-sx.png"/></a></li>
										</ul>
									</div>	
								</div>
							</div>
							<div class="myhome-recommend-content">
								<div class="myhome-recommend-num">
									<router-link to="/index-business" class="a-box clearfix">
										<div class="myhome-recommend-num-pic">
											<div class="myhome-recommend-num-pic-ico">
												<img src="../../assets/myhome-sj-pic1.png"/>
											</div>
										</div>
										<div class="myhome-recommend-num-text">
											<div class="myhome-recommend-num-text-info">
												<div class="clearfix">
													<span class="myname"><span class="mypinpai">品牌</span><span class="myname-sj">华莱士炸鸡汉堡(青阳路店)</span></span>
													<span class="mylike"><img src="../../assets/like.png"/></span>
												</div>
												<div class="clearfix">
													<span><span class="mypingjia">评分4.5</span><span class="myyuexiao">月售99单</span></span>
													<span class="myzhuansong">蜂鸟专送</span>
												</div>
												<div class="clearfix">
													<span class="mypeisong">
														<span>￥20起送</span>
														<span>|</span>
														<span>免配送费</span>
													</span>
													<span class="mypeisong">
														<span>999m</span>
														<span>|</span>
														<span>99分钟</span>
													</span>
												</div>
												<div class="mytese">
													<span class="myfood">汉堡薯条</span>
												</div>
											</div>
											<div class="myhome-recommend-num-text-youhui">
												<div class="myhome-recommend-num-text-youhui-left" :class="showyouhui==true?'MyshowYouhui':''">
													<p>
														<span class="myjian my-fuli">减</span>
														<span class="my-fuli-con">满6减6，满25减13，满38减20，满59减30，满99减50</span>
													</p>
													<p>
														<span class="myzhe my-fuli">折</span>
														<span class="my-fuli-con">折扣商品5折起</span>
													</p>
													<p>
														<span class="myshou my-fuli">首</span>
														<span class="my-fuli-con">新用户下单立减9元</span>
													</p>
													<p>
														<span class="myte my-fuli">特</span>
														<span class="my-fuli-con">特价商品0.01元起</span>
													</p>
													<p>
														<span class="myzeng my-fuli">赠</span>
														<span class="my-fuli-con">满1元赠送店铺超值优惠券一份</span>
													</p>
													<p>
														<span class="mypei my-fuli">赔</span>
														<span class="my-fuli-con">商家原因导致订单取消，赔付代金券</span>
													</p>
												</div>
												<div class="myhome-recommend-num-text-youhui-right">
												    <span @click.stop.prevent="showyouhui = !showyouhui">6个活动 <img src="../../assets/myhome-down.png"/></span>
												</div>
											</div>
										</div>
									</router-link>
								</div>
							</div>
						    <div class="myhome-recommend-more">没有更多了</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
		
		<!--首页更换地址-->
		<div class="choseAddress" v-show="showAddress">
			<!--固定  带有返回的头部-->
			<div class="myheadReturn">
				<div class="myhead-return">
					<div class="myreturn-left" @click="showAddress = !showAddress">
						<router-link to="" class="a-box">
							<img src="../../assets/fanhui.png"/>
						</router-link>
					</div>
					<span class="myhead-return-title">选择收货地址</span>
					<div class="myreturn-right">
						<router-link to="" class="a-box">
							新增地址
						</router-link>
					</div>
				</div>
			</div>
			<div class="myheadReturn-content">
				<div class="myheadReturn-search">
					<div class="myheadReturn-search-city">
						<span>合肥</span>
						<span><img src="../../assets/address-ico.png"/></span>
					</div>
					<div class="myheadReturn-search-messAddress">
						<span><img src="../../assets/searchAddress.png"/></span>
						<span><input type="text" class="shuRuAddress" placeholder="请输入地址" value="" /></span>
					</div>
				</div>
				<div class="myheadReturn-address">
					<p>当前地址</p>
					<ul>
						<li>
							<span class="momentAddress">行政外环路合肥市行政服务中心</span>
							<span class="RelocationAddress">重新定位</span>
						</li>
					</ul>
				</div>
				<div class="myheadReturn-GoodsAddress">
					<p>收货地址</p>
					<ul>
						<li v-for="(addre,index) in this.$store.state.addressInfo" @click="gainAddress(addre,index)">
							<p><span>{{addre.myName}}</span><span>{{addre.myCall}}</span><span>{{addre.myPhone}}</span></p>
							<p><span>{{addre.myAddress}}{{addre.myMp}}</span></p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<!--底部-->
		<div class="myFooter">

			<ul>
				<li>
					<router-link to="/myBLM" v-menucolor="'#0086ff'">
						  <p><img src="../../assets/eleme-index2.png"/></p>
						  <p>首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						  <p><img src="../../assets/eleme-find1.png"/></p>
						  <p>发现</p>
					</router-link>
				</li>
				<li>
					<router-link to="/order">
						  <p><img src="../../assets/eleme-order1.png"/></p>
						  <p>订单</p>
					</router-link>
				</li>
				<li>
					<router-link to="/mine">
						  <p><img src="../../assets/eleme-my1.png"/></p>
						  <p>我的</p>
					</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>
<script>	
     export default{
		name: 'myBLM',
		data() {
			return {
				mes: '123456789',
				isScroll: false,
				myScroll: false,
				showAddress: false,
				showyouhui: false,
				currentAddress:"行政外环路合肥市行政服务中心",  //当前地址
			}
		},
		methods: {
			
			//搜索商家 
			myalert() {
				alert("我要吃饭！");
			},

			//获取页面滚动的距离  用来置顶固定搜索框
			handScroll() {
				var myScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//				console.log(myScrollTop);
				if(myScrollTop >= 60) {
					
					this.isScroll = true;
					
					if(myScrollTop >= 554){
						this.myScroll = true;
					}else{
						this.myScroll = false;
					}
					
				} else {
					this.isScroll = false;
				}
			},
			
			//选取地址
			gainAddress(addre,index){
				
//				console.log(index+","+addre.myAddress);
				this.currentAddress = addre.myAddress;
				this.showAddress = false;
			}
		},
		
		//在生命周期运行过程中 触发 滚动事件
		mounted() {
			window.addEventListener('scroll', this.handScroll);
		},
		
		//在生命周期销毁时  消除滚动事件
		destroyed() {
			window.removeEventListener('scroll', this.handScroll)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.myapp {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.myapp-index{
		width: 100%;
		height: auto;
		position: relative;
	}
	.myHeader {
		width: 100%;
		height: 130px;
	}
	.myHeader-address {
		width: 100%;
		height: 60px;
		padding: 10px 15px 0px 15px;
		background: linear-gradient(to right, #00aaff, #0085ff);
		display: flex;
		align-items: center;
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}
	.myHeader-address>span {
		margin-right: 8px;
	}
	.myHeader-address>span:nth-of-type(2) {
		max-width: 35%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: 'Helvetica Neue', Tahoma, Arial, PingFangSC-Regular, 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
	}
	.myHeader-search {
		width: 100%;
		height: 60px;
		padding: 10px 15px 10px 15px;
		background: linear-gradient(to right, #00aaff, #0085ff);
		position: static;
	}
	.myHeader-search-position {
		position: fixed;
		margin: auto;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9999;
	}
	.myHeader-search-box {
		width: 100%;
		height: 100%;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		color: #999;
	}
	.myHeader-search-box span {

		margin: 5px;
	}
	.myhome{
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
	}
	.myhome-rota{
		width: 100%;
		height: 225px;
		padding-top: 10px;
	}
	.myhome-rota .slide1{
		/*background-color: #F5F5F5;*/
	}
	.myhome-rota .slide2{
		background-color: green;
	}
    >>>.mint-swipe-indicator{
		width: 12px;
		height: 3px;
		border-radius: initial;
		background-color: #000;
	}
	>>>.mint-swipe-indicator.is-active{
		background-color: #fe7100;
	}
	.myhome-ul{
		width: 100%;
		height: 100%;
	}
	.myhome-ul li{
		display: block;
		width: 20%;
		height: 40%;
		float: left;
	}
	.myhome-ul li>a{
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		color: #666;
		font-size: 15px;
	}
	.myhome-ul li>a>p img{
		width: 60%;
	}
	.myhome-content{
		width: 100%;
		height: auto;
		padding: 0px 10px 100px 10px;
	}
	.myhome-quality{
		width: 100%;
		height: 142px;
		background: linear-gradient(to bottom,#fafafa,#f4f4f4);
		padding: 0px 0px 0px 18px;
	}
	.myhome-quality-left,
	.myhome-quality-right{
		float: left;
		width: 50%;
		height: 100%;
	}
	.myhome-quality-left>p:nth-of-type(1){
		font-size: 22px;
		font-weight: bold;
		color: #333;
		margin-top: 18px;
	}
	.myhome-quality-left>p:nth-of-type(2){
		color: #777;
		font-size: 16px;
	}
	.myhome-quality-left>p:nth-of-type(3){
		font-size: 15px;
		color: #af8260;
		font-weight: bold;
	    margin-top: 10px;
	}
	.myhome-quality-right{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.myhome-quality-right img{
		width: 85%;
	}
	.myhome-vip{
		width: 100%;
		height: auto;
		background: linear-gradient(to right,#ffeec3,#f3dda0);
		margin-top: 5px;
		padding: 10px 10px 10px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 3px;
    }
    .myhome-vip a{
    	display: flex;
    	align-items: center;
    	font-size: 14px;
    	color: #644f1b;
    	position: relative;
    	padding-right: 10px;
    }
    .myhome-vip a img{
    	width: 22px;
    	margin-right: 10px;
    }
    .myhome-vip a:nth-of-type(1)>span:nth-of-type(1){
    	font-size: 18px;
    	color: #644f1b;
    	font-weight: bold;
    }
    .myhome-vip a:nth-of-type(1)>span:nth-of-type(2){
    	font-weight: bold;
    	font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    }
    .myhome-vip a:nth-of-type(2)>span{
     	font-size: 26px;
     	font-weight: bold;
     	color: #bd8f22;
     }
    .myhome-vip a:nth-of-type(2):after{
      	content: "";
      	width: 4px;
      	height: 4px;
      	border: 2px solid #8c632b;
      	transform: rotate(45deg);
      	border-left: 0px;
      	border-bottom: 0px;
      	position: absolute;
      	margin: auto;
      	right: 0;
      	top: 0;
      	bottom: 0;
      }
    
    .myhome-recommend{
    	width: 100%;
    	height: auto;
    }
    .myhome-recommend-head{
    	width: 100%;
    	height: auto;
    	margin-top: 5px;
    }
    .myhome-recommend-head-title{
    	width: 100%;
    	height: auto;
    	text-align: center;
    	padding: 20px 0px;
    }
    .myhome-recommend-head-title span{
    	position: relative;
    	padding: 0px 40px;
    	font-size: 20px;
    }
    .myhome-recommend-head-title span:before{
        content: "";
        position: absolute;
        width: 26px;
        height: 2px;
        background: linear-gradient(to bottom,#ccc,#999);
        margin: auto;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .myhome-recommend-head-title span:after{
    	content: "";
        position: absolute;
        width: 26px;
        height: 2px;
        background: linear-gradient(to bottom,#ccc,#999);
        margin: auto;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .myhome-recommend-head-choose{
    	width: 100%;
    	height: 50px;
    	margin-bottom: 30px;
    }
    .myhome-recommend-chose-position{
    	position: fixed;
    	z-index: 999;
    	margin: auto;
    	top: 70px;
    	left: 0;
    	right: 0;
    	padding: 0px 10px;
    }
    .myhome-recommend-head-choose-ul{
    	width: 100%;
    	height: auto;
    	background-color: #fff;
    }
    .myhome-recommend-head-choose ul{
    	height: 100%;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    }
    .myhome-recommend-head-choose ul li{
    	height: 100%;
    	flex: 1;
    }
    .myhome-recommend-head-choose ul li a{
     	display: flex;
     	height: 50px;
     	width: 100%;
     	/*padding: 10px 0px;*/
     	justify-content: center;
     	align-items: center;
     	text-align: center;
     	font-size: 16px;
     	color: #666;
     }
     .myhome-recommend-head-choose ul li a span{
     	overflow: hidden;
     	text-overflow: ellipsis;
     	/*white-space: nowrap;*/
     }

    .myhome-recommend-content{
    	width: 100%;
    	height: auto;
    }
    .myhome-recommend-num{
    	width: 100%;
    	height: auto;
    	border-bottom: 1px solid #fcfcfc;
    	margin-bottom: 30px;
    	padding-bottom: 20px;
    }
    .myhome-recommend-num-pic{
    	width: 18.3%;
    	height: auto;
    	border: 1px solid #f5f5f5;
    	float: left;
    }
    .myhome-recommend-num-pic img{
    	width: 100%;
    }
    .myhome-recommend-num-text{
    	width: 81.7%;
    	height: auto;
    	/*background-color: #ccc;*/
    	float: right;
    	padding-left: 14px;
    }
    .myhome-recommend-num-text-info{
    	width: 100%;
    	height: auto;
    }
    .myhome-recommend-num-text-info>div{
    	width: 100%;
    	height: auto;
    	display: flex;
    	align-items: center;
    	justify-content: space-between;
    	margin-bottom: 5px;
    }
    .myhome-recommend-num-text-info>div>span{
 	    display: flex;
	    align-items: center;
    }
    .myhome-recommend-num-text-info>div>span:nth-of-type(2){
    	margin-left: auto;
    }
    .mypinpai{
    	display: block;
    	width: 35px;
    	height: 22px;
    	background: linear-gradient(-139deg,#fff100,#ffe339);
    	text-align: center;
    	line-height: 22px;
    	font-size: 14px;
    	color: #333;
    	margin-right: 5px;
    }
    .myname-sj{
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	width: 100%;
    }
    .myname{
    	font-size: 19px;
    	font-weight: bold;
    	color: #333;
    	width: 70%;
    }
    .mylike{
    	display: block;
    	margin-left: auto;
    }
    .mypingjia{
    	font-size: 13px;
    	color: #666;
    	margin-right: 5px;
    }
    .myyuexiao{
    	font-size: 13px;
    	color: #666;
    }
    .myzhuansong{
    	width: 54px;
    	height: 17px;
    	background: linear-gradient(45deg,#0085ff,#0af);
    	font-size: 13px;
    	color: #fff;
    	text-align: center;
    	line-height: 17px;
    	padding: 0px 1px;
    	border-radius: 2px;    	
    }
    .mypeisong{
    	font-size: 13px;
    	color: #999;
    }
    .mypeisong span{
    	margin-right: 5px;
    }
    .mytese{
    	width: 100%;
    	height: auto;
    	display: block;
    	padding: 10px 0px 10px 0px;
    }
    .myfood{
    	height: auto;
    	padding: 1px;
    	border: 1px solid #f5f5f5;
    	border-radius: 3px;
    	font-size: 14px;
    	color: #666;
    }
    .myhome-recommend-num-text-youhui{
    	width: 100%;
    	font-size: 14px;
    	color: #666;
    	border-top: 1px solid #F9F9F9;
    	padding-top: 10px;
    	display: flex;
    	justify-content: space-between;
    }
    .myhome-recommend-num-text-youhui-left{
    	width: 62%;
    	height: 52px;
    	overflow: hidden;
    }
    .myhome-recommend-num-text-youhui-left>p{
    	line-height: 26px;
    	display: flex;
    	align-items: center;
    }
    .myjian,
    .myzhe,
    .myshou,
    .myte,
    .myzeng,
    .mypei{
    	display: block;
    	width: 18px;
    	height: 18px;
    	border-radius: 2px;
    	text-align: center;
    	line-height: 18px;
    	font-size: 12px;
    	color: #fff;
    	margin-right: 8px;
    }
    .myjian{
     	background-color: #f07373;
    }
    .myzhe{
    	background-color: #f07373;
    }
    .myshou{
    	background-color: #70bc46;
    }    
    .myte{
    	background-color: #f1884f;
    }
    .myzeng{
    	background-color: #3cc791;
    }
    .mypei{
    	background-color: #999;
    }
    .my-fuli-con{
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	max-width: 80%;
    }
    .myhome-recommend-num-text-youhui-right{
    	width: 73px;
    	height: auto;
    }
    .myhome-recommend-num-text-youhui-right>span{
    	display: flex;
    	align-items: center;
    	font-size: 12px;
    	color: #666;
    	line-height: 20px;
    }
    .myhome-recommend-more{
    	text-align: center;
    	font-size: 14px;
    	color: #999;
    	padding: 0px 30px;
    }
    
    
    /*首页选择地址*/
    .choseAddress{
    	width: 100%;
    	height: 100%;
    	position: fixed;
    	margin: auto;
    	top: 0px;
    	left: 0;
    	right: 0;
    	background-color: #f4f4f4;
    	z-index: 990;
    }
    .myheadReturn-content{
    	width: 100%;
    	height: auto;
    }
    .myheadReturn-search{
    	width: 100%;
    	height: auto;
    	display: flex;
    	align-items: center;
    	padding: 10px 15px;
    	background-color: #fff;
    }
    .myheadReturn-search-city{
    	padding: 10px;
    	display: flex;
    	align-items: center;
    	font-size: 14px;
    	color: #666;
    }
    .myheadReturn-search-city span{
    	display: flex;
    	align-items: center;
    	margin-right: 10px;
    }
    .myheadReturn-search-city span:nth-of-type(1){
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	width: 50px;
    	display: inline-block;
    	text-align: center;
    }
    .myheadReturn-search-messAddress{
    	height: 39px;
    	width: 75%;
    	display: flex;
    	align-items: center;
    	background-color: #f2f2f2;
    	border-radius: 5px;
    }
    .myheadReturn-search-messAddress span{
    	display: inline-block;
    	height: 100%;
    	display: flex;
    	align-items: center;
    }
    .myheadReturn-search-messAddress span:nth-of-type(1){
    	padding: 0px 10px;
    }
    .myheadReturn-search-messAddress span input{
     	width: 100%;
     	background-color: #f2f2f2;
     	outline: none;
     	height: 100%;
    }
    .myheadReturn-address{
     	width: 100%;
     	height: auto;
    }
    .myheadReturn-address>p{
    	font-size: 15px;
    	color: #666;
    	padding: 20px 15px 10px 15px;
    }
    .myheadReturn-address ul li{
    	width: 100%;
    	height: auto;
    	padding: 15px;
    	background-color: #fff;
    	display: flex;
    	align-items: center;
    	justify-content: space-between;
    }
    .momentAddress,
    .RelocationAddress{
    	display: inline-block;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    }
    .momentAddress{
    	font-weight: bold;
    	font-size: 18px;
    	color: #333;
    } 
    .RelocationAddress{
    	font-size: 16px;
    	color: #2395FF;
    	background: url(../../assets/dingwei.png) no-repeat left center;
    	padding-left: 25px;
    }
    .RelocationAddress img{
    	margin-right: 5px;
    }
     
    .myheadReturn-GoodsAddress{
    	width: 100%;
     	height: auto;
    }
    .myheadReturn-GoodsAddress>p{
    	font-size: 15px;
    	color: #666;
    	padding: 20px 15px 10px 15px;
    }
    .myheadReturn-GoodsAddress ul li{
    	width: 100%;
    	height: auto;
    	padding: 15px 15px;
    	background-color: #fff;
    	justify-content: space-between;
    }
    .myheadReturn-GoodsAddress ul li:not(:last-child){
    	border-bottom: 1px solid #f9f9f9;
    }
    .myheadReturn-GoodsAddress ul li p:nth-of-type(1)>span{
    	margin-right: 5px;
    }
    .myheadReturn-GoodsAddress ul li p:nth-of-type(1)>span:nth-of-type(1){
    	font-size: 20px;
    	font-weight: bold;
    	color: #333;
    }
    .myheadReturn-GoodsAddress ul li p:nth-of-type(1)>span:nth-of-type(2){
    	font-size: 14px;
    	color: #666;
    }
    .myheadReturn-GoodsAddress ul li p:nth-of-type(1)>span:nth-of-type(3){
    	font-size: 14px;
    	color: #666;
    }
    .myheadReturn-GoodsAddress ul li p:nth-of-type(2){
    	font-size: 14px;
    	color: #333;
    	line-height: 26px;
    }
     
     
    /*操作时  需要改变的样式*/
    /*1.显示隐藏的优惠信息*/
	.MyshowYouhui{
	   height: auto !important;   
	}
</style>

