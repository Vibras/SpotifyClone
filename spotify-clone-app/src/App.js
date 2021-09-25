import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider.js";
import './App.css';
import Login from './Login.js';
import Player from './Player.js';
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  
  const [{ token }, setToken] = useStateValue(null);
  const [{ user }, dispatch] = useStateValue();

  // Runs code based on a given condition
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, [token, dispatch]);

  console.log("User", user);
  console.log("token", token);

  return (
    // BEM
    <div className="app">
    
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    
    {/* <Login /> */}
    </div>
  );
}

export default App;
