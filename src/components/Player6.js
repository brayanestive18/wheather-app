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
    // var manifestUri =
    // "https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd";
    // "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd";
    // "https://content.jwplatform.com/manifests/yp34SRmf.m3u8";
    // "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8";
    // "https://storage.googleapis.com/shaka-live-assets/player-source.m3u8";
    // "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
    // "https://content.uplynk.com/channel/d71e847cb6d1424a8288996384a8ebc1.mpd?oid=d09b16c953aa40c98dd8c513526aca5a&ad=espn_latamlive_es&ad.vast3=1&ad.vid=d87aee04-c5a2-4999-84e6-d73d17cb8a87&ad.tfcd=0&ad.adUnit=/espn2_colombia/espnplay/null&ad.pp=espn-core-ssai&ad.vip=179.13.112.247&ad.ppid=&ad.description_url=null&ss_req=1&ad.ssss=vdms&ad.hl=es&ad.npa=0&ad.msid=null&ad.an=espnapp&ad.extcalls=liveconnect&ad.cust_params=chan=espn2_colombia%26authp=null%26nlsnAppID=null%26nlsnDevGrp=devgrp%2CUNWN%26vdm=live%26devOS=null%26devType=null%26plt=null%26swid=%26unid=null%26isDnt=0%26isAutoplay=0%26isMute=0%26vps=null%26stp=vdms%26lang=es%26ip=179.13.112.247&eid=n177a&ct=c&tc=1&exp=1585430313&rn=1377491800&srs=templatetimeline&drm_policy_name=espn_live_drm&geo=n177&sig=6d94163144bc9e58479f4077f3ab0595c31f883f313fd9c260c5a2807786bb7f";

    this.player
      .load(this.props.manifestUri)
      .then(() => {
        console.log("Ready");
      })
      .catch(this.onError);

    this.player.configure({
      drm: {
        servers: {
          "com.widevine.alpha": "https://widevine-proxy.appspot.com/proxy",
          "com.microsoft.playready": "https://content.uplynk.com/pr"
          // "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
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
