import React from "react";
import { authLoginUrl } from "./Authentication";
import styled from "styled-components";
import { Button, Img } from "../styles/StyledComponent";

const LoginPage = styled.div`
  height: 100vh;
  width: 100%;
  background: #000000;
  display: grid;
  place-items: center;
`;
function Login() {
  return (
    <LoginPage>
      <Img
        className="SpotifyLoginImage"
        src="images/spotify.png"
        alt=" spotify logo  not found"
      />

      <Button
        padding="12px 30px"
        bgColor="#1db954"
        borderRadius="35px"
        fontSize="30px"
        fontWeight="600"
      >
        <a className="loginAnchor" href={authLoginUrl}>
          login with spotify
        </a>
      </Button>
    </LoginPage>
  );
}

export default Login;
