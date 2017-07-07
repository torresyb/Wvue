<template>
	<div>
    	<tabbar>
			<tabbar-item :selected = "$route.path == '/user/line'" link="/user/line">
				<img slot="icon" src="../assets/images/icon.png">
				<span slot="label">线路</span>
			</tabbar-item>
			<tabbar-item :selected = "$route.path == '/order'" badge="2" link="/order"> 
				<img slot="icon" src="../assets/images/icon.png">
				<span slot="label">订单</span>
			</tabbar-item>
			<tabbar-item :selected = "$route.path == '/'" show-dot link="/">
				<img slot="icon" src="../assets/images/icon.png">
				<span slot="label">我的</span>
			</tabbar-item>
	    </tabbar> 
  	</div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
	components: {
		Tabbar,
    	TabbarItem,
    	Group,
    	Cell
  	}
}
</script>