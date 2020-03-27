import React, { Component } from "react";
import ReactDOM from "react-dom";
import MediaPlayer from "../utils/hasplayer.min";

import "./PlayerTwo.css";

export default class PlayerTwo extends Component {
    constructor() {
        super();
        const METHODS = ["loadeddata", "play", "pause", "onError", "onWarning"];

        METHODS.forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    play() {
        console.log("Play");
        this.videoPlayer.play();
    }

    loadeddata() {
        console.log("loadeddata");
    }

    pause() {
        console.log("pause");
        this.videoPlayer.pause();
    }

    onError(e) {
        console.error("ERROR: " + JSON.stringify(e));
    }

    onWarning(e) {
        console.warn("WARN: " + JSON.stringify(e));
    }

    componentDidMount() {
        this.videoPlayer = ReactDOM.findDOMNode(this.refs.videoPlayer);

        var stream = {
            url: "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd",
            // type: "application/x-mpegURL",
            //adsUrl : adsDataString,
            protData: {
                "com.microsoft.playready": {
                    laURL: "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
                    // customData: customData
                }
            }
        };

        this.mediaPlayer = new MediaPlayer();
        this.mediaPlayer.init(this.videoPlayer);
        this.mediaPlayer.addEventListener(
            "loadeddata",
            this.loadeddata.bind(this)
        );
        this.mediaPlayer.addEventListener("error", this.onError.bind(this));
        this.mediaPlayer.addEventListener("warning", this.onWarning.bind(this));
        this.mediaPlayer.setAutoSwitchQuality(true);
        this.mediaPlayer.setScheduleWhilePaused(true);
        this.mediaPlayer.load(stream);
    }

    render() {
        return (
            <div ref="divRef">
                <video
                    className="player"
                    id="videoPlayer"
                    controls
                    ref="videoPlayer"
                    autoPlay
                    
                    /* crossOrigin="include"
                    encrypted-media
                    picture-in-picture
                    accelerometer
                    gyroscope */
                ></video>
                <div>
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.pause}>Pause</button>
                </div>
{/*                 <iframe
                    width="560"
                    height="315"
                    src=""
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe> */}
            </div>
        );
    }
}
