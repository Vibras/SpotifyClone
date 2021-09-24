import React, { useEffect } from "react";
import { useStateValue } from "react";
import './App.css';
import Login from './Login.js';
import Player from './Player.js';
import { getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  /*
  const [{ token }, setToken] = useStateValue(null);

  // Runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
    }
    
    console.log("I have a token", token);
  }, []);
  */

  return (
    // BEM
    <div className="app">
    {/*
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    */}
    <Login />
    </div>
  );
}

export default App;
