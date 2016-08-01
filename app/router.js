import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthorizeView from './components/AuthorizeView.vue';
import PlaylistsView from './components/PlaylistsView.vue';
import Playlist from './components/Playlist.vue';

Vue.use(VueRouter);

let router = new VueRouter();

router.map({
    '/': {
        component: AuthorizeView
    },
    '/playlists': {
        component: PlaylistsView
    },
    '/playlists/:playlistId': {
        component: Playlist
    }
});

export default router;
