import React from "react";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import SpotifyMainBody from "./SpotifyMainBody";

function SpotifyPlayer() {
  return (
    <div className="SpotifyPlayer">
      <Sidebar />
      <SpotifyMainBody />
      <Footer />
    </div>
  );
}

export default SpotifyPlayer;
