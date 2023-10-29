import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-mmzpd5c2oxtfu6o2.us.auth0.com"
     clientId="7boPorMado7yT62luXLEmd88YoVDVLxy"
     authorizationParams={{
       redirect_uri: "https://project-mern-deploy-silk.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
