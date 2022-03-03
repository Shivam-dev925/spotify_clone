import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Box, Img } from "../../styles/StyledComponent";
import {
  faPlay,
  faClock,
  faHeart,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { UseSpotifyAuth } from "../../contexts/SpotifyDataLayer";
import HomeCard from "../HomeCard";
import SongRow from "../SongRow";
import Navbar from "../Navbar";

function DiscoverWeekly() {
  const { discoverWeekly } = UseSpotifyAuth();

  return (
    <Box id="mainBody" height="85vh" overflowY="scroll">
      <Navbar />
      <Box display="flex" flexDirection="column" minHeight="700px" width="80vw">
        <div className="discoverWeekly">
          <Img
            width="19vw"
            height="37vh"
            src="images/discover.jpg"
            alt="discover weekly img"
          />
          <div>
            <p style={{ display: "inlineBlock" }}>PLAYLIST</p>
            <h1 style={{ width: "50vw", display: "inline-block" }}>
              Discover weekly
            </h1>
            <p style={{ display: "inlineBlock" }}>
              {discoverWeekly?.description}
            </p>
            <p style={{ display: "inlineBlock" }}>
              {discoverWeekly?.tracks?.items?.length + " "}songs..
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <h1 style={{ marginLeft: "30px" }}>Good Morning</h1>
        <HomeCard />
      </Box>

      <Box width="80vw" minHeight="200vh">
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "3%",
              alignItems: "center",
              width: "60px",
              height: " 60px",
              border: "none",
              borderRadius: " 50%",
              background: " #1db954",
            }}
          >
            <FontAwesomeIcon className="Icons" icon={faPlay} />
          </div>
          <FontAwesomeIcon
            className="Icons"
            style={{ fontSize: "40px", marginLeft: "3%" }}
            icon={faHeart}
          />
          <FontAwesomeIcon
            className="Icons"
            style={{ fontSize: "40px", marginLeft: "3%" }}
            icon={faEllipsis}
          />
        </div>

        <table className="table  ">
          <thead className="thead">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Date Added</th>
              <th>
                <FontAwesomeIcon icon={faClock} />
              </th>
            </tr>
          </thead>
          <tbody>
            <SongRow />
          </tbody>
        </table>
      </Box>
    </Box>
  );
}

export default DiscoverWeekly;
