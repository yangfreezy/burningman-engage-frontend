import React from "react";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";

export default class OpentokStream extends React.Component {
  constructor(props) {
    super(props);
    this.otSession = React.createRef();
    this.state = {
      error: null,
      connection: "Connecting",
      publishVideo: true
    };

    this.formSubmit = this.formSubmit.bind(this);

    this.sessionEventHandlers = {
      sessionConnected: () => {
        this.setState({ connection: "Connected" });
      },
      sessionDisconnected: () => {
        this.setState({ connection: "Disconnected" });
      },
      sessionReconnected: () => {
        this.setState({ connection: "Reconnected" });
      },
      sessionReconnecting: () => {
        this.setState({ connection: "Reconnecting" });
      }
    };

    this.publisherEventHandlers = {
      accessDenied: () => {
        console.log("User denied access to media source");
      },
      streamCreated: () => {
        console.log("Publisher stream created");
      },
      streamDestroyed: ({ reason }) => {
        console.log(`Publisher stream destroyed because: ${reason}`);
      }
    };

    this.subscriberEventHandlers = {
      videoEnabled: () => {
        console.log("Subscriber video enabled");
      },
      videoDisabled: () => {
        console.log("Subscriber video disabled");
      }
    };
  }

  onSessionError = error => {
    this.setState({ error });
  };

  onPublish = () => {
    console.log("Publish Success");
  };

  onPublishError = error => {
    this.setState({ error });
  };

  onSubscribe = () => {
    console.log("Subscribe Success");
  };

  onSubscribeError = error => {
    this.setState({ error });
  };

  toggleVideo = () => {
    this.setState({ publishVideo: !this.state.publishVideo });
  };

  formSubmit(event) {
    var msgTxt = document.querySelector("#msgTxt");
    event.preventDefault();
    console.log(this.otSession.current.sessionHelper.session);
    this.otSession.current.sessionHelper.session.signal(
      {
        type: "msg",
        data: msgTxt.value
      },
      function(error) {
        if (error) {
          console.log("Error sending signal:", error.name, error.message);
        }
      }
    );
  }
  componentDidMount() {
    this.otSession.current.sessionHelper.session.on(
      "signal:msg",
      function signalCallback(event) {
        var msgHistory = document.querySelector("#history");
        var msg = document.createElement("p");
        msg.textContent = event.data;
        msg.className =
          event.from.connectionId ===
          this.otSession.sessionHelper.session.connection.connectionId
            ? "mine"
            : "theirs";
        msgHistory.appendChild(msg);
        msg.scrollIntoView();
      }
    );
  }
  render() {
    const { apiKey, sessionId, token } = this.props.credentials;
    const { error, connection, publishVideo } = this.state;
    return (
      <div>
        <div id="sessionStatus">Session Status: {connection}</div>
        {error ? (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        ) : null}
        <OTSession
          apiKey={apiKey}
          sessionId={sessionId}
          token={token}
          onError={this.onSessionError}
          eventHandlers={this.sessionEventHandlers}
          ref={this.otSession}
        >
          <button id="videoButton" onClick={this.toggleVideo}>
            {publishVideo ? "Disable" : "Enable"} Video
          </button>
          <OTPublisher
            properties={{ publishVideo, width: 600, height: 400 }}
            onPublish={this.onPublish}
            onError={this.onPublishError}
            eventHandlers={this.publisherEventHandlers}
          />
          <OTStreams>
            <OTSubscriber
              properties={{ width: 200, height: 200 }}
              onSubscribe={this.onSubscribe}
              onError={this.onSubscribeError}
              eventHandlers={this.subscriberEventHandlers}
            />
          </OTStreams>
        </OTSession>
        <form onSubmit={this.formSubmit}>
          <input type="text" id="msgTxt" />
        </form>
        <div id="history" />
      </div>
    );
  }
}
