const {app, BrowserWindow, ipcMain} = require('electron');
const fetch = require('node-fetch');

require('dotenv').config();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 500, height: 500});
  mainWindow.loadURL('file://' + __dirname + '/main.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });



});

var authWindow = null;
const options = {
  client_id : process.env.SPOTIFY_CLIENT_ID,
  client_secret : process.env.SPOTIFY_CLIENT_SECRET
};

ipcMain.on('authorize-spotify', function(event) {
  const spotifyAuthUrl = 'https://accounts.spotify.com/authorize?client_id=' + options.client_id + '&response_type=code&redirect_uri=' + encodeURIComponent('spotify-utilities://callback')+'&scope='+encodeURIComponent('playlist-modify-public');
  authWindow = new BrowserWindow({ width: 800, height: 600, show: false})
  authWindow.loadURL(spotifyAuthUrl);
  authWindow.show();

  authWindow.webContents.on('will-navigate', function (evt, url) {
    handleCallback(url, event);
  });

  authWindow.webContents.on('did-get-redirect-request', function (evt, oldUrl, newUrl) {
    handleCallback(newUrl, event);
  });
})

function handleCallback(url, event) {
  var raw_code = /code=([^&]*)/.exec(url) || null;
  var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
  var error = /\?error=(.+)$/.exec(url);

  if (code || error) {
    authWindow.destroy();
    authWindow = null
  }

  if(code){
    const authorization = new Buffer(options.client_id + ':' +options.client_secret).toString('base64');
    var headers = {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + authorization
    };

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: 'grant_type=authorization_code&redirect_uri='+encodeURIComponent('spotify-utilities://callback')+'&code='+code,
      headers: headers}
    ).then(function(res) {
      return res.json();
    }).then(function(json) {
      event.returnValue = json;
    });
  }
}
