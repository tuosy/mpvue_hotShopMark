<template>
	<view class="list">
		<view class="search">
			<input type="text" placeholder="输入商店名" v-model="keywords">
			<button class="btn" @click="search">搜索</button>
		</view>
		<view class="space">
		</view>
		<ul class="mark_list">
			<li v-for="item in markedList" :key="item.t_shop_pk" v-show="!isShowList">
				 <img :src="item.img_path">
				  <view class="shopInfo">
					<p class="msg_a">{{item.shop_name}}</p>
					<p class="msg_b">{{item.insert_time}}</p>
					<p class="msg_c">{{item.address}}</p>
				  </view>
			</li>
		</ul>
		<view class="msg_hint" v-show="!isShowList&&!markedList.length">
			您目前没用打卡记录哟，请开始打卡吧！
		</view>
		<view class="msg_hint" v-show="isShowList">
			{{markedSearch.msg}}
		</view>
	</view>
</template>

<script>
import apiRequst from '@/api/index.js' 
import {mapState} from 'vuex'
export default{
	data(){
		return{
			keywords:"",
			isSearch:false
		}
	},
	computed:{
		...mapState(["markedList","markedSearch"]),
		showList(){
			if(this.keywords&&this.isSearch){
				return this.markedSearch.data
			}else{
				return this.markedList
			}
		},
		isShowList(){
			return this.markedSearch.code&&this.keywords&&this.isSearch
		}
	},
	methods:{
		search(){
			this.isSearch=true
			if(!this.keywords){
				uni.showToast({
					title: '商店名不能为空',
					duration: 1000,
					icon:"error",
					position:"center"
				});
			}else{
				this.$store.dispatch("getMarkedSearch",this.keywords)
			}
		},
		
	},
	watch:{
		keywords(){
			this.isSearch=false
		}
	},
	onLoad() {
				this.queryList();
				this.$store.dispatch('getMarkedList')
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
					background-color: #fff
				}
				.btn{
					height: 38px;
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
				.btn:active{
					box-shadow: 2px 2px 2px #f2f2f2;
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
			.msg_hint{
				position: absolute;
				top: 100px;
				width: 100%;
				line-height: 30px;
				text-align: center;
				font-size: 1.2rem;
				color: #aaa;
			}
		}
	}
</style>