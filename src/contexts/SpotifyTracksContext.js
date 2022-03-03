import { createContext, useContext, useState } from "react";

const TrackContext = createContext();

const SpotifyTracksLayer = ({ children }) => {
  const [showTracks, setShowTracks] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [name, setName] = useState("");
  const [previewUrl, setPreviewUrl] = useState([]);
  const [image, setImage] = useState("");
  const [totalTracks, setTotalTracks] = useState(null);
  const [showEpisodes, setShowEpisodes] = useState([]);

  return (
    <TrackContext.Provider
      value={{
        setShowEpisodes,

        showEpisodes,

        showTracks,
        setShowTracks,
        tracks,
        setTracks,
        name,
        setName,
        previewUrl,
        setPreviewUrl,
        image,
        setImage,
        totalTracks,
        setTotalTracks,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};

export default SpotifyTracksLayer;

export const SpotifyTrackContext = () => useContext(TrackContext);
