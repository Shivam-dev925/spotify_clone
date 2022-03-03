import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";
import { Img, PlayCircle } from "../styles/StyledComponent";

function ContentCardAlbum({ clickFunc }) {
  const { albums } = UseSpotifyAuth();
  /*console.log({ albums });*/

  return (
    <>
      {albums?.albums?.map((content) => {
        return (
          <div key={content?.external_ids?.upc} className="Content_card">
            <Img
              onClick={() =>
                clickFunc(
                  content?.tracks?.items[0]?.name,
                  content?.images[0].url,
                  content?.tracks?.items[0]?.preview_url,
                  content?.total_tracks,
                  content?.id
                )
              }
              width="19vw"
              padding="10px"
              height="40vh"
              Radius="20px"
              src={content?.images[0].url}
              alt="no photo"
            />
            <h4>{content?.name}</h4>
            <h5>{content?.artists[0]?.name}</h5>
            <PlayCircle
              onClick={() =>
                clickFunc(
                  content?.tracks?.items[0]?.name,
                  content?.images[0].url,
                  content?.tracks?.items[0]?.preview_url,
                  content?.total_tracks,
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

export default ContentCardAlbum;
