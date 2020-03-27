import React, { Component } from "react";
import videojs from "video.js";

import "video.js/dist/video-js.css";
import "videojs-contrib-eme";
import "videojs-contrib-dash";
import "videojs-shaka";

class Player5 extends Component {
  componentDidMount() {
    const options = {
      liveui: true,
      // techOrder: ['shaka'],
      ...this.props
    };
    console.log(this.videoNode);
    this.player = videojs(this.videoNode, options);
    this.player.src({
      src:
        "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd",
      type: "application/dash+xml",
      keySystemOptions: [
        {
          name: "com.microsoft.playready",
          options: {
            serverURL:
              "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
          }
        },
        {
          name: "com.widevine.alpha",
          options: {
            serverURL: "https://widevine-proxy.appspot.com/proxy"
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

export default Player5;
