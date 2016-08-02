import {http} from 'vue';

const spotify_api = 'https://api.spotify.com/v1';
let options = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
};

export function getMe() {
    return http.get(spotify_api + '/me', null, options).then(res => res.data);
}

export function getPlaylists() {
    return http.get(spotify_api + '/me/playlists', null, options).then(res => res.data);
};

export function getPlaylistInfo(playlist_id) {
    let user_id = localStorage.getItem('user_id');
    let playslist_url = `${spotify_api}/users/${user_id}/playlists/${playlist_id}`;

    return http.get(playslist_url, null, options).then(res => res.data);
};

export function getTracksFromUrl(url) {
    return http.get(url, null, options).then(res => res.data);
};
