import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";
// import videojs from "video.js";
import "videojs-contrib-eme";
import "@videojs/http-streaming";
import "videojs-contrib-dash";

// pausa adelantar retroceder pausa verde 1 amarillo -> Rota con el boton tigo

export default class Player3 extends Component {
    player = {};
    /*    state = {
        video: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            poster: "https://images.app.goo.gl/mZAr4S1tm1qQzxCy5"
        }
    }; */

    onPlayerReady(player) {
        console.log("Player is ready: ", player);
        //console.log(videojs('videojs-contrib-eme'))
        this.player = player;
        // this.player.eme();
        this.player.src({
            // src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            src: "http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd",
            emeHeaders: {
                "Common-Header": "value"
            },
            keySystems: {
                "com.widevine.alpha": "https://content.uplynk.com/wv"

                /* "com.microsoft.playready": {
                    url: "https://content.uplynk.com/pr",
                    licenseHeaders: {
                        "Some-Header": "value"
                    }
                } */
            }
        });
        console.log("Eme: ", this.player);
    }

    onVideoPlay(duration) {
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration) {
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration) {
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration) {
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked(from, to) {
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd() {
        console.log("Video ended");
    }

    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    autoplay={true}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        );
    }
}
