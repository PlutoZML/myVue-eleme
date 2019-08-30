<template>
	<div class="addAddress">
		<!--固定  带有返回的头部-->
		<div class="myheadReturn">
			<div class="myhead-return">
				<div class="myreturn-left">
					<router-link to="/mine-address" class="a-box">
						<img src="../../../assets/fanhui.png"/>
					</router-link>
				</div>
				<span class="myhead-return-title">添加地址</span>
			</div>
		</div>
		<div class="addAddress-con">
			<div class="formblock myusername">
				<div class="formblock-input">
					<div class="formblock-label">联系人</div>
					<div class="formblock-box usernameBox">
						<input type="text" placeholder="姓名" class="username" v-model="myinfo.myName" v-focus />
					</div>
				</div>
				<div class="formblock-input">
					<div class="formblock-label"></div>
					<div class="formblock-box">
						<span class="formblock-box-span" :class="mychoose1==1?'checked':''" @click="choseSex(1)">先生</span>
						<span class="formblock-box-span" :class="mychoose1==2?'checked':''" @click="choseSex(2)">女士</span>
					</div>
				</div>
			</div>
			<div class="formblock">
				<div class="formblock-input">
					<div class="formblock-label">电话</div>
					<div class="formblock-box">
						<input type="text" placeholder="手机号码" class="userphone" v-model="myinfo.myPhone" />
					</div>
				</div>
			</div>
			<div class="formblock">
				<div class="formblock-input">
					<div class="formblock-label">地址</div>
					<div class="formblock-box">
						<input type="text" placeholder="小区/写字楼/学校等" class="useraddress" v-model="myinfo.myAddress" />
					</div>
				</div>
				<div class="formblock-input">
					<div class="formblock-label">门牌号</div>
					<div class="formblock-box">
						<input type="text" placeholder="9号楼9层楼909室999" class="userdoor" v-model="myinfo.myMp" />
					</div>
				</div>
			</div>
			<div class="formblock">
				<div class="formblock-input">
					<div class="formblock-label">标签</div>
					<div class="formblock-box">
						<span class="formblock-box-span" :class="{'checked':mychoose2==1}" @click="choseTags(1)">家</span>
						<span class="formblock-box-span" :class="{'checked':mychoose2==2}" @click="choseTags(2)">公司</span>
						<span class="formblock-box-span" :class="{'checked':mychoose2==3}" @click="choseTags(3)">学校</span>
					</div>
				</div>
			</div>
		</div>
		<div class="addAddress-button">
			<button class="form-btn" @click="myAdd">确定</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:'addAddress',
		data(){
			return{
				mychoose1:0,
				mychoose2:0,
				myinfo:{
					myName:'',
					myCall:'',
					myPhone:'',
					myAddress:'',
					myMp:'',
					myPlace:'',
				},
			}
		},
		methods:{
			
			choseSex(num){
				if(num==1){
					this.myinfo.myCall = '先生';
					this.mychoose1 = num;
				}
				if(num==2){
					this.myinfo.myCall = '女士';
				    this.mychoose1 = num;
				}
			},
			choseTags(num){
				if(num==1){
					this.myinfo.myPlace = "家";
					this.mychoose2 = num;
				}
				if(num==2){
					this.myinfo.myPlace = "公司";
					this.mychoose2 = num;
				}
				if(num==3){
					this.myinfo.myPlace = "学校";
					this.mychoose2 = num;
				}
			},
			
			myAdd(){
				if(this.myinfo.myName == ""||this.myinfo.myCall==""||this.myinfo.myPhone==""||this.myAddress==""||this.myinfo.myPlace==""){
					this.$toast({
						message:'有信息未填写',
						position:'bottom',
					});
				}else{
					console.log(this.myinfo);
					this.$store.commit('addAddress',this.myinfo);  //获取Vuex的增加数据的方法
					this.$router.push({path:'/mine-address'});    //跳转页面
				}
				
				
			},
		}
	}
</script>

<style scoped>
.addAddress{
	width: 100%;
	height: auto;
}
.addAddress-con{
	width: 100%;
	height: auto;
	background-color: #fff;
}
.formblock{
	width: 100%;
	height: auto;
	border-bottom: 1px solid #f9f9f9;
}
.formblock-input{
	display: flex;
	align-items: center;
}
.formblock-label{
	width: 100px;
	font-weight: bold;
	font-size: 20px;
	color: #333;
	padding: 20px 20px 20px 15px;
}
.formblock-box{
	display: flex;
	align-items: center;
	flex: 1;
	padding: 20px 15px 20px 0;
}
.formblock-box input{
	height: 100%;
	width: 100%;
	font-size: 18px;
	color: #333;
}
.username{
	
}
.formblock-box input::-webkit-input-placeholder{
	color: #ccc;
}
.myusername .usernameBox{
	border-bottom: 1px solid #f9f9f9;
}
.formblock-box-span{
	width: 90px;
	height: 38px;
	border: 1px solid #eee;
	text-align: center;
	line-height: 38px;
	color: #333;
	border-radius: 5px;
	margin-right: 10px;
}
.addAddress-button{
	width: 100%;
	height: auto;
	padding: 30px 15px;
}
.form-btn{
	width: 100%;
	height: 100%;
	padding: 15px 0px;
	background-color: #00D762;
	color: #fff;
	font-size: 22px;
	font-weight: bold;
	outline: none;
}


.checked{
	background-color: #eef7ff;
	color: #2395ff;
	border: 1px solid rgba(35,149,255,.18);
}

</style>