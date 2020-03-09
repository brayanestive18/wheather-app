import React, { Component } from "react";

import videojs from "video.js";

import "video.js/dist/video-js.css";
import "videojs-contrib-eme";
// import "videojs-shaka";

class Player4 extends Component {
  componentDidMount() {
    const options = {
      liveui: true,
      /* html5: {
                hls: {
                    overrideNative: !videojs.browser.IS_SAFARI,
                    valueOfwithCredentials: true,
                    enableLowInitialPlaylist: true,
                    withCredentials: true
                }
            }, */
      ...this.props
    };
    console.log(this.videoNode);
    this.player = videojs(this.videoNode, options, () => {
      console.log("plugin: ", this.player.hasPlugin("eme"));
    });
    this.player.eme();
    this.player.src({
      // src: "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8",
      src:
        "http://profficialsite.origin.mediaservices.windows.net/c51358ea-9a5e-4322-8951-897d640fdfd7/tearsofsteel_4k.ism/manifest(format=mpd-time-csf)",
      // src: this.props.playURL
      // type: "application/dash+xml",
      keySystems: {
        "com.microsoft.playready": {
          // url: this.props.streamInfo.licenseAcquisitionUrl
          url:
            "http://playready-testserver.azurewebsites.net/rightsmanager.asmx?PlayRight=1&UseSimpleNonPersistentLicense=1"
        }
      }
      /* emeHeaders: {
                "Common-Header": "value"
            },
            keySystems: {
                "com.widevine.alpha": {
                    licenseUri: "https://content.uplynk.com/wv"
                },

                "com.microsoft.playready": {
                    licenseUri: "https://content.uplynk.com/pr"
                }
            } */
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
