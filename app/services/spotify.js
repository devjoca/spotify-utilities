import Vue from 'vue'

const spotify_api = 'https://api.spotify.com/v1'

export function getPlaylists(access_token) {
  let playlists_url = spotify_api + '/me/playlists'

  return Vue.http.get(playlists_url, null, {
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  })
}
