import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "@opentok/client";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
