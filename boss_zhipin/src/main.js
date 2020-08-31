import './assets/reset.css'
import './assets/rem'

import Vue from 'vue'
import App from './App'
import router from './router'

import { Button,Swipe, SwipeItem,NavBar,Icon,Tabbar, TabbarItem,
		Sticky,PullRefresh, Toast,Loading, Area,Grid, GridItem,
		ActionSheet,Divider  } from 'vant';

Vue.use(Button).use(Swipe).use(SwipeItem).use(NavBar).use(Icon)
	.use(Tabbar).use(TabbarItem).use(Sticky).use(PullRefresh).use(Toast)
	.use(Loading).use(Area).use(Grid).use(GridItem).use(ActionSheet)
	.use(Divider);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
