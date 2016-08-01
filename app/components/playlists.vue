<template>
  <div>
    <h1>My Playlists</h1>
  </div>
  <div>
    <ul>
      <li v-for="playlist in playlists">
        {{ playlist.name }} - Total songs: {{ playlist.tracks.total }}
       </li>
    </ul>
  </div>

</template>

<script>
import {ipcRenderer} from 'electron';
import {getPlaylists} from '../services/spotify.js';

export default {
  route: {
    activate() {
      let auth_info = ipcRenderer.sendSync('authorize-spotify')
      localStorage.setItem('auth_info', auth_info)

      getPlaylists(auth_info.access_token).then((res) => {
        for (var i = 0;  i < res.data.items.length; i++) {
          this.playlists.push(res.data.items[i])
        }
      })
    }
  },
  data() {
    return {
      playlists : []
    }
  }
};
</script>
