import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Auth0Provider } from "@auth0/auth0-react";

import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-rbdsmnmq5v1lgpqv.us.auth0.com"
      clientId="lkvd4TcI7PTNfkrmpR1KM9KhWFqMl2ts"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Context>
        <App />
      </Context>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
