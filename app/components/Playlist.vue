<template>
    <li>
        {{ playlist.name }} - Total songs: {{ playlist.tracks.total }}
        <button v-on:click="randomize(playlist)">random</button>
    </li>
</template>

<script>
export default {
    props : {
        playlist: Object
    },
    methods: {
        randomize(playlist) {
            console.log(playlist);
        }
    }
};
</script>
