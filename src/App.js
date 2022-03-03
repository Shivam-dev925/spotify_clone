
import "./App.css";
import Login from "./components/login";

import { GlobalStyles } from "./styles/GlobalStyles";

import SpotifyPlayer from "./components/SpotifyPlayer";

import { UseSpotifyAuth } from "./contexts/SpotifyDataLayer";

function App() {
  const { accessToken } = UseSpotifyAuth();

  return (
    <div className="App">
      <GlobalStyles />
      {accessToken ? <SpotifyPlayer /> : <Login />}
    </div>
  );
}

export default App;
