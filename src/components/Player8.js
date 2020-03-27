import React, { Component } from "react";

import videojs from "video.js";

import "video.js/dist/video-js.css";
// import "videojs-shaka";
import "videojs-contrib-eme";
import "videojs-contrib-hls.js";
import "videojs-contrib-dash";
import "@videojs/http-streaming";

class Player8 extends Component {
  constructor(props) {
    super(props);
    const METHODS = ["onError"];

    METHODS.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  componentDidMount() {
    const optionsVideoJS = {
      html5: {
        hls: {
          // withCredentials: true
        }
      }
    };
    this.player = videojs(this.videoNode, optionsVideoJS);

    // this.player.eme();

    var src = {
      // src:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      // src: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
      // src: "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8",
      src: "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd",
      // src: "https://s3.amazonaws.com/_bc_dml/example-content/sintel_dash/sintel_vod.mpd",
      //   src: "http://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest",
      //   src: "http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd",
        // src: "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd",
        // src: "https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd",
      // src: this.props.playURL,
      // withCredentials: true,
      type: "application/dash+xml",
      // type: "application/x-mpegURL",
      keySystemOptions: [
        {
          name: "com.microsoft.playready", //"com.widevine.alpha", //"com.microsoft.playready",
          options: {
            serverURL:
              "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
            // serverURL: this.props.streamInfo.licenseAcquisitionUrl
          }
        },
        {
          name: "com.widevine.alpha", //"com.widevine.alpha", //"com.microsoft.playready",
          options: {
            serverURL: "https://widevine-proxy.appspot.com/proxy"
          }
        }
      ],
      keySystems: {
        "com.widevine.alpha": "https://widevine-proxy.appspot.com/proxy"
        
      }
      /*       keySystems: {
        "com.microsoft.playready": "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
        
      } */
    };

    this.player.src(src);
    this.player.on("play", this.onPlay.bind(this));
  }

  onPlay() {
    console.log("onPlay");
  }

  onError(e) {
    console.error("ERROR: " + JSON.stringify(e));
  }

  componentWillUnmount() {
    if (this.player) {
      videojs(this.videoNode).dispose();
      // this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <video
          ref={node => (this.videoNode = node)}
          className="video-js vjs-16-9"
          controls={true}
          autoPlay={true}
          // crossOrigin="use-credentials"
          width="640"
          height="268"
          preload="auto"
        />
      </div>
    );
  }
}

export default Player8;
