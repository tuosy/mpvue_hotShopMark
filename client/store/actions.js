import {USER_INFO,
		SHOP_LIST,
		MARKED_LIST,
		MARKED_SEARCH,
		SEARCH_NEAR_SHOP
} from "./mutations_type.js"
//引入api函数
import apiRequst from '@/api/index.js'
import api from "@/api/index.js"
export default{
	recordUser(context, user) {
	        context.commit(USER_INFO, user)
	    },
	//获取商家列表
	getShopList(context){
		apiRequst.reqShopList().then(res=>{
			if(res.code===0){
				context.commit(SHOP_LIST,res.data)
			}
		})
	},
	//获取打卡列表
	getMarkedList(context){
		const userId = context.state.user.t_user_pk
		apiRequst.reqMarkedList(userId).then(res=>{
			if(res.code===0){
				context.commit(MARKED_LIST,res.data)
			}
		},err=>{
			console.log(err)
		})
		// console.log(context.state.user.t_user_pk)
	},
	//获取打卡搜索列表
	getMarkedSearch(context,keywords){
		const userId = context.state.user.t_user_pk
		apiRequst.reqMarkedSearch(userId,keywords).then(res=>{
			context.commit(MARKED_SEARCH,res)
		},err=>{
			console.log(err)
		})
	},
	//获取搜索的商家列表
	getSearchShop(context,keywords){
		apiRequst.reqSearchShop(keywords).then(res=>{
			context.commit(SEARCH_NEAR_SHOP,res)
		},err=>{
			console.log(err)
		})
	}
	
}