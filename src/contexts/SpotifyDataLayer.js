import { useState, useEffect, useContext, createContext } from "react";
import { GetAccessTokenUrl } from "../components/Authentication";
import SpotifyWebApi from "spotify-web-api-js";

export const AuthContext = createContext();

const SpotifyDataLayer = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userPlaylist, setUserPlaylist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [active, setActive] = useState(0);
  const [accessToken, setAccessToken] = useState(null);
  const [discoverWeekly, setDiscoverWeekly] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState([]);

  const [featuredPlaylist, setFeaturedPlaylist] = useState([]);
  useEffect(() => {
    const SpotifyApi = new SpotifyWebApi();

    const Token = GetAccessTokenUrl();

    let isMounted = true;
    if (Token) {
      setAccessToken(Token.access_token);
      SpotifyApi.setAccessToken(Token?.access_token);

      SpotifyApi.getMe().then((user) => {
        if (isMounted) setUser(user);
      });

      SpotifyApi.getUserPlaylists().then((res) => {
        if (isMounted) setUserPlaylist(res.items);
      });
      SpotifyApi.getPlaylist("7re6t7wUnUQY3N37uQELFG").then((res) => {
        if (isMounted) setPlaylist([res]);
      });
      SpotifyApi.getPlaylist("37i9dQZEVXcLvfUyTNlvqc").then((response) => {
        if (isMounted) setDiscoverWeekly(response);
      });
      SpotifyApi.getAlbums([
        "0kW2eVa49oJUId4gugZMW2",
        "4OcIR5Zgn7yiWZd4BtIhcw",
        "2gNPnKP1PDkB5SZz3IMKuX",

        "7hJQ4AirmGQTPJXKPKVXZ0",
        "77dwEKk1JI2JN9L5tg8d7t",
        "6mCDTT1XGTf48p6FkK9qFL",
        "1fkcnrjX3FK22geTeh9Ruh",
      ]).then((res) => {
        if (isMounted) setAlbums(res);
      });

      SpotifyApi.getArtists([
        "4YRxDV8wJFPHPTeXepOstw",
        "7n2wHs1TKAczGzO7Dd2rGr",
        "06HL4z0CvFAxyc27GXpf02",
        "1Xyo4u8uXC1ZmMpatF05PJ",
        "1uNFoZAHBGtllmzznpCI3s",
        "6eUKZXaKkcviH0Ku9w2n3V",
        "6nJfc8VBAp8v30xEKDZfgR",
      ]).then((res) => {
        if (isMounted) setArtists(res);
      });

      SpotifyApi.getEpisodes([
        "6bdnVXAPFsq3q4lGOiehqV",
        "57fMIai4rIjpm0JwuMNbLH",
        "2u3FuMncmkJSiEIzfon5S8",
        "2unzyfG4cNwhbYo6SL7tIZ",
        "4zt0DQD1fY0bbBzJqlgeJI",
        "1E8kNoeb1rLIhM3U6BMhxH",
        "17z2jnyDvfQLvxYFbtNh5y",
        "7qTFwiOkKJ7CayXuaA13Vn",
        "3sxcNh7hPJllUnvkOUP67F",
      ]).then((res) => {
        if (isMounted) setEpisodes(res);
      });
      SpotifyApi.getShows([
        "6Qxp47jDBEsND6YKDR8TBG",
        "4LzIC6QRaRF87e793MC4NG",
        "23zdIqNUb0riR51woKIEoF",
        "6bhCjWNKHYosEcCGxkSIjR",
        "6OS7VyugPVfGXqgCWTBIGn",
        "1uqDxoToRhYifHeIWCBpJB",
        "10kbjVXYDVqqNRmImJZrqN",
        "47KWs3UT159xUX5PNYQjub",
        "42Cgnb6jg48kj3MG7pQWkX",
      ]).then((res) => {
        if (isMounted) setShow(res);
      });
      SpotifyApi.getFeaturedPlaylists("4YRxDV8wJFPHPTeXepOstw").then((res) => {
        if (isMounted) setFeaturedPlaylist(res);
      });
    

      /* SpotifyApi.getCategory("").then((res) => {
        if (isMounted) console.log(res);
      });
*/
    }
    return () => (isMounted = false);
  }, []);

  /* console.log({ albums });
  console.log({ artists });
  console.log({ featuredPlaylist });
  console.log({ episodes });
  console.log({ show });*/

  //open.spotify.com/album/2gNPnKP1PDkB5SZz3IMKuX?si=6ApClpxYSUSdMuTYlsdqNw

  /*https://open.spotify.com/playlist/18CPDY5QPack31L80UTI3l?si=5220bb7890974ac5
  
  https://open.spotify.com/track/4uI9iYyjt3b0LRojOz0Fqk?si=b1f83fec77f84601*/
  return (
    <AuthContext.Provider
      value={{
        discoverWeekly,
        setDiscoverWeekly,
        playlist,
        setPlaylist,
        user,
        setUser,
        userPlaylist,
        setUserPlaylist,
        accessToken,
        active,
        setActive,
        setAlbums,
        albums,
        artists,
        setArtists,
        featuredPlaylist,
        setFeaturedPlaylist,
        show,
        setShow,
        episodes,
        setEpisodes,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default SpotifyDataLayer;

export const UseSpotifyAuth = () => useContext(AuthContext);
