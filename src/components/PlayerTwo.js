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
            /* url:
                "https://content.uplynk.com/a1850dcd4c90444084a999c2c324da34.m3u8?cid=a1850dcd4c90444084a999c2c324da34&ct=a&eid=a1850dcd4c90444084a999c2c324da34&ad.caid=5e45435cbe6ab3090d773738&linearv=4&tc=1&exp=1581620015&rn=493764583&sig=37a52027719612d1090ae7e0fa672768d802b41266189eba1e41af9e424e5772", */

            url:"http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8"

            /* protocol: "HLS",
            protData: {
                "com.microsoft.playready": {
                    laURL:
                        "https://content.uplynk.com/pr"
                }
                "com.widevine.alpha": {
                    laURL: "https://content.uplynk.com/wv"
                }
            } */
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
