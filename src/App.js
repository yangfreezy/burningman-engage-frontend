import React, { Component } from "react";
import styled from "styled-components";
import myImage from "./engage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./styles.css";

import OpentokStream from "./opentok";
import { API_KEY, SESSION_ID, TOKEN } from "./config";

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

const ENDPOINT = "http://localhost:3001";

function goLeft() {
  axios.get(`${ENDPOINT}?move=left`);
}

function goRight() {
  axios.get(`${ENDPOINT}?move=right`);
}

const credentials = {
  apiKey: API_KEY,
  sessionId: SESSION_ID,
  token: TOKEN
};

class App extends Component {
  render() {
    return (
      <AppHolder>
        <Container>
          <Logo src={myImage} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "sapce-between"
            }}
          >
            <StreamHolder>
              <OpentokStream credentials={credentials} reff={this.otSession} />
            </StreamHolder>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div>
                <span style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <span onClick={goLeft} style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      size="5x"
                      color="white"
                    />
                  </span>
                </span>
                <span onClick={goRight} style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="5x"
                    color="white"
                  />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </AppHolder>
    );
  }
}

export default App;
