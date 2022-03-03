import React from "react";

import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";

import { Img } from "../styles/StyledComponent";
function SongRow() {
  const { discoverWeekly } = UseSpotifyAuth();

  return (
    <>
      {discoverWeekly?.tracks?.items?.map((item, index) => {
        return (
          <tr
            className="table_row"
            style={{ alignItems: "cenmter" }}
            key={item?.index}
          >
            <td className="text-center">{index + 1}</td>
            <td style={{ display: "flex" }}>
              <Img
                width="70px"
                Radius="10px"
                objectFit="contain"
                src={item.track.album.images[0].url}
                alt="album_image"
              />
              <p
                style={{
                  marginTop: "3%",
                  width: "14vw",
                  fontSize: "23px",
                  fontWeight: "600",
                  marginLeft: "3%",
                }}
              >
                {item?.track?.name}
              </p>
              <div style={{ marginLeft: "3%", display: "inlineBlock" }}>
                {item?.track?.artists?.map((artist) => {
                  return <p>{artist.name}</p>;
                })}
              </div>
            </td>
            <td>{item?.track?.album?.name}</td>
            <td>{item?.added_at?.split("T")[0]}</td>
            <td>
              {Math.floor(item?.track?.duration_ms / 60000) + " " + "mins"}
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default SongRow;
