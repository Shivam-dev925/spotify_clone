import React from "react";
import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";
import SpotifyTracksLayer, {
  SpotifyTrackContext,
} from "../contexts/SpotifyTracksContext";
import DiscoverWeekly from "./MainBodyComponents/DiscoverWeekly";
import Home from "./MainBodyComponents/Home";

function SpotifyMainBody() {
  const { active } = UseSpotifyAuth();

  return (
    <div className="spotifyMainBody">
      <SpotifyTracksLayer>
        {active === 0 ? <Home /> : active === 3 ? <DiscoverWeekly /> : null}
      </SpotifyTracksLayer>
    </div>
  );
}

export default SpotifyMainBody;
