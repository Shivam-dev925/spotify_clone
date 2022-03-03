import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";
import { SpotifyTrackContext } from "../contexts/SpotifyTracksContext";
import { Img, PlayCircle } from "../styles/StyledComponent";
function ContentCardEpisodes() {
  const { episodes } = UseSpotifyAuth();
  /*console.log({ episodes });*/
  const {
    setShowEpisodes,

    setShowTracks,

    setName,

    setImage,
  } = SpotifyTrackContext();
  const SpotifyApi = new SpotifyWebApi();
  const ClickFuncEpisodes = (
    name,
    image_url,

    id
  ) => {
    setShowTracks(true);
    setName(name);
    setImage(image_url);

    SpotifyApi.getShowEpisodes(id).then((res) => {
      setShowEpisodes(res);
    });
  
  };

  return (
    <>
      {episodes?.episodes?.map((content) => {
        return (
          <div
            style={{ position: "relative" }}
            key={content?.audio_preview_url}
            className="Content_card"
          >
            <Img
              onClick={() =>
                ClickFuncEpisodes(
                  content?.name?.split("").slice(0, 20),
                  content?.images[0].url,

                  content?.show?.id
                )
              }
              width="19vw"
              padding="10px"
              height="40vh"
              Radius="20px"
              src={content?.images[0]?.url}
              alt="no photo"
            />
            <h4
              style={{
                width: "18vw",
                height: "100px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {content?.name}
            </h4>
            <PlayCircle
              onClick={() =>
                ClickFuncEpisodes(
                  content?.name?.split("").slice(0, 20),
                  content?.images[0].url,

                  content?.show?.id
                )
              }
              className="playCircle"
              bottom="40%"
              right="10%"
              position="absolute"
            >
              <FontAwesomeIcon className="playButton" icon={faPlay} />
            </PlayCircle>
          </div>
        );
      })}
    </>
  );
}

export default ContentCardEpisodes;
