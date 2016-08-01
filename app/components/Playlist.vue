<template>
    <div v-show="playlist">

    </div>
</template>
<script >

import {getPlaylistInfo} from '../services/spotify.js';

export default {
    data () {
        return {
            playlist: {}
        }
    },
    route: {
        data ({to}) {
            return getPlaylistInfo(to.params.playlistId);
        }
    }
}
</script>
