<!--主入口 -->
<template>
	<div id="app">
		<!-- loading -->
    	<nprogress-container></nprogress-container>
		<!-- 路由 页面切换 -->
    	<transition name="fade" mode="out-in">
    		<router-view id="content" :key="$route.fullPath"></router-view>
    	</transition>
  	</div>
</template>

<script>
import './assets/css/common.css'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
// import { mapGetters, mapActions } from 'vuex'

export default {
	components: {
		NprogressContainer
	}
}
</script>

<style>

</style>
