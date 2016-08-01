import {http} from 'vue'

const spotify_api = 'https://api.spotify.com/v1'

export function getPlaylists() {
    let playlists_url = spotify_api + '/me/playlists'
    let access_token = localStorage.getItem('access_token');

    return http.get(playlists_url, null, {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    })
}
