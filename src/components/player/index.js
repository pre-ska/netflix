import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();

const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

export default Player;

const Video_ = ({ src, ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          onClick={() => setShowPlayer(false)}
          {...restProps}
          data-testid="player">
          <Inner>
            <video id="vetflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            {/* <iframe
              title="a"
              src="https://www.youtube.com/embed/XiGwAvd5mvM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe> */}
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

const Button_ = ({ ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
};

Player.Video = Video_;
Player.Button = Button_;
