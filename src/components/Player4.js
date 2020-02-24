import React, { Component } from "react";

import videojs from "video.js";

import "video.js/dist/video-js.css";

import "videojs-contrib-eme";


class Player4 extends Component {
    componentDidMount() {
        const options = {
            liveui: true,
            html5: {
                hls: {
                    overrideNative: !videojs.browser.IS_SAFARI,
                    valueOfwithCredentials: true,
                    enableLowInitialPlaylist: true,
                    withCredentials: true
                }
            },
            ...this.props
        };
        console.log(this.videoNode);
        this.player = videojs(this.videoNode, options, () => {
            console.log("plugin: ", this.player.hasPlugin("eme"));
        });
        this.player.eme();
        this.player.src({
            src: "http://www.streambox.fr/playlists/test_001/stream.m3u8",
            type: "application/x-mpegURL",
            emeHeaders: {
                "Common-Header": "value"
            },
            keySystems: {
                "com.widevine.alpha": {
                    licenseUri: "https://content.uplynk.com/wv"
                }

                /* "com.microsoft.playready": {licenseUri: "https://content.uplynk.com/pr"} */
                
            }
        });
        console.log("Eme: ", this.player);

        this.player.on("play", this.onPlay.bind(this));
    }

    onPlay() {
        console.log("onPlay");
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    /* componentWillReceiveProps(nextProps) {
        if (nextProps.themeName !== this.props.themeName) {
            this.player.removeClass(`vjs-theme-${this.props.themeName}`);
            this.player.addClass(`vjs-theme-${nextProps.themeName}`);

            this.player.src(nextProps.sources);
            this.player.poster(nextProps.poster);
        }
    } */
    render() {
        return (
            <div>
                <video
                    ref={node => (this.videoNode = node)}
                    className="video-js vjs-16-9"
                    controls
                    autoPlay
                    width="640"
                    height="268"
                    preload="auto"
                />
            </div>
        );
    }
}

export default Player4;
