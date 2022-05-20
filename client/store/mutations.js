import {USER_INFO,
		SHOP_LIST,
		MARKED_LIST,
		MARKED_SEARCH,
		SEARCH_NEAR_SHOP
	} from './mutations_type'
export default{
	//获取用户
	[USER_INFO](state, user) {
	        state.user = user
	},
	[SHOP_LIST](state, shopList) {
	        state.shopList = shopList
	},
	REMOVE_USER(state){
		state.user = {}
	},
	[MARKED_LIST](state,markedList){
		state.markedList = markedList
	},
	[MARKED_SEARCH](state,markedSearch){
		state.markedSearch = markedSearch
	},
	[SEARCH_NEAR_SHOP](state,searchShop){
		state.searchShop = searchShop
	},
}