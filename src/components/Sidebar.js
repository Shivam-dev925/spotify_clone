import React from "react";
import { Box, Img } from "../styles/StyledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBookOpen,
  faSquarePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { UseSpotifyAuth } from "../contexts/SpotifyDataLayer";
import { faCcDiscover } from "@fortawesome/free-brands-svg-icons";
function Sidebar() {
  const sidebarData1 = [
    { id: 1, logo: faHome, title: "Home" },
    { id: 2, logo: faSearch, title: "Search" },
    { id: 3, logo: faBookOpen, title: "Your Library" },
    { id: 4, logo: faCcDiscover, title: "Discover Weekly" },
  ];

  const sidebarData2 = [
    { id: 4, logo: faSquarePlus, title: "Create playlist" },
    { id: 5, logo: faHeart, title: "Liked songs" },
  ];
  const { userPlaylist, playlist, setActive } = UseSpotifyAuth();

  const A = [];
  A.push(userPlaylist, playlist);
  /*  console.log(A) */

  const HandleNavigation = (id) => {
    setActive(id);
  };

  return (
    <Box
      bgColor="black"
      height="85vh"
      border="none"
      display="flex"
      flexDirection="column"
      color="white"
      padding="10px 0px 20px 20px"
      justify="start"
      flex="0.2"
    >
      <Img width="150px" margin="20px" src="images/spotify.png" alt="" />
      <ul className="sidebarUl">
        {sidebarData1.map((item) => {
          return (
            <li className="sidebarList" key={item.id}>
              <FontAwesomeIcon className="sidebarIcons" icon={item.logo} />
              <h4 onClick={() => HandleNavigation(item.id - 1)}>
                {item.title}
              </h4>
            </li>
          );
        })}
      </ul>
      <ul className="sidebarUl">
        {sidebarData2.map((item) => {
          return (
            <li className="sidebarList" key={item.id}>
              <FontAwesomeIcon className="sidebarIcons" icon={item.logo} />
              <h4>{item.title}</h4>
            </li>
          );
        })}
      </ul>
      <h4 style={{ marginLeft: "30px", marginTop: "20px" }}>Playlists</h4>
      <hr />
      <ul className="sidebarUl">
        {A?.length &&
          A.map((single, index) => {
            return (
              <li key={index} className="sidebarList">
                <h4>{single[0]?.name}</h4>
              </li>
            );
          })}
      </ul>
    </Box>
  );
}

export default Sidebar;
