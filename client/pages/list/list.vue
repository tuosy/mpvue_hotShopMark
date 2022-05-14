<template>
	<view class="list">
		<view class="search">
			<input type="text" placeholder="输入商店名" v-model="keyword">
			<button class="btn" @click="search">搜索</button>
		</view>
		<view class="space">
		</view>
		<ul class="mark_list">
			<li>
				 <img src="static/img/login_logo.jpg">
				  <view class="shopInfo">
					<p class="msg_a">商店名商店名商店名商店名商店名</p>
					<p class="msg_b">打卡日期</p>
					<p class="msg_c">打卡地店</p>
				  </view>
			</li>
			<li>
				 <img src="static/img/login_logo.jpg">
				  <view class="shopInfo">
					<p class="msg_a">商店名商店名商店名商店名商店名</p>
					<p class="msg_b">打卡日期</p>
					<p class="msg_c">打卡地店</p>
				  </view>
			</li>
			<li>
				 <img src="static/img/login_logo.jpg">
				  <view class="shopInfo">
					<p class="msg_a">商店名商店名商店名商店名商店名</p>
					<p class="msg_b">打卡日期</p>
					<p class="msg_c">打卡地店</p>
				  </view>
			</li>
			<li>
				 <img src="static/img/login_logo.jpg">
				  <view class="shopInfo">
					<p class="msg_a">商店名商店名商店名商店名商店名</p>
					<p class="msg_b">打卡日期</p>
					<p class="msg_c">打卡地店</p>
				  </view>
			</li>
			<li>
				 <img src="static/img/login_logo.jpg">
				  <view class="shopInfo">
					<p class="msg_a">商店名商店名商店名商店名商店名</p>
					<p class="msg_b">打卡日期</p>
					<p class="msg_c">打卡地店</p>
				  </view>
			</li>
			<li>
				 <img src="static/img/login_logo.jpg">
				  <view class="shopInfo">
					<p class="msg_a">商店名商店名商店名商店名商店名</p>
					<p class="msg_b">打卡日期</p>
					<p class="msg_c">打卡地店</p>
				  </view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default{
		name:"list",
		data(){
			return{
				keyword:"",
			}
		},
		methods:{
			search(){
				if(!this.keyword){
					uni.showToast({
						title: '商店名不能为空',
						duration: 1000,
						icon:"error",
						position:"center"
					});
				}
			}
		}
	}
</script>

<style scoped lang="less">
	page{
		width: 750rpx;
		height: 100%;
		background-color: #f2f2f2;
		.list{
			width: 100%;
			height: 100%;
			overflow: hidden;
			.search{
				width: 100%;
				height: 40px;
				margin-top: 20px;
				display: flex;
				margin-bottom: 5px;
				padding-left: 15px;
				padding-right: 15px;
				box-sizing: border-box;
				input{
					width: 80%;
					height: 40px;
					line-height: 50px;
					border: 1px solid #ccc;
					border-top-left-radius: 5px;
					border-bottom-left-radius: 5px;
					padding-left: 10px;
					box-sizing: border-box;
					border-right: none;
				}
				.btn{
					height: 40px;
					width: 20%;
					text-align: center;
					line-height: 40px;
					background-color: #1296db;
					color: #fff;
					box-sizing: border-box;
					border: none;
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
					border-top-left-radius: 0px;
					border-bottom-left-radius: 0px;
				}
			}
			.space{
				width: 100%;
				height: 1px;
				background-color: #ddd;
			}
			.mark_list{
				width: 100%;
				height: 89%;
				padding-left: 15px;
				padding-right: 15px;
				box-sizing: border-box;
				overflow: scroll;
				scrollbar:none;
				li{
					width: 100%;
					height: 80px;
					list-style-type: none;
					margin-top: 10px;
					border-bottom: 1px solid #eee;
					display: flex;
					img{
						height: 75px;
						width: 75px;
						border-radius: 5px;
					}
					.shopInfo{
						height: 100%;
						width: 70%;
						margin-left: 20px;
						line-height: 25px;
						.msg_a{
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							font-size: 1.2rem;
							font-weight: bold;
						}
						.msg_b,.msg_c{
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							color: #aaa;
						}
					}
				}
			}
		}
	}
</style>