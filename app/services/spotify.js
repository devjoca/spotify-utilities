import {http} from 'vue';

const spotify_api = 'https://api.spotify.com/v1';
let options = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
};

export function getPlaylists() {
    let playlists_url = spotify_api + '/me/playlists';

    return http.get(playlists_url, null, options);
}

export function getTracksByUrl(href) {
    let access_token = localStorage.getItem('access_token');

    return http.get(href, null, options);
}

export function getPlaylistInfo(playlist_id) {
    console.log(playlist_id);
}
