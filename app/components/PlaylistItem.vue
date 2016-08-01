<template>
    <div>
        <div>
            <a v-link="{ path:'/playlist', params: 'playlistId:' + playlist.id }">{{ playlist.name }}</a>
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
