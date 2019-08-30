<template>
	<div class="mine-info">
		<div class="myheadReturn">
			<div class="myhead-return">
				<div class="myreturn-left">
					<router-link to="/mine" class="a-box">
						<img src="../../../assets/fanhui.png"/>
					</router-link>
				</div>
				<span class="myhead-return-title">我的信息</span>
			</div>
		</div>
		<div class="mine-info-con">
			<div class="mine-info-photo">
				<div class="mine-info-photo-1 mine-info-num">
					<a href="javascript:;" class="a-box">
					    <div class="mine-info-text">
					    	头像
					    </div>
					    <div class="mine-info-textShow">
					    	<div class="mine-info-textShow-pic">
					    		<img src="../../../assets/myphoto.png"/>
					    	</div>
					    	<span><img src="../../../assets/info-right.png"/></span>
					    </div>
					</a>
				</div>
				<div class="mine-info-photo-2 mine-info-num">
					<a href="javascript:;" class="a-box">
					    <div class="mine-info-text">
					    	用户名
					    </div>
					    <div class="mine-info-textShow">
					    	<div class="mine-info-textShow-pic-text">		    		
        							2dda9450090					    	
					    	</div>
					    	<span><img src="../../../assets/info-right.png"/></span>
					    </div>
					</a>
				</div>
			</div>
			<p>账号绑定</p>
			<div class="mine-info-phone mine-info-num">
				<a href="javascript:;" class="a-box">
				    <div class="mine-info-text">
				    	<img src="../../../assets/info-phone.png"/>手机
				    </div>
				    <div class="mine-info-textShow">
				    	<div class="mine-info-textShow-pic-text">		    		
    							157****4498					    	
				    	</div>
				    	<span><img src="../../../assets/info-right.png"/></span>
				    </div>
				</a>
			</div>
			<p>安全设置</p>
			<div class="mine-info-pwd mine-info-num">
				<a href="javascript:;" class="a-box">
				    <div class="mine-info-text">
				    	登录密码
				    </div>
				    <div class="mine-info-textShow">
				    	<div class="mine-info-textShow-pic-text blue-color">		    		
    							未设置				    	
				    	</div>
				    	<span><img src="../../../assets/info-right.png"/></span>
				    </div>
				</a>
			</div>
			<div class="mine-info-sign">
				<a href="javascript:;" class="a-box">
					退出登录
				</a>
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
.mine-info{
	width: 100%;
	height: auto;
}
.mine-info-con{
	width: 100%;
	height: auto;
}
.mine-info-num{
	width: 100%;
	height: auto;
	background-color: #fff;	
}
.mine-info-num a{
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.mine-info-text{
	height: 100%;
	font-weight: bold;
	color: #333;
	font-size: 22px;
	display: flex;
	align-items: center;
}
.mine-info-text img{
	margin-right: 8px;
}
.mine-info-textShow{
	display: flex;
	align-items: center;
}
.mine-info-textShow span{
	display: flex;
	align-items: center;
}
.mine-info-textShow-pic{
	width: 78px;
	height: auto;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 10px;
}
.mine-info-textShow-pic-text{
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 10px;
	font-size: 20px;
	/*font-weight: bold;*/
	color: #666;
}
.blue-color{
	color: #0099FF;
}
.mine-info-textShow-pic img{
	width: 100%;
	
}
.mine-info-con>p{
	padding: 10px;
	margin-top: 10px;
	color: #999;
}
.mine-info-sign{
	margin-top: 30px;
	font-size: 22px;
	font-weight: bold;
	text-align: center;
}
.mine-info-sign a{
	text-align: center;
	background-color: #fff;
	padding: 20px;
	color: #ff5339;
}
</style>