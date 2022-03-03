import React from "react";
import ContentCardAlbum from "../Cards/ContentCardAlbum";
import ContentCardArtists from "../Cards/ContentCardArtists";
import ContentCardEpisodes from "../Cards/ContentCardEpisodes";
import ContentCardShows from "../Cards/ContentCardShows";

function ContentRow({ Title, album, artists, episodes, Podcasts, clickFunc }) {
  return (
    <div className="content_row_wrapper">
      <h1>{Title}</h1>
      <div className="content_row">
        {album && <ContentCardAlbum clickFunc={clickFunc} />}
        {artists && <ContentCardArtists clickFunc={clickFunc} />}
        {episodes && <ContentCardEpisodes />}
        {Podcasts && <ContentCardShows clickFunc={clickFunc} />}
      </div>
    </div>
  );
}

export default ContentRow;
