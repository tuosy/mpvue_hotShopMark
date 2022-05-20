//引入封装的Ajax请求函数
import ajax from "./ajax"
const baseUrl = 'http://127.0.0.1:3000/api'
export default{
	//登录求情
	 reqLogin({phone, pwd}) {
	        return ajax(`${baseUrl}/login`, {phone,pwd},'POST')
	    },
	//异步请求商家列表
	reqShopList(){
		return ajax(`${baseUrl}/shopList`)
	},
	//异步请求打卡列表
	reqMarkedList(userId){
		return ajax(`${baseUrl}/markedList`,{userId})
	},
	//异步请求搜索打卡列表
	reqMarkedSearch(userId,keywords){
		return ajax(`${baseUrl}/markedSearch`,{userId,keywords},"POST")
	},
	//异步获取搜索商家
	reqSearchShop(keywords){
		return ajax(`${baseUrl}/searchNearShop`,{keywords},"POST")
	}
}