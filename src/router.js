import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SpaceBox from './views/SpaceBox.vue'
import HANA from './views/HANA.vue'
import WebSocketREST from './views/WebSocketREST.vue'
import Photos from './views/Photos.vue'
import Videos from './views/Videos.vue'
import Music from './views/Music.vue'
import Merch from './views/Merch.vue'
import AudioVisuals from './views/AudioVisuals.vue'
import SpiralDots from './views/SpiralDots.vue'
import OrbitCloud from './views/OrbitCloud.vue'
import About from './views/About.vue'
import FlyingGame from './views/FlyingGame.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/spaceBox',
      name:'spaceBox',
      component: SpaceBox
    },{
      path:'/websocketrest',
      name:'websocketrest',
      component: WebSocketREST
    },{
      path:'/hana',
      name:'hana',
      component: HANA
    },{
      path:'/merch',
      name:'merch',
      component: Merch
    },{
      path:'/photos',
      name:'photos',
      component: Photos
    },{
      path:'/videos',
      name:'videos',
      component: Videos
    },{
      path:'/music',
      name:'music',
      component: Music
    },{
      path:'/audioVisuals',
      name:'audioVisuals',
      component: AudioVisuals
    },{
      path:'/spiralDots',
      name:'spiralDots',
      component: SpiralDots
    },{
      path:'/orbitCloud',
      name:'orbitCloud',
      component: OrbitCloud
    },{
      path:'/about',
      name:'about',
      component: About
    },{
      path:'/flyingGame',
      name:'flyingGame',
      component: FlyingGame
    },
    
    
  ]
})
