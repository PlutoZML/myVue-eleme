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
				<router-link to="/mine-discount" class="select-discout">
					<span class="mine-discount-dian">红包</span>
					<span class="mine-discount-count">0</span>
				</router-link>
				<router-link to="/mine-shop">
					<span class="mine-discount-dian">店铺红包</span>
					<span class="mine-discount-count">4</span>
				</router-link>
			</div>
			<div class="mine-discount-redpack">
				<div class="mine-discount-redpack-none">
					<img src="../../../assets/discount.gif"/>
					<p>没有红包</p>
					<p>快去抢几个吧</p>
				</div>
			</div>
			<div class="mine-discount-history">
				<a href="javascript:;">查看历史红包</a>
				<span>|</span>
				<a href="javascript:;">红包说明</a>
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
/*红包与店铺红包  共有样式*/
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

/*红包样式*/
.mine-discount-redpack{
	width: 100%;
	height: auto;
	padding-top: 59px;
}
.mine-discount-redpack-none{
	width: 100%;
	height: auto;
	text-align: center;
	margin-top: 50px;
}
.mine-discount-redpack-none img{
	width: 60%;
}
.mine-discount-redpack-none>p:nth-of-type(1){
	color: #6a6a6a;
	font-size: 22px;
	margin-top: 20px;
	font-weight: 200;
}
.mine-discount-redpack-none>p:nth-of-type(2){
	color: #999;
	font-size: 14px;
	margin-top: 10px;
}
.mine-discount-history{
	width: 100%;
	height: auto;
	padding: 30px 20px;
	display: flex;
	align-items: center;
	font-size: 13px;
	color: #999;
	justify-content: center;
}
.mine-discount-history a{
	color: #999;
}
.mine-discount-history span{
	margin: 0px 10px;
}
</style>