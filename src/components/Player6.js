import React, { Component } from "react";
import shaka from "shaka-player";

require("mux.js");

class Player6 extends Component {
  constructor(props) {
    super(props);
    shaka.polyfill.installAll();
  }

  componentDidMount() {
    console.log("object");
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
      // "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd";
      // "https://content.jwplatform.com/manifests/yp34SRmf.m3u8";
      // "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8";
      // "https://storage.googleapis.com/shaka-live-assets/player-source.m3u8";
      // "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
      // "https://media.axprod.net/TestVectors/v7-MultiDRM-MultiKey/Manifest_1080p.mpd";
      "https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-playready.ism/.mpd";

    this.player
      .load(manifestUri)
      .then(() => {
        console.log("Ready");
      })
      .catch(this.onError);

    this.player.configure({
      drm: {
        servers: {
          // "com.widevine.alpha":
            // "https://drm-widevine-licensing.axtest.net/AcquireLicense",
          // "https://widevine-proxy.appspot.com/proxy",
          "com.microsoft.playready":
            "https://test.playready.microsoft.com/service/rightsmanager.asmx?PlayRight=1&UseSimpleNonPersistentLicense=1"
          // "https://drm-playready-licensing.axtest.net/AcquireLicense"
          // "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
        }
        /* licenseRequestHeaders: {
          "X-AxDRM-Message":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjMzNjRlYjUtNTFmNi00YWUzLThjOTgtMzNjZWQ1ZTMxYzc4IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiODAzOTliZjUtOGEyMS00MDE0LTgwNTMtZTI3ZTc0OGU5OGMwIiwiZW5jcnlwdGVkX2tleSI6ImxpTkpxVmFZa05oK01LY3hKRms3SWc9PSJ9LHsiaWQiOiI5MDk1M2UwOS02Y2IyLTQ5YTMtYTI2MC03YTVmZWZlYWQ0OTkiLCJlbmNyeXB0ZWRfa2V5Ijoia1l0SEh2cnJmQ01lVmRKNkxrYmtuZz09In0seyJpZCI6IjBlNGRhOTJiLWQwZTgtNGE2Ni04YzNmLWMyNWE5N2ViNjUzMiIsImVuY3J5cHRlZF9rZXkiOiI3dzdOWkhITE1nSjRtUUtFSzVMVE1RPT0ifSx7ImlkIjoiNTg1ZjIzM2YtMzA3Mi00NmYxLTlmYTQtNmRjMjJjNjZhMDE0IiwiZW5jcnlwdGVkX2tleSI6IkFjNFVVbVl0Qko1blBROU4xNXJjM2c9PSJ9LHsiaWQiOiI0MjIyYmQ3OC1iYzQ1LTQxYmYtYjYzZS02ZjgxNGRjMzkxZGYiLCJlbmNyeXB0ZWRfa2V5IjoiTzZGTzBmcVNXb3BwN2JqYy9ENGxNQT09In1dfX0.uF6YlKAREOmbniAeYiH070HSJhV0YS7zSKjlCtiDR5Y"
        } */
      }
    });
  }

  onError(error) {
    console.error("Error code", error.code, "object", error);
  }

  render() {
    return (
      <div>
        <h2>{this.props.manifestUri}</h2>
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
