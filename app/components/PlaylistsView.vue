<template>
  <div>
    <h1>My Playlists</h1>
  </div>
  <div>
    <ul>
      <playlist v-for="playlist in playlists" :playlist="playlist"> </playlist>
    </ul>
  </div>

</template>

<script>
import {ipcRenderer} from 'electron';
import {getPlaylists} from '../services/spotify.js';
import Playlist from './Playlist.vue';

export default {
  components: {
    Playlist
  },
  route: {
    activate() {
      let auth_info = ipcRenderer.sendSync('authorize-spotify');

      localStorage.setItem('auth_info', auth_info);

      getPlaylists(auth_info.access_token).then((res) => {
        this.playlists = res.data.items;
      })
    }
  },
  data() {
    return {
      playlists : []
    }
  },
  methods: {
    randomize(playlist) {
      console.log(playlist);
    }
  }
};
</script>
