<template>

<div>
    <h1>My Playlists</h1>
</div>
<div>
    <ul>
        <playlist-item v-for="playlist in playlists" :playlist="playlist"> </playlist-item>
    </ul>
</div>

</template>

<script>
import {ipcRenderer} from 'electron';
import {getPlaylists} from '../services/spotify.js';
import PlaylistItem from './PlaylistItem.vue';

export default {
    components: {
        PlaylistItem
    },
    route: {
        activate() {
            let auth_info = ipcRenderer.sendSync('authorize-spotify');
            localStorage.setItem('access_token', auth_info.access_token);
        },
        data() {
            return getPlaylists().then(res => {
                return { playlists: res.data.items };
            });
        }
    },
    data() {
        return {
            playlists : []
        }
    }
};
</script>
