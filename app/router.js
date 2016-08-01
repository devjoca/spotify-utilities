import Vue from 'vue';
import VueRouter from 'vue-router';
import Authorize from './components/Authorize.vue';
import PlaylistsView from './components/PlaylistsView.vue';

Vue.use(VueRouter);

let router = new VueRouter();

router.map({
  '/': {
    component: Authorize
  },
  '/playlists': {
    component: PlaylistsView
  }
});

export default router;
