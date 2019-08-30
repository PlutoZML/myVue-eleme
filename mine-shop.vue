<template>
	<div class="mine-discount">
		<div class="myheadReturn">
			<div class="myhead-return">
				<div class="myreturn-left">
					<router-link to="/mine" class="a-box">
						<img src="../../../assets/fanhui.png"/>
					</router-link>
				</div>
				<span class="myhead-return-title">我的优惠</span>
			</div>
		</div>	
		<div class="mine-discount-con">
			<div class="mine-discount-title">
				<router-link to="/mine-discount" >
					<span class="mine-discount-dian">红包</span>
					<span class="mine-discount-count">0</span>
				</router-link>
				<router-link to="/mine-shop" class="select-discout">
					<span class="mine-discount-dian">店铺红包</span>
					<span class="mine-discount-count">4</span>
				</router-link>
			</div>
			
			<!--店铺红包-->
			<div class="mine-shopRedPack">
				<div class="mine-shopRedPack-con">
					<div class="mine-shopRedPack-num">
						<div class="mine-shopRedPack-num-money">
							<span>￥</span><span>5</span>
						</div>
						<div class="mine-shopRedPack-num-purpose">
							<h4><span>品质联盟专享红包</span></h4>
							<ul>
								<li>2019-08-14至2019-08-15</li>
								<li>满30元可用</li>
								<li>限合肥市使用</li>
								<li>仅限品质联盟会场使用</li>
								<li>限在线支付使用</li>
								<li>限收货手机号为15755254498</li>
								<li>限支付宝美食节商家可用</li>
							</ul>
						</div>
						<div class="mine-shopRedPack-num-use">
							<a href="javascript:;">进店使用</a>
						</div>
					</div>
					<div class="mine-shopRedPack-num">
						<div class="mine-shopRedPack-num-money">
							<span>￥</span><span>5</span>
						</div>
						<div class="mine-shopRedPack-num-purpose">
							<h4><span>品质联盟专享红包</span></h4>
							<ul>
								<li>2019-08-14至2019-08-15</li>
								<li>满30元可用</li>
								<li>限合肥市使用</li>
								<li>仅限品质联盟会场使用</li>
								<li>限在线支付使用</li>
								<li>限收货手机号为15755254498</li>
								<li>限支付宝美食节商家可用</li>
							</ul>
						</div>
						<div class="mine-shopRedPack-num-use">
							<a href="javascript:;">进店使用</a>
						</div>
					</div>
					<div class="mine-shopRedPack-num">
						<div class="mine-shopRedPack-num-money">
							<span>￥</span><span>5</span>
						</div>
						<div class="mine-shopRedPack-num-purpose">
							<h4><span>品质联盟专享红包</span></h4>
							<ul>
								<li>2019-08-14至2019-08-15</li>
								<li>满30元可用</li>
								<li>限合肥市使用</li>
								<li>仅限品质联盟会场使用</li>
								<li>限在线支付使用</li>
								<li>限收货手机号为15755254498</li>
								<li>限支付宝美食节商家可用</li>
							</ul>
						</div>
						<div class="mine-shopRedPack-num-use">
							<a href="javascript:;">进店使用</a>
						</div>
					</div>
					<div class="mine-shopRedPack-num">
						<div class="mine-shopRedPack-num-money">
							<span>￥</span><span>5</span>
						</div>
						<div class="mine-shopRedPack-num-purpose">
							<h4><span>品质联盟专享红包</span></h4>
							<ul>
								<li>2019-08-14至2019-08-15</li>
								<li>满30元可用</li>
								<li>限合肥市使用</li>
								<li>仅限品质联盟会场使用</li>
								<li>限在线支付使用</li>
								<li>限收货手机号为15755254498</li>
								<li>限支付宝美食节商家可用</li>
							</ul>
						</div>
						<div class="mine-shopRedPack-num-use">
							<a href="javascript:;">进店使用</a>
						</div>
					</div>
				</div>
				<div class="mine-shopRedPack-more">
				    <p><a href="">更多好券，去领券中心看看</a></p>
				    <p><a href="">店铺红包说明</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	
/*红包与店铺红包   共有样式*/
.mine-discount{
	width: 100%;
	height: auto;
}
.mine-discount-con{
	width: 100%;
	height: auto;
}
.mine-discount-title{
	width: 100%;
	height: auto;
	background: linear-gradient(to right, #00aaff, #0085ff);
	border-top:1px solid #2791fe;
	display: flex;
	position: fixed;
	top: 59px;
	z-index: 999;
}
.mine-discount-title a{
	display: block;
	flex: 1;
	text-align: center;
	padding: 15px;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	opacity: 0.7;
}
.mine-discount-count{
	font-size: 12px;
	display: block;
	height: 100%;
	margin-left: 5px;
}

.mine-discount-title .select-discout span:nth-of-type(1){
	border-bottom: 2px solid #fff;
	
}

/*店铺红包*/
.mine-shopRedPack{
	width: 100%;
	height: auto;
	padding: 0px 12px;
	padding-top: 59px;
}
.mine-shopRedPack-con{
	width: 100%;
	height: auto;
}
.mine-shopRedPack-num{
	width: 100%;
	height: auto;
	background-color: #fff;
	box-shadow: rgba(0,0,0,0.1) 0px 0px 5px 0px;
	display: flex;
	margin-top: 12px;
	padding: 20px 0px;
}
.mine-shopRedPack-num-money{
	width: 25%;
	height: auto;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ef4661;
	font-weight: bold;
	font-size: 20px;
}
.mine-shopRedPack-num-money span:nth-of-type(2){
	font-size: 40px;
}
.mine-shopRedPack-num-purpose{
	width: 50%;
	height: auto;
}
.mine-shopRedPack-num-purpose h4{
	font-size: 20px;
	color: #333;
}
.mine-shopRedPack-num-purpose ul li{
	color: #999;
	font-size: 14px;
	position: relative;
	padding-left: 10px;
}
.mine-shopRedPack-num-purpose ul li:before{
    content: "";
    width: 2px;
    height: 2px;
    background-color: #666;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
    font-size: 18px;
    
}
.mine-shopRedPack-num-use{
	width: 25%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}
.mine-shopRedPack-num-use a{
	display: block;
	width: 68px;
	height: 27px;
	color: #fff;
	background-color: #ff0025;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	font-weight: bold;
	border-radius: 20px;
}
.mine-shopRedPack-more{
	width: 100%;
	height: auto;
	padding: 20px 10px;
	text-align: center;
}
.mine-shopRedPack-more p:nth-of-type(1)>a{
	display: block;
	width: 264px;
	height: 44px;
	border: 1px solid #ebebeb;
	background-color: #FFF;
	border-radius: 5px;
	margin: auto;
	text-align: center;
	line-height: 44px;
	font-size: 14px;
}
.mine-shopRedPack-more p:nth-of-type(2)>a{
	text-align: center;
	font-size: 14px;
	color: #999;
	line-height: 60px;
}
</style>