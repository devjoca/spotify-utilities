<template>
    <div v-show="playlist">
        <h1>{{ playlist.name }}</h1>

        <div>
            <button v-on:click="random">Random Sort</button>
            <button v-on:click="copyList">Copy List</button>
        </div>
        <div>

            <h3 v-if="playlist.tracks">Number of tracks: {{ playlist.tracks.total }}</h3>

            <table>
                <tr>
                    <td>#</td>
                    <td> Album </td>
                    <td> Artist </td>
                </tr>
                <tr v-for="t in tracks">
                    <td>{{ $index + 1}}</td>
                    <td>{{ t.track.name }}</td>
                    <td>{{ t.track.artists[0].name }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script >

import {getPlaylistInfo, getTracksFromUrl} from '../services/spotify.js';

export default {
    data () {
        return {
            playlist: {},
            tracks: []
        }
    },
    route: {
        data({to}) {
            return getPlaylistInfo(to.params.playlistId).then(playlist => {
                let tracks = playlist.tracks.items;
                let url = playlist.tracks.next;

                return {playlist, tracks };
            });
        }
    },
    methods: {
        random() {
            this.tracks.sort(function() {
                return 0.5 - Math.random();
            });
        },
        copyList() {
            let listsTracks = this.tracks.map((t) => {
                return t.track.external_urls.spotify;
            }).join("\n");
            console.log(listsTracks);
        }
    }
}
</script>
