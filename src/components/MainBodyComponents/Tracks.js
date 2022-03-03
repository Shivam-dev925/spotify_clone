import React from "react";
import { Box, Button, Img, PlayCircle } from "../../styles/StyledComponent";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { SpotifyTrackContext } from "../../contexts/SpotifyTracksContext";
function Tracks() {
  const {
    image,
    totalTracks,

    showEpisodes,

    name,
    tracks,
  } = SpotifyTrackContext();

  return (
    <>
      <Box overflowY="scroll" width="80vw" height="85vh">
        <Box
          background=" linear-gradient(rgb(196, 26, 26), rgb(0,0,0))"
          minHeight="450px"
          width="79vw"
        >
          <Navbar />

          <div className="discoverWeekly">
            <Img
              border="none"
              Radius="50%"
              width="19vw"
              objectFit="contain"
              height="40vh"
              src={image}
            />
            <div>
              <h1
                style={{
                  marginTop: "10%",
                  width: "50vw",
                  display: "inline-block",
                }}
              >
                {name}
              </h1>

              <p style={{ display: "inlineBlock" }}>
                {totalTracks} {totalTracks && "Total tracks available"}
              </p>
            </div>
          </div>
        </Box>
        <Box minHeight="100vh" width="79vw" background="rgb(0,0,0)">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              boxShadow: "10px 10px 10px rgba(0,0,0,0.4)",
              height: "100px",
              width: "80vw",
            }}
          >
            <PlayCircle marginLeft="3%" className="playCircle">
              <FontAwesomeIcon className="playButton Icons" icon={faPlay} />
            </PlayCircle>
            <Button
              padding="5px 25px"
              border="1px solid white"
              borderRadius="5px"
              color="white"
              fontSize="25px"
              fontWeight="300"
              bgColor="transparent"
              marginLeft="3%"
            >
              Follow
            </Button>
            <FontAwesomeIcon
              className="Icons"
              style={{ fontSize: "40px", marginLeft: "3%" }}
              icon={faEllipsis}
            />
          </div>
          {tracks.length ? (
            <table style={{ marginTop: "5%" }} className="table">
              <thead style={{ height: "40px" }} className="Thead">
                <tr>
                  <th>S.No.</th>
                  <th>track name</th>
                  <th>Source</th>
                  <th>Duartion</th>
                </tr>
              </thead>
              <tbody>
                {tracks?.length &&
                  tracks.map((track, index) => {
                    return (
                      <tr
                        style={{ height: "70px", textAlign: "start" }}
                        className="table_row"
                        key={index}
                      >
                        <td>{index + 1}</td>
                        <td>{track?.name}</td>
                        <td>
                          <a
                            style={{
                              color: "white",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                            href={track?.external_urls?.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {track?.artists[0]?.name}
                          </a>
                        </td>
                        <td>
                          {Math.floor(track?.duration_ms / 60000) + " "} mins
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          ) : (
            <Box width="60vw" minHeight="70vh">
              {tracks.length && <h1>Episodes</h1>}
              <ul>
                {showEpisodes?.items?.map((content, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        height: "220px",
                        borderBottom: "1px solid grey",
                        display: "flex",
                        color: "grey",
                        fontWeight: "400",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Img
                        width="10vw"
                        Radius="20px"
                        src={content?.images[0].url}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                         
                          position: "relative",
                        }}
                      >
                        <h3 style={{ marginTop:"3%",fontSize: "25px", letterSpacing: "1px" }}>
                          {content?.name.split("").slice(5, 25)} episode{" "}
                          {index + 1}
                        </h3>
                        <p
                          style={{
                            margin: "5% 0 0 0",
                            width: "40vw",
                            height: "80px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {content?.description}
                        </p>
                        <div
                          style={{
                            marginBottom:"3%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            width: "30vw",
                          }}
                        >
                          <PlayCircle className="playCircle">
                            <a
                              style={{ color: "white" }}
                              href={content?.audio_preview_url}
                            >
                              <FontAwesomeIcon
                                className="playButton Icons"
                                icon={faPlay}
                              />
                            </a>
                          </PlayCircle>
                          <span>{content?.release_date}</span>{" "}
                          <span>
                            {Math.floor(content?.duration_ms / 60000) + " "}{" "}
                            mins
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Tracks;
