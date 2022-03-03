var CLIENT_ID = "9b13e03ff64c4a929fdb4ae2ddb06f10";

/*var SECRET_CLIENT_ID="3a908a80184b47f7bbe28bb5cabd8ee1";

var REDIRECTED_URI = "http://localhost:3000/";*/
var REDIRECTED_URI = "http://localhost:3000/callback";
export const authEndPoint = "https://accounts.spotify.com/authorize";
   
export const BaseUrl="https://api.spotify.com";


const scopes = [
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
];

export const authLoginUrl = `${authEndPoint}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECTED_URI}&scopes=${scopes.join(
  "%20"
)}&show_dialog=true`;

export const GetAccessTokenUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((primary, item) => {
      let pieces = item.split("=");
      primary[pieces[0]] = decodeURIComponent(pieces[1]);
      return primary;
    }, {});
};
