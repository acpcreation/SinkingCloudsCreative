import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SpaceBox from './views/SpaceBox.vue'
import HANA from './views/HANA.vue'
import WebSocketREST from './views/WebSocketREST.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/spaceBox',
      name:'spaceBox',
      component: SpaceBox
    },
    {
      path:'/websocketrest',
      name:'websocketrest',
      component: WebSocketREST
    },
    {
      path:'/hana',
      name:'hana',
      component: HANA
    }
  ]
})
