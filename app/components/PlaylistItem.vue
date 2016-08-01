<template>
    <div>
        <div>
            <a :href="'#/playlists/' + playlist.id">{{ playlist.name }}</a>
        </div>
    </div>
</template>

<script>

export default {
    props : {
        playlist: Object
    }
};
</script>
