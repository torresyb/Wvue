import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页 订单管理
const Index = r => require(['views/index'], r)
// 线路管理
const Line = r => require(['views/line'], r)
// 个人中心
const Myspace = r => require(['views/myspace'], r)


// 根目录
const rootPath = ''

// 页面路由
const routes = [
	{path: '', redirect: {name: 'index'}},
	{path: '/index', component: Index, name: 'index'},
	{path: '/line', component: Line, name: 'line'},
	{path: '/myspace', component: Myspace, name: 'myspace'}
]
// .map(route => {
//   // route.path = rootPath + route.path
//   return route
// })

// 404 页
//routes.push({path: '*', component: NotFound, name: 'notfound'})

export default new Router({
	mode: 'hash',
  	linkActiveClass: 'active',
  	routes: routes
})

