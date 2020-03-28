import React, { Component } from "react";
import dashjs from "dashjs";

class Player7 extends Component {
  componentDidMount() {
    var manifestUri =
      // "https://content.jwplatform.com/manifests/yp34SRmf.m3u8";
      // "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8";
      // "https://storage.googleapis.com/shaka-live-assets/player-source.m3u8";
      // "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
      // "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
      "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd";
      //  "https://dash.akamaized.net/dash264/TestCases/1a/sony/SNE_DASH_SD_CASE1A_REVISED.mpd";
      // "http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd";
      // "https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd";

    const protData = {
      "com.microsoft.playready": {
        serverURL:
          "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
      },

      "com.widevine.alpha": {
        serverURL: "https://widevine-proxy.appspot.com/proxy"
        /* httpRequestHeaders: {
          "X-AxDRM-Message": licenseToken
        } */
      }
    };

    this.player = dashjs.MediaPlayer().create();
    this.player.setProtectionData(protData);
    this.player
      .getProtectionController()
      .getKeySystems()
      .forEach(function(item) {
        if (item.systemString === "com.microsoft.playready") {
          item.setPlayReadyMessageFormat("utf8");
        }
      });
    this.player.initialize(this.videoNode, manifestUri, true);

    // this.player.addEventListener("error", this.onError);
    // this.player.configure("manifest.defaultPresentationDelay", 0);
    // this.player.configure("streaming.useNativeHlsOnSafari", false);
    console.log(this.player);
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

export default Player7;
