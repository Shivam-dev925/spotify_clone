import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCirclePause,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Box } from "../styles/StyledComponent";

function Footer() {
  return (
    <Box
      width="100vw"
      height="99px"
      bgColor="#1b1b1b"
      position="fixed"
      bottom="0px"
      left="0px"
      display="flex"
      justify="center"
      alignItems="center"
    >
      <div className="media">
        <FontAwesomeIcon className="mediaIcons" icon={faCircleArrowLeft} />
        <FontAwesomeIcon className="mediaIcons" icon={faCirclePause} />
        <FontAwesomeIcon className="mediaIcons" icon={faCircleArrowRight} />
      </div>
      <div className="speaker">
        <FontAwesomeIcon className="speakerIcon" icon={faVolumeLow} />
        <div></div>
      </div>
    </Box>
  );
}

export default Footer;
