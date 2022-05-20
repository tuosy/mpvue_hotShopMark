<template>
	<view class="mark">
		<view class="map">
			<web-view src="/static/html/map.html" class="mapPage" @message="getPosition" ></web-view>
		</view>
		<view class="main">
			<view class="info">
				<input type="text" placeholder="搜索附近网红门店" v-model="keywords">
				<button class="searchBtn" @click="search">搜索</button>
			</view>
			<ul class="shopList" v-show="!isShowList">
				<li v-for="shop in showList" :key="shop.t_shop_pk">
					<img :src="shop.img_path">
					<view class="msg">
						<h2>{{shop.shop_name}}</h2>
						<p>{{shop.address}}</p>
					</view>
					<button class="markBtn">去打卡</button>
				</li>
			</ul>
			<view v-show="isShowList" class="error_hint">{{searchShop.msg}}</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters,mapState} from 'vuex'
	export default{
		data(){
			return{
				keywords:"",
				isSearch:false,
			}
		},
		computed:{
			...mapGetters(['getNearShop']),
			...mapState(["searchShop"]),
			showList(){
				if(this.keywords&&this.isSearch){
					return this.searchShop.data
				}else{
					return this.getNearShop
				}
			},
			isShowList(){
				return this.searchShop.code&&this.keywords&&this.isSearch
			}
		},
		methods:{
			getPosition(event) {
				console.log("接收到消息：" + JSON.stringify(event.detail.data));
				console.log("ok")
			},
			search(){
				this.isSearch=true
				if(this.keywords){
					this.$store.dispatch("getSearchShop",this.keywords)
				}else{
					uni.showToast({
						title: '商店名不能为空',
						duration: 1000,
						icon:"error",
						position:"center"
					});
				}				
			}
			
		},
		watch:{
			keywords(){
				this.isSearch=false
			}
		},
		onLoad() {
			this.$store.dispatch("getShopList")
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
			height: 57%;
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
					box-shadow:2px 2px 2px #000 ;
				}
				.searchBtn:active{
					box-shadow:2px 2px 2px #f2f2f2 ;
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
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
						}
						h2:hover{
							color: #1296db;
						}
						p{
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							color: #aaa;
							line-height: 25px;
							width: 90%;
							font-size: 0.9rem;
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
			.error_hint{
				width: 100%;
				height: 30px;
				margin-top: 50px;
				line-height: 30px;
				text-align: center;
				font-size: 1.2rem;
				color: #aaa;
			}
		}
	}
</style>