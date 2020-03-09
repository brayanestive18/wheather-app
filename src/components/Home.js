import React, { Component } from "react";

// import Player from "./Player";
// import PlayerTwo from "./PlayerTwo";
// import Player3 from './Player3'
import Player4 from "./Player4";
import "../App.css";

class Home extends Component {
    render() {
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
                <Player4 />
            </div>
        );
    }
}

export default Home;
