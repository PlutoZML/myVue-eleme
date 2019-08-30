<template>
   <div class="mine-coin">
	   	<div class="myheadReturn">
	   		<div class="myhead-return">
				<div class="myreturn-left">
					<router-link to="/mine" class="a-box">
						<img src="../../../assets/fanhui.png"/>
					</router-link>
				</div>
				<span class="myhead-return-title">我的金币</span>
			</div>
		</div>
		<div class="mine-coin-con">
			<div class="mine-coin-head">
				<div class="mine-coin-head-text">
					<p>
						<a href="">
							<span>50</span>
							<span><img src="../../../assets/mine-right.png"/></span>
						</a>
					</p>
					<p>
						<a href="">
							<span>当前金币</span>
							<span><img src="../../../assets/coin-mark.png"/></span>
						</a>
					</p>
				</div>
			</div>
			<div class="mine-coin-comm">
				<div class="mine-coin-comm-title">
					<p>兑换商品</p>
					<p>好物随心换</p>
				</div>
				<div class="mine-coin-comm-con clearfix">
					<div class="mine-coin-comm-num">
						<a href="" class="a-box">
							<div class="mine-coin-comm-num-head">
								<p>3元品质联盟红包</p>
								<p>
									<span>90</span>
									<span>金币</span>
									<span>限时优惠</span>
								</p>
							</div>
							<div class="mine-coin-comm-num-pic">
								<img src="../../../assets/find-pic2.png"/>
							</div>
						</a>
					</div>
					<div class="mine-coin-comm-num">
						<a href="" class="a-box">
							<div class="mine-coin-comm-num-head">
								<p>3元品质联盟红包</p>
								<p>
									<span>90</span>
									<span>金币</span>
									<span>限时优惠</span>
								</p>
							</div>
							<div class="mine-coin-comm-num-pic">
								<img src="../../../assets/find-pic3.png"/>
							</div>
						</a>
					</div>
					<div class="mine-coin-comm-num">
						<a href="" class="a-box">
							<div class="mine-coin-comm-num-head">
								<p>3元品质联盟红包</p>
								<p>
									<span>90</span>
									<span>金币</span>
									<span>限时优惠</span>
								</p>
							</div>
							<div class="mine-coin-comm-num-pic">
								<img src="../../../assets/find-pic4.png"/>
							</div>
						</a>
					</div>
					<div class="mine-coin-comm-num">
						<a href="" class="a-box">
							<div class="mine-coin-comm-num-head">
								<p>3元品质联盟红包</p>
								<p>
									<span>90</span>
									<span>金币</span>
									<span>限时优惠</span>
								</p>
							</div>
							<div class="mine-coin-comm-num-pic">
								<img src="../../../assets/find-pic5.png"/>
							</div>
						</a>
					</div>
					<div class="mine-coin-comm-num">
						<a href="" class="a-box">
							<div class="mine-coin-comm-num-head">
								<p>3元品质联盟红包</p>
								<p>
									<span>90</span>
									<span>金币</span>
									<span>限时优惠</span>
								</p>
							</div>
							<div class="mine-coin-comm-num-pic">
								<img src="../../../assets/find-pic6.png"/>
							</div>
						</a>
					</div>
					<div class="mine-coin-comm-num">
						<a href="" class="a-box">
							<div class="mine-coin-comm-num-head">
								<p>3元品质联盟红包</p>
								<p>
									<span>90</span>
									<span>金币</span>
									<span>限时优惠</span>
								</p>
							</div>
							<div class="mine-coin-comm-num-pic">
								<img src="../../../assets/find-pic7.png"/>
							</div>
						</a>
					</div>
				</div>
				<div class="myfind-recom-more myfind-recom-more-whiteBg">
					<router-link to="" class="a-box">
						 <span>查看更多</span><img src="../../../assets/order-right.png"/>
					</router-link>
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
.mine-coin{
	width: 100%;
	height: auto;
}
.mine-coin-con{
	width: 100%;
	height: auto;
}
.mine-coin-head{
	width: 100%;
	height: auto;
	background: linear-gradient(to right, #00aaff, #0085ff);
	padding: 30px 40px;
	border-top: 1px solid rgba(255,255,255,0.2);
}
.mine-coin-head-text p:nth-of-type(1) a{
	font-weight: bold;
	color: #fff;
	font-size: 55px;
}
.mine-coin-head-text p a span{
	display: flex;
	align-items: center;
	margin-right: 8px;
}
.mine-coin-head-text p a{
	display: flex;
	align-items: center;
	color: #fff;
}
.mine-coin-comm{
	width: 100%;
	height: auto;
}
.mine-coin-comm-title{
	width: 100%;
	height: auto;
	background: #FFFFFF url(../../../assets/bg1.png) no-repeat center;
	text-align: center;
	padding: 20px 0px;
}
.mine-coin-comm-title>p:nth-of-type(1){
	font-size: 20px;
	color: #333;
	font-weight: bold;
}
.mine-coin-comm-title>p:nth-of-type(2){
	font-size: 13px;
	color: #999;
}
.mine-coin-comm-con{
	width: 100%;
	height: auto;
	background-color: #fff;
}
.mine-coin-comm-num{
	width: 50%;
	height: 283px;
	float: left;
	overflow: hidden;
	padding: 10px 15px;
	border-left: 1px solid #f9f9f9;
	border-bottom: 1px solid #f9f9f9;
}
.mine-coin-comm-num-head{
	width: 100%;
	height: auto;
}
.mine-coin-comm-num-head p{
	display: flex;
	align-items: center;
}
.mine-coin-comm-num-head p:nth-of-type(1){
	font-size: 18px;
	color: #333;
	line-height: 32px;
}
.mine-coin-comm-num-head p:nth-of-type(2)>span{
	margin-right: 10px;
}
.mine-coin-comm-num-head p:nth-of-type(2)>span:nth-of-type(1){
	color: #ff5339;
	font-weight: bold;
}
.mine-coin-comm-num-head p:nth-of-type(2)>span:nth-of-type(2){
	color: #999;
	font-size: 14px;
}
.mine-coin-comm-num-head p:nth-of-type(2)>span:nth-of-type(3){
	display: block;
	width: 62px;
	height: 17px;
	background-color: #f94843;
	color: #fff;
	font-size: 12px;
	border-radius: 3px;
	text-align: center;
}
.mine-coin-comm-num-pic{
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.mine-coin-comm-num-pic img{
	width: 100%;
}
</style>