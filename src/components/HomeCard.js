import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";
import { PlayCircle } from "../styles/StyledComponent";

const Card = styled.div`
  width:25vw;
  border: none;
  border-radius: 10px;
  height: 100px;

  margin-top: 20px;
  margin-left: 30px;
`;
function HomeCard() {
  const { userPlaylist, playlist } = UseSpotifyAuth();

  const A = [];

  A.push(userPlaylist, playlist);

  return (
    <>
      {A?.length &&
        A.map((item, index) => {
          return (
            <Card key={index} id="playlistItems">
              <img
                style={{ borderRadius: "5px", marginLeft: "20px" }}
                src={item[0]?.images[2]?.url}
                alt="album-images"
              />
              <h1 style={{ marginLeft: "10px" }}>{item[0]?.name}</h1>
              <PlayCircle position="absolute" top="20%" right="20px">
                <FontAwesomeIcon className="playButton" icon={faPlay} />
              </PlayCircle>
            </Card>
          );
        })}
    </>
  );
}

export default HomeCard;
