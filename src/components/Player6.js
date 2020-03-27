import React, { Component } from "react";
import shaka from "shaka-player";

require("mux.js");

class Player6 extends Component {
  constructor(props) {
    super(props);
    shaka.polyfill.installAll();
  }

  componentDidMount() {
    this.player = new shaka.Player(this.videoNode);
    shaka.media.ManifestParser.registerParserByExtension(
      "m3u8",
      shaka.hls.HlsParser
    );
    shaka.media.ManifestParser.registerParserByMime(
      "application/x-mpegURL",
      shaka.hls.HlsParser
    );
    window.player = this.player;
    this.player.addEventListener("error", this.onError);
    // this.player.configure("manifest.defaultPresentationDelay", 0);
    // this.player.configure("streaming.useNativeHlsOnSafari", false);
    console.log(this.player.getConfiguration());

    // .load(this.props.playURL)
    var manifestUri =
      // "https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd";
      "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd";
    // "https://content.jwplatform.com/manifests/yp34SRmf.m3u8";
    // "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8";
    // "https://storage.googleapis.com/shaka-live-assets/player-source.m3u8";
    // "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

    this.player
      .load(manifestUri)
      .then(() => {
        console.log("Ready");
      })
      .catch(this.onError);

    this.player.configure({
      drm: {
        servers: {
          "com.widevine.alpha": "https://widevine-proxy.appspot.com/proxy",
          "com.microsoft.playready": "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
        }
      }
    });

  }

  onError(error) {
    console.error("Error code", error.code, "object", error);
  }

  render() {
    return (
      <div>
        <video
          ref={node => (this.videoNode = node)}
          controls={true}
          autoPlay={true}
          // crossOrigin="use-credentials"
          width="720"
          height="360"
          preload="auto"
          type="application/x-mpegurl"
        />
      </div>
    );
  }
}

export default Player6;
