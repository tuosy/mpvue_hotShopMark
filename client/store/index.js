import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
Vue.use(vuex)


export default new vuex.Store({
    state,
})