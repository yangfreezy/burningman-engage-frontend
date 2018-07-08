import React, { Component } from "react";
import styled from "styled-components";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";
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

// open tok credentials
const apiKey = "46149892";
const sessionId =
  "1_MX40NTgyODA2Mn5-MTUzMTAxMzY5MzMxNX5Sc2QyMnAycGdGNVB5SzZFamZlQllsTjl-UH4";
const token =
  "TT1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9NjA4ZTVmMTExYTE4NjM2NGQ1MDExMGVhZWJiOTJlMTEzZTAyNmExODpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UVXpNVEF4TXpZNU16TXhOWDVTYzJReU1uQXljR2RHTlZCNVN6WkZhbVpsUWxsc1RqbC1VSDQmY3JlYXRlX3RpbWU9MTUzMTAxMzY5NiZub25jZT0wLjA3MDk1MDQyMDgyMjkxMjM2JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1MzExMDAwOTY=";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connected: false
    };

    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }

  componentWillMount() {
    OT.registerScreenSharingExtension("chrome", config.CHROME_EXTENSION_ID, 2);
  }

  onError = err => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  render() {
    return (
      <AppHolder>
        <Container>
          <Logo src={myImage} />
          <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
            <OTPublisher />
            <OTStreams>
              <OTSubscriber />
            </OTStreams>
          </OTSession>
        </Container>
      </AppHolder>
    );
  }
}

export default App;
