import React, { Component } from "react";
import styled from "styled-components";
import myImage from "./engage.jpg";

const AppHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  margin: 0px;
  padding-top: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  color: white;
`;

const StreamHolder = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  top: -50px;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

class App extends Component {
  render() {
    return (
      <AppHolder>
        <Container>
          <Logo src={myImage} />
          <StreamHolder>
            <iframe
              src="http://player.twitch.tv/?channel=nesfandiari"
              height={450}
              width={700}
              frameborder="<frameborder>"
              scrolling={true}
              allowfullscreen={true}
            />
          </StreamHolder>
        </Container>
      </AppHolder>
    );
  }
}

export default App;
