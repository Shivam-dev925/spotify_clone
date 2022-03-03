import React, { useState } from "react";
import { Box, Img } from "../../styles/StyledComponent";
import { SpotifyTrackContext } from "../../contexts/SpotifyTracksContext";
import ContentRow from "../ContentRow";
import Navbar from "../Navbar";
import Tracks from "../MainBodyComponents/Tracks";
import SpotifyWebApi from "spotify-web-api-js";
function Home() {
  const SpotifyApi = new SpotifyWebApi();
  const {
    setTracks,
    setName,
    showTracks,
    setShowTracks,
    setPreviewUrl,

    setImage,

    setTotalTracks,
  } = SpotifyTrackContext();

  const HandleClicked = (name, image_url, preview_url, Total_tracks, id) => {
    setShowTracks(true);
    setName(name);
    setImage(image_url);
    {
      preview_url && setPreviewUrl(preview_url);
    }
    {
      Total_tracks && setTotalTracks(Total_tracks);
    }

    {
      id &&
        SpotifyApi.getAlbumTracks(id).then((res) => {
          setTracks(res.items);
        });
    }
    SpotifyApi.getArtistAlbums("4YRxDV8wJFPHPTeXepOstw").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      {!showTracks ? (
        <Box overflowY="scroll" width="80vw" height="85vh">
          <Box
            background="linear-gradient( rgb(84, 87, 78), rgb(0, 0, 0))"
            minHeight="450px"
            width="79vw"
          >
            <Navbar />
            <div className="discoverWeekly">
              <Img
                width="19vw"
                height="37vh"
                objectFit="contain"
                src="images/spotifyHome.jpg"
                alt="discover weekly img"
              />
              <div>
                <p
                  style={{
                    fontSize: "25px",
                    display: "inlineBlock",
                    fontWeight: "400",
                  }}
                >
                  hello
                </p>
                <h1 style={{ width: "50vw", display: "inline-block" }}>
                  Welcome to Spotify
                </h1>
                <p style={{ display: "inlineBlock" }}></p>
                <p style={{ display: "inlineBlock" }}></p>
              </div>
            </div>
          </Box>

          <ContentRow clickFunc={HandleClicked} Title="Albums" album />
          <ContentRow clickFunc={HandleClicked} Title="Artists" artists />
          <ContentRow Title="Episodes" episodes />
          <ContentRow clickFunc={HandleClicked} Title="Podcasts" Podcasts />
        </Box>
      ) : (
        <Tracks />
      )}
    </>
  );
}

export default Home;
