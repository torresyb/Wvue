import 'babel-polyfill'
import Vue from 'vue';
import VueResource from 'vue-resource'
import NProgress from 'vue-nprogress'
import * as Storage from './plugin/storage'
import * as filters from './filters'
import Moment from 'moment'
import {sync} from 'vuex-router-sync'
// 微信sdk
import { WechatPlugin } from 'vux'

import App from './app'
import router from './router'
import store from './store'

import {SET_USER} from './store/mutation-types'
// 点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 开发环境打开调试工具
Vue.config.debug = process.env.NODE_ENV === 'dev'

// 设置moment
Moment.locale('zh-cn')
global.moment = Moment

// 设置全局localStorage
global.storage = Storage

// 加载过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

// 加载进度条
const nprogress = new NProgress({ parent: '.nprogress-container' })

// 加载组件
Vue.use(VueResource)
Vue.use(NProgress)
Vue.use(WechatPlugin)

const wx = Vue.wechat

sync(store, router)
const { state } = store

// vue-resource 初始化设置
Vue.http.options.emulateJSON = true
Vue.http.options.credentials = true
Vue.http.options.cache = true


/**** 路由跳转前置判断 *****/

// 获取用户信息 刷新页面
router.beforeEach((route, redirect, next) => {
	if (storage.get('isLogin') === 'true') {
	    if(!store.getters.userInfo.isLogin){
	    	Vue.http.get('/user/getUserInfo').then((rst) => {
		    	store.commit(SET_USER,{isLogin:true,adminInfo:rst.data.data[0]})
		    	next()
		    },(err) => {
		      	console.log(err);
		    })
		}else{
			next()
	    }
	}else{
		store.commit(SET_USER,{isLogin:false, adminInfo:null})
		next()
	}
})

// 判断是否登录
router.beforeEach((to, from, next) => {
  	if (!state.app.userInfo.isLogin && to.path!="/login") {
    	return next({ path: '/login' })
  	}else if(state.app.userInfo.isLogin && to.path ==="/login"){
    	return next({ path: from.path })
  	}
 	next()
})

// 微信分享
if (process.env.NODE_ENV === 'production') {
	wx.ready(() => {
      	console.log('wechat ready')
      	wx.onMenuShareAppMessage({
        	title: '旅游', // 分享标题
        	desc: '基于 WeUI 和 Vue 的移动端 UI 组件库',
        	link: 'https://vux.li?x-page=wechat_share_message',
        	imgUrl: 'https://static.vux.li/logo_520.png'
      	})

      	wx.onMenuShareTimeline({
        	title: 'VUX', // 分享标题
        	desc: '基于 WeUI 和 Vue 的移动端 UI 组件库',
        	link: 'https://vux.li?x-page=wechat_share_timeline',
        	imgUrl: 'https://static.vux.li/logo_520.png'
      	})
    })

    const permissions = JSON.stringify(['onMenuShareTimeline', 'onMenuShareAppMessage'])
    const url = document.location.href
    Vue.http.post('https://vux.li/jssdk?url=' + encodeURIComponent(url.split('#')[0]) + '&jsApiList=' + permissions).then(res => {
      wx.config(res.data.data)
    })
}

window.__lendApp__ = new Vue({
  	el: '#app',
  	router,
  	nprogress,
  	store,
  	render: h => h(App)
});