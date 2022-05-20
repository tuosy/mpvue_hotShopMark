import Vue from 'vue'
import vuex from 'vuex'
import VueXAlong from 'vuex-along'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(vuex)


export default new vuex.Store({
    state,
	actions,
	mutations,
	getters,
	plugins: [VueXAlong({
	        name: 'along',     //存放在localStroage或者sessionStroage 中的名字
			justSession:true, //是否存放在local中  false 不存放 如果存放按照下面session的配置配
	        session: { 
				list: ["shopList","markedSearch","markedList","searchShop"], 
				isFilter: true 
			}
	        //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
	})]
})