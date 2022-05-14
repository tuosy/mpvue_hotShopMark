<template>
	<view class="mark">
		<view class="map">
			<web-view src="/static/html/map.html" class="mapPage"></web-view>
		</view>
		<view class="main">
			<view class="info">
				<input type="text" placeholder="搜索附近网红门店">
				<button class="searchBtn">搜索</button>
			</view>
			<ul class="shopList">
				<li>
					<img src="static/img/login_logo.jpg">
					<view class="msg">
						<h2>商店名称</h2>
						<p>成都市双流区￥￥￥￥</p>
					</view>
					<button class="markBtn">去打卡</button>
				</li>
				<li>
					<img src="static/img/login_logo.jpg">
					<view class="msg">
						<h2>商店名称</h2>
						<p>成都市双流区￥￥￥￥</p>
					</view>
					<button class="markBtn">去打卡</button>
				</li>
				<li>
					<img src="static/img/login_logo.jpg">
					<view class="msg">
						<h2>商店名称</h2>
						<p>成都市双流区￥￥￥￥</p>
					</view>
					<button class="markBtn">去打卡</button>
				</li>
				<li>
					<img src="static/img/login_logo.jpg">
					<view class="msg">
						<h2>商店名称</h2>
						<p>成都市双流区￥￥￥￥</p>
					</view>
					<button class="markBtn">去打卡</button>
				</li>
				<li>
					<img src="static/img/login_logo.jpg">
					<view class="msg">
						<h2>商店名称</h2>
						<p>成都市双流区￥￥￥￥</p>
					</view>
					<button class="markBtn">去打卡</button>
				</li>
				<li>
					<img src="static/img/login_logo.jpg">
					<view class="msg">
						<h2>商店名称</h2>
						<p>成都市双流区￥￥￥￥</p>
					</view>
					<button class="markBtn">去打卡</button>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default{
		onLoad() {
		}
	}
</script>

<style scoped lang="less">
	page{
		width: 750rpx;
		height: 100%;
		background-color: #f2f2f2;
		.mark{
			width: 100%;
			height: 100%;
			.map{
				width: 100%;
				height: 250px;
				z-index: 20;
				.mapPage{
					width: 100%;
					height: 100%;
				}
			}
		}
		.main{
			position: absolute;
			width: 100%;
			height: 60%;
			overflow: scroll;
			z-index: 100;
			.info{
				width: 100%;
				height: 40px;
				margin-top: 10px;
				display: flex;
				margin-bottom: 10px;
				padding-left: 10px;
				padding-right: 10px;
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
				.searchBtn{
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
			.shopList{
				width: 100%;
				padding-left: 10px;
				padding-right: 10px;
				box-sizing: border-box;
				li{
					display: flex;
					width: 100%;
					height: 55px;
					margin-top: 5px;
					list-style-type: none;
					box-sizing: border-box;
					margin-left: 0px;
					border-bottom: 1px solid #ddd;
					img{
						height: 50px;
						width: 50px;
						border-radius: 5px;
					}
					.msg{
						height: 50px;
						width: 55%;
						margin-left: 20px;
						h2{
							font-size: 1.1rem;
							line-height: 25px;
						}
						p{
							color: #aaa;
						}
					}
					.markBtn{
						width: 100px;
						height: 30px;
						line-height: 30px;
						background-color: #1296db;
						color: #fff;
						margin-top: 10px;
						border-radius: 30px;
					}
				}
			}
		}
	}
</style>