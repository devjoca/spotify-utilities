import Vue from 'vue'
import VueRouter from 'vue-router'
import Authorize from './components/authorize.vue'
import Playlists from './components/playlists.vue'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
  '/': {
    component: Authorize
  },
  '/playlists': {
    component: Playlists
  }
})

export default router