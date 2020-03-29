import React, { Component } from "react";
import 'url-search-params-polyfill';

// import Player from "./Player";
// import PlayerTwo from "./PlayerTwo";
// import Player3 from './Player3'
// import Player4 from "./Player4";
// import Player5 from "./Player5";
import Player6 from "./Player6";
import Player7 from "./Player7";
// import Player8 from "./Player8";
// import ShakaPlayer from 'shaka-player-react';
import "../App.css";

class Home extends Component {
    render() {

        var manifestUri = new URLSearchParams(window.location.search).get("url");
        console.log(manifestUri);

        return (
            <div>
                <header className="App-header">
                    <div>
                        <h1>Wellcome!!</h1>
                    </div>

                    <div style={{ margin: "10px" }} />
                </header>
                {/* <Player /> */}
                {/* <PlayerTwo /> */}
                {/* <Player3/> */}
                {/* <Player4 /> */}
                {/* <Player5 /> */}
                <Player6 manifestUri={manifestUri} />
                <Player7 />
                {/* <Player8 /> */}
                {/* <ShakaPlayer autoPlay src="http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8" /> */}
            </div>
        );
    }
}

export default Home;
