import React, { Component } from "react";
import styled from "styled-components";
import myImage from "./engage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './styles.css'

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
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  // top: -50px;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const ENDPOINT = 'http://localhost:3001'

function goLeft() {
  axios.get(`${ENDPOINT}?move=left`)
}

function goRight() {
  axios.get(`${ENDPOINT}?move=right`)
}

class App extends Component {
  render() {
    return (
      <AppHolder>
        <Container>
          <Logo src={myImage} />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
                 alignItems: 'sapce-between'
               }}
             >
          <StreamHolder>
            <iframe
              src="http://player.twitch.tv/?channel=nesfandiari"
              height={500}
              width={650}
              frameborder="<frameborder>"
              scrolling={true}
              allowfullscreen={true}
            />
          </StreamHolder>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <span style={{paddingLeft: 20, paddingRight: 20}}>
                <span onClick={goLeft}>
                  <FontAwesomeIcon icon={faChevronLeft} size="5x" color="white"/>
                </span>
              </span>
              <span onClick={goRight}>
                <FontAwesomeIcon icon={faChevronRight} size="5x" color="white"/>
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
