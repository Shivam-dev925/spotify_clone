import React from "react";
import { Img, PlayCircle } from "../styles/StyledComponent";
import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { SpotifyTrackContext } from "../contexts/SpotifyTracksContext";
import SpotifyWebApi from "spotify-web-api-js";
function ContentCardShows() {
  const { show } = UseSpotifyAuth();
  /* console.log({ show });*/
  const { setShowTracks, setImage, setName, setShowEpisodes } =
    SpotifyTrackContext();

  const SpotifyApi = new SpotifyWebApi();

  const ClickFuncShows = (name, image, id) => {
    setShowTracks(true);
    setName(name);
    setImage(image);

    SpotifyApi.getShowEpisodes(id).then((res) => {
      setShowEpisodes(res);
    });
    window.Location.remove()
  };

  return (
    <>
      {show?.shows?.map((content) => {
        return (
          <div key={content?.publisher} className="Content_card">
            <Img
              onClick={() =>
                ClickFuncShows(
                  content?.name,
                  content?.images[0].url,
                  content?.id
                )
              }
              width="19vw"
              padding="10px"
              height="40vh"
              Radius="20px"
              src={content?.images[0]?.url}
              alt="no photo"
            />
            <h4>{content?.name}</h4>
            <h5>{content?.publisher}</h5>
            <PlayCircle
              onClick={() =>
                ClickFuncShows(
                  content?.name,
                  content?.images[0].url,
                  content?.id
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

export default ContentCardShows;
