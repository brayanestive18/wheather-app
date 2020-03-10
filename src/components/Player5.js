import React, { Component } from "react";

import videojs from "video.js";

import "video.js/dist/video-js.css";
import "videojs-contrib-eme";
import "videojs-contrib-dash";
// import "videojs-shaka";

class Player4 extends Component {
    componentDidMount() {
        const options = {
            liveui: true,
            ...this.props
        };
        console.log(this.videoNode);
        this.player = videojs(this.videoNode, options);
        this.player.src({
            src:
                "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd",
            // src: this.props.playURL
            type: "application/dash+xml",
            keySystemOptions: [
                {
                    name: "com.microsoft.playready",
                    options: {
                        // url: this.props.streamInfo.licenseAcquisitionUrl
                        serverURL:
                            "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
                    }
                }
            ]
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
