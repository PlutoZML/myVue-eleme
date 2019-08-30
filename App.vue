<template>
	<div id="myapp">
		<router-view/>
	</div>
</template>

<script>
	
	import Vue from 'vue';
    import { Swipe, SwipeItem } from 'mint-ui';  //引入轮播图
    import { IndexList, IndexSection } from 'mint-ui'; //引入索引列表
    import { Toast } from 'mint-ui'; //弹框
	
	//引入swiper轮播图
	Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    
    //引入索引列表
    Vue.component(IndexList.name, IndexList);
    Vue.component(IndexSection.name, IndexSection);
    
    
    	
	//定义一个指令 用来改变底部导航栏的文字颜色
	Vue.directive('menucolor',{
		bind(el,binding){
			el.style.color = binding.value;
		}  
	});
	
	
	//定义一个全局指令   当进入页面时，文本框获取焦点
	Vue.directive('focus',{
		inserted:function(el){
			el.focus();
		}
	});
	
	
	
	export default {
		name: 'App',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	#myapp {
		width: 100%;
		height: 100%;
		position: relative;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
	
	* {
		margin: 0px;
		padding: 0px;
		border: 0px;
	}
	
	html{
		background-color: #F5F5F5;
		font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
	}
	
	body {
		margin: 0px;
		padding: 0px;
	}
	
	li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
		color: #333;
	}
	
	div,
	span,
	p,
	ul,
	li,
	input,
	a {
		box-sizing: border-box;
		outline: none;
		-webkit-tap-highlight-color: transparent;
	}
	.a-box{
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.clearfix::before,
	.clearfix::after {
		content: "";
		height: 0;
		line-height: 0;
		display: block;
		visibility: hidden;
		clear: both;
	}
	
	.myapp {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.myCenter {
		width: 100%;
		height: auto;
	}
	
	.myblock1 {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
	}
	
	.myFooter {
		width: 100%;
		height: 60px;
		position: fixed;
		margin: auto;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: #ccc 0px 0px 10px 0px;
		background-color: #fff;
	}
	
	.myFooter ul {
		width: 100%;
		height: 100%;
		display: flex;
	}
	
	.myFooter ul li {
		display: block;
		width: 25%;
	}
	
	.myFooter ul li a {
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 8px 0px;
		font-size: 0.26666rem;
		color: #8e8e93;
	}
	
	
/*到返回按钮的头部*/
.myheadReturn{
	width: 100%;
	height: 59px;
}
.myhead-return{
	width: 100%;
	height: auto;
	background: linear-gradient(to right, #00aaff, #0085ff);
	padding: 15px 0px;
	position: fixed;
	display: flex;
	justify-content: center;
	z-index: 999;
}
.myreturn-left{
	width: 10%;
	height: 100%;
	padding: 5px;
	position: absolute;
	margin: auto;
	left: 0px;
	top: 0px;
	bottom: 0px;
}
.myreturn-left a{
	display: flex;
	justify-content: center;
	align-items: center;
}

.myhead-return-title{
	display: inline-block;
	margin: 0 auto;
	font-size: 22px;
	font-weight: bold;
	color: #fff;
	letter-spacing: 1px;
}
.myreturn-right{
	height: 100%;
	padding: 10px;
	position: absolute;
	margin: auto;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
}
.myreturn-right a{
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 18px;
}


/*查看更多*/
.myfind-recom-more{
	width: 100%;
	height: auto;
	
}
.myfind-recom-more a{
	padding: 30px 0px;
	font-size: 16px;
	color: #999;
	text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.myfind-recom-more-whiteBg{
	background-color: #fff;
}

/*个人信息--红包*/
.mine-discount-title .select-discout{
	opacity: 1 !important;
}
</style>