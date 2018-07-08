import React, { Component } from "react";
import styled from "styled-components";
import myImage from "./engage.jpg";

const AppHolder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: black;
  margin: 0px;
  padding: 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  color: white;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
`;

class App extends Component {
  render() {
    return (
      <AppHolder>
        <Container>
          <Logo src={myImage} />
        </Container>
      </AppHolder>
    );
  }
}

export default App;
