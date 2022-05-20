<template>
	<view class="person">
		 <view :class="user.sex==='女'?'bc_female':'bc_male'" class="msg_a">
			 <img :src="user.head_path?user.head_path:'static/img/sPerson.png'" class="head">
			 <img src="static/img/isShop.png" class="isShop" v-show="user.role">
			 <view class="person_info">
			 	<p>手机号:{{user.phone}}</p>
				<p>用户名:{{user.user_name}}</p>
			 </view>
			 <h3 @click=gotoLogin v-if="!user.phone">登录|注册</h3>
		 </view>
		 <view class="msg_b">
		 	<view class="markInfo">
		 		<p class="title">已打卡商店</p>
				<p class="count">5家</p>
		 	</view>
			<view class="currentInfo">
				<p class="title">附近商店</p>
				<p class="count">12家</p>
			</view>
		 </view>
		 <view class="msg_c">
		 	<view class="mag_ba">
				<p>个人信息</p>
		 		<img src="static/img/enter.png">
		 	</view>
			<view class="mag_ba">
				<p>注册商家</p>
				<img src="static/img/enter.png">
			</view>
		 </view>
		 <button class="logout" v-if="user.phone" @click="logout">退出登录</button>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState(['user'])
		},
		methods:{
			gotoLogin(){
				uni.reLaunch({
					url: '/pages/login/login'
				});
			},
			logout(){
				uni.showModal({
					title: '提示',
					content: '确定要退出吗？',
					success: (res)=> {
						if (res.confirm) {
							uni.removeStorageSync('loginUser')
							this.$store.commit("REMOVE_USER")
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style scoped lang="less">
	page{
		width: 750rpx;
		height: 100%;
		background-color: #f2f2f2;
		.person{
			width: 100%;
			height: 100%;
			.bc_male{
				background-image:linear-gradient(#bbb,#ddd,) ;
			}
			.bc_female{
				background-image:linear-gradient(#aaaaff,#ffaaff) ;
			}
			.msg_a{
				width: 100%;
				height: 120px;
				display: flex;
				.head{
					height: 80px;
					width: 80px;
					border-radius: 40px;
					background-color: #f2f2f2;
					margin-top: 20px;
					margin-left: 20px;
				}
				.isShop{
					height: 20px;
					width: 20px;
					position: absolute;
					top: 18px;
					left: 75px;
				}
				.person_info{
					margin-top: 30px;
					margin-left: 15px;
					height: 100%;
					width: 45%;
					line-height: 30px;
					font-size: 0.9rem;
					font-weight: bold;
				}
				h3{
					font-size: 1.1rem;
					line-height: 120px;
					color: #1296db;
				}
			}
			.msg_b{
				width: 100%;
				height: 80px;
				display: flex;
				border-bottom: 1px solid #ccc;
				.markInfo{
					width: 50%;
					text-align: center;
					border-right: 1px solid #ccc;
					.title{
						font-size: 1rem;
						margin-top: 20px;
					}
					.count{
						font-size: 1.2rem;
						font-weight: bold;
						color: #1296db;
					}
				}
				.currentInfo{
					width: 50%;
					text-align: center;
					.title{
						font-size: 1rem;
						margin-top: 20px;
					}
					.count{
						font-size: 1.2rem;
						font-weight: bold;
						color: #ccc;
					}
				}
			}
			.msg_c{
				width: 100%;
				padding-right: 10px;
				padding-left: 10px;
				box-sizing: border-box;
				.mag_ba{
					width: 100%;
					height: 50px;
					display: flex;
					margin-top: 2px;
					border-bottom: 1px solid #ccc;
					p{
						line-height: 50px;
						font-size: 1.1rem;
						margin-left: 10px;
					}
					img{
						height: 30px;
						width: 30px;
						margin-top: 10px;
						position: absolute;
						right: 10px;
					}
				}
			}
			.logout{
				position: absolute;
				bottom: 50px;
				left: 5%;
				width: 90%;
				height: 40px;
				line-height: 40px;
				color: #fff;
				background-color: #ff5500
			}
		}
	}
</style>