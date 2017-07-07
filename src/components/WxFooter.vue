<template>
	<div>
    	<tabbar>
			<tabbar-item :selected = "$route.name == 'line'" link="/line">
				<img slot="icon" src="../assets/images/icon.png">
				<span slot="label">线路</span>
			</tabbar-item>
			<tabbar-item :selected = "$route.name == 'index'" badge="2" link="/index"> 
				<img slot="icon" src="../assets/images/icon.png">
				<span slot="label">订单</span>
			</tabbar-item>
			<tabbar-item :selected = "$route.name == 'myspace'" show-dot link="/myspace">
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