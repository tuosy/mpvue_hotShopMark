<template>
<view class="login">
	<img src="static/img/back.png" class="back" @click="back">
	<view class="login_logo">
		<img src="static/img/login_logo.jpg">
	</view>
	<view class="login_info">
		<view class="account">
			<h1>手机号</h1>
			<input type="text" placeholder="请输入手机号" v-model="phone">
		</view>
		<view class="account">
			<h1>密码</h1>
			<input type="password" placeholder="请输入密码" v-model="password">
		</view>
		<button class="loginBtn" @click="login">登录</button>
		<!-- <uni-popup ref="popup" type="message">
			<uni-popup-message type="error" :message="alterMessage" :duration="2000"></uni-popup-message>
		</uni-popup> -->
	</view>
</view>	
</template>

<script>
	export default{
		name:"login",
		data(){
			return{
				phone:"",
				password:'',
				alterMessage:''
			}
		},
		computed:{
			rightPhone(){
				return /^1\d{10}$/.test(this.phone)
			}
		},
		methods:{
			back(){
				uni.switchTab({
					url: '/pages/person/person'
				});
			},
			openMessage(message){
				uni.showToast({
					title: message,
					duration: 1500,
					icon:"error",
					position:"center"
				});
			},
			login(){
				const {phone,password} = this
				if(!phone){
					this.openMessage("手机号不能为空！")
				}else if(!password){
					this.openMessage("密码不能为空！")
				}else if(!this.rightPhone){
					this.openMessage("输入的手机号错误！")
				}
			}
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.login{
		width: 750rpx;
		height: 100%;
		background-color: #f2f2f2
	}
	.back{
		height: 25px;
		width: 25px;
		position: fixed;
		top: 8px;
		left: 5px;
		z-index: 1000;
	}
	.login_logo{
		width: 100%;
		height: 200px;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.login_info{
		margin-top: 20px;
		width: 100%;
	}
	.account{
		height: 50px;
		width: 100%;
		background-color: #fff;
		display: flex;
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	h1{
		font-size: 1rem;
		font-weight: 400;
		line-height: 50px;
		text-align: center;
	}
		
	input{
		height: 100%;
		width: 85%;
		text-align: right;
	}
	.loginBtn{
		width: 80%;
		height: 50px;
		border: none;
		color: #fff;
		background-color: #1296db;
		margin-top: 50px;
	}
	
	
</style>