import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";
import { Img, PlayCircle } from "../styles/StyledComponent";

function ContentCardArtists({ clickFunc }) {
  const { artists } = UseSpotifyAuth();
  /*console.log({ artists });*/

  return (
    <>
      {artists?.artists?.map((content) => {
        return (
          <div key={content?.followers?.total} className="Content_card">
            <Img
              onClick={() =>
                clickFunc(
                  content?.name,

                  content?.images[0]?.url
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
            <h5>{content?.followers?.total} followers </h5>
            <PlayCircle
              onClick={() =>
                clickFunc(
                  content?.name,

                  content?.images[0]?.url
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

export default ContentCardArtists;
