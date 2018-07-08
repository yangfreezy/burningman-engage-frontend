import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <iframe
          src="http://player.twitch.tv/?channel=nesfandiari"
          height={500}
          width={800}
          frameborder="<frameborder>"
          scrolling={true}
          allowfullscreen={true}
        />
      </div>
    );
  }
}

export default App;
