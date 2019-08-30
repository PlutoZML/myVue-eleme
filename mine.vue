<template>
	<div class="myapp">
		<div class="myCenter">
			<div class="mymine">
				<div class="mymine-myself clearfix">
					<router-link to="/mine-info" class="a-box clearfix">
						<div class="mymine-myself-pic">
							<img src="../../assets/myphoto.png" />
						</div>
						<div class="mymine-myself-info">
							<p><span>2dda9450090</span></p>
							<p><span><img src="../../assets/phone.png"/></span><span>157****4498</span></p>
						</div>
						<div class="mymine-myself-ico">
							<img src="../../assets/mine-right.png" />
						</div>
					</router-link>
				</div>
				<div class="mymine-redpack">
					<div class="mymine-redpack-num  mymine-redpack-num1">
						<router-link to="/mine-discount" class="a-box clearfix">
							<p><span>0</span>个</p>
							<p>红包</p>
						</router-link>
					</div>
					<div class="mymine-redpack-num mymine-redpack-num2">
						<router-link to="/mine-coin" class="a-box clearfix">
							<p><span>0</span>个</p>
							<p>金币</p>
						</router-link>
					</div>
				</div>
				<div class="mymine-other">
					<div class="mymine-other-num">
						<ul>
							<li>
								<router-link to="/mine-address" class="a-box">
									<a href="javascript:;">
										<span class="mymine-other-num-ico"><img src="../../assets/mine-address.png"/></span>
										<span>我的地址</span>
									</a>
									<a href="javascript:;"><img src="../../assets/order-right.png"/></a>
								</router-link>
							</li>
						</ul>
					</div>
					<div class="mymine-other-num">
						<ul>
							<li>
								<router-link to="" class="a-box">
									<a href="javascript:;">
										<span class="mymine-other-num-ico"><img src="../../assets/mine-sc.png"/></span>
										<span>金币商城</span>
									</a>
									<a href="javascript:;"><img src="../../assets/order-right.png"/></a>
								</router-link>
							</li>
							<li>
								<router-link to="" class="a-box">
									<a href="javascript:;">
										<span class="mymine-other-num-ico"><img src="../../assets/mine-lw.png"/></span>
										<span>分享拿20现金</span>
									</a>
									<a href="javascript:;"><img src="../../assets/order-right.png"/></a>
								</router-link>
							</li>
						</ul>
					</div>
					<div class="mymine-other-num">
						<ul>
							<li>
								<router-link to="" class="a-box">
									<a href="javascript:;">
										<span class="mymine-other-num-ico"><img src="../../assets/mine-kf.png"/></span>
										<span>联系客服</span>
									</a>
									<a href="javascript:;"><img src="../../assets/order-right.png"/></a>
								</router-link>
							</li>
							<li>
								<router-link to="" class="a-box">
									<a href="javascript:;">
										<span class="mymine-other-num-ico"><img src="../../assets/mine-xz.png"/></span>
										<span>下载饱了么APP</span>
									</a>
									<a href="javascript:;"><img src="../../assets/order-right.png"/></a>
								</router-link>
							</li>
							<li>
								<router-link to="" class="a-box">
									<a href="javascript:;">
										<span class="mymine-other-num-ico"><img src="../../assets/mine-gz.png"/></span>
										<span>规则中心</span>
									</a>
									<a href="javascript:;"><img src="../../assets/order-right.png"/></a>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="mymine-privacy">
					<router-link to="">隐私政策</router-link>
				</div>
			</div>
		</div>
		<div class="myFooter">
			<ul>
				<li>
					<router-link to="/myBLM">
						<p><img src="../../assets/eleme-index1.png" /></p>
						<p>首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<p><img src="../../assets/eleme-find1.png" /></p>
						<p>发现</p>
					</router-link>
				</li>
				<li>
					<router-link to="/order">
						<p><img src="../../assets/eleme-order1.png" /></p>
						<p>订单</p>
					</router-link>
				</li>
				<li>
					<router-link to="/mine" v-menucolor="'#0086ff'">
						<p><img src="../../assets/eleme-my2.png" /></p>
						<p>我的</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'find',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.mymine {
		width: 100%;
		height: auto;
		position: relative;
	}
	
	.mymine-myself {
		width: 100%;
		height: auto;
		background: linear-gradient(to right, #00aaff, #0085ff);
		padding: 30px 20px;
		/*display: flex;
 	align-items: center;*/
	}
	
	.mymine-myself-pic {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		float: left;
	}
	
	.mymine-myself-pic img {
		width: 100%;
	}
	
	.mymine-myself-info {
		display: inline-block;
		margin-left: 22px;
		float: left;
		height: 70px;
	}
	
	.mymine-myself-info>p {
		line-height: 37px;
	}
	
	.mymine-myself-info>p:nth-of-type(1) {
		font-weight: bold;
		font-size: 30px;
		color: #fff;
	}
	
	.mymine-myself-info>p:nth-of-type(2) {
		color: #fff;
		font-size: 14px;
		display: flex;
		align-items: center;
	}
	.mymine-myself-info>p:nth-of-type(2)>span{
		display: flex;
		align-items: center;
	}
	
	.mymine-myself-ico {
		float: right;
		display: flex;
		align-items: center;
		height: 70px;
	}
	
	.mymine-redpack {
		width: 100%;
		height: auto;
		background-color: #fff;
		display: flex;
	}
	
	.mymine-redpack-num {
		width: 50%;
		height: auto;
		text-align: center;
		padding: 20px 30px;
	}
	
	.mymine-redpack-num:nth-of-type(1) {
		border-right: 1px solid #f4f4f4;
	}
	
	.mymine-redpack-num p {
		font-size: 16px;
		color: #666;
	}
	
	.mymine-redpack-num p span {
		font-size: 40px;
		font-weight: bold;
	}
	
	.mymine-redpack-num1 p:nth-of-type(1) {
		color: red;
	}
	
	.mymine-redpack-num2 p:nth-of-type(1) {
		color: green;
	}
	
	.mymine-other {
		width: 100%;
		height: auto;
	}
	.mymine-other-num{
		width: 100%;
		height: auto;
		margin-top: 15px;
	}
	.mymine-other ul{
		
	}
	.mymine-other ul li{
		width: 100%;
		height: auto;
	}
	.mymine-other ul li:not(:last-child){
		border-bottom: 1px solid #F9F9F9;
	}
	.mymine-other ul li>a{
		width: 100%;
		height: auto;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		padding: 14px 10px;
		align-items: center;
	}
	.mymine-other a{
		color: #333;
	}
	.mymine-other ul li>a>a{
		display: flex;
		align-items: center;
	}
	.mymine-other ul li>a>a span{
		font-size: 18px;
		margin-right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.mymine-other-num-ico{
		display: block;
		width: 25px;
		height: 25px;
	}
	.mymine-other-num-ico img{
		width: 90%;
	}
	.mymine-privacy{
		width: 100%;
		height: auto;
		text-align: center;
		padding: 28px 0px;
		color: #4da6f0;
	}
	.mymine-privacy a{
		color: #4da6f0;
		font-size: 18px;
	}
</style>