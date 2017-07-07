<!--主入口 -->
<template>
	<div id="app">
		<!-- loading -->
    	<!-- <nprogress-container></nprogress-container> -->
		<!-- 路由 页面切换 -->
    	<transition name="fade" mode="out-in">
    		<router-view id="content" :key="$route.fullPath"></router-view>
    	</transition>
  	</div>
</template>

<script>
import './assets/css/common.css'
// import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { mapGetters, mapActions } from 'vuex'

export default {
	// components: {
	// 	NprogressContainer
	// },
	computed: mapGetters({
	    userInfo: 'userInfo'
	}),
	beforeMount () {
		this.loginHandle()
	},
	methods: {
		...mapActions([
			'setUser'
		]),
		loginHandle () {
			// 实名认证
			this.$http.post('/user/login').then((rst) => {
				if(rst.body.state == 1){
					this.setUser({isLogin:true,adminInfo:rst.data.data[0]})
					this.$router.push('/order')
				}else{
					this.setUser({isLogin:false, adminInfo:null})
					this.$router.push('/')
				}
		    },(err) => {
		      	this.setUser({isLogin:false, adminInfo:null})
		      	this.$vux.toast.show({
		      		type: 'warn',
		      		text: '服务端错误'
		      	})
		    })
		}
	}
}
</script>

<style>
html {
	color: #333!important;
}
</style>
