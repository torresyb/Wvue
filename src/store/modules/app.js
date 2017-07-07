import * as types from '../mutation-types'

const state = {
	userInfo: {
    	isLogin: false,
    	adminInfo: null
  	}
}

const mutations = {
  	[types.SET_USER] (state, user) {
    	state.userInfo = user
  	},

  	[types.DELETE_USER] (state) {
   		state.userInfo.isLogin = false
    	state.userInfo.adminInfo = null
    	state.userInfo.realname = ''
  	},
}

export default {
  	state,
  	mutations
}
