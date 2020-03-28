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
      // "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd";
      //  "https://dash.akamaized.net/dash264/TestCases/1a/sony/SNE_DASH_SD_CASE1A_REVISED.mpd";
      // "http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd";
      // "https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd";
      // "https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/manifest";
      "https://content.uplynk.com/channel/d71e847cb6d1424a8288996384a8ebc1.mpd?oid=d09b16c953aa40c98dd8c513526aca5a&ad=espn_latamlive_es&ad.vast3=1&ad.vid=d87aee04-c5a2-4999-84e6-d73d17cb8a87&ad.tfcd=0&ad.adUnit=/espn2_colombia/espnplay/null&ad.pp=espn-core-ssai&ad.vip=179.13.112.247&ad.ppid=&ad.description_url=null&ss_req=1&ad.ssss=vdms&ad.hl=es&ad.npa=0&ad.msid=null&ad.an=espnapp&ad.extcalls=liveconnect&ad.cust_params=chan=espn2_colombia%26authp=null%26nlsnAppID=null%26nlsnDevGrp=devgrp%2CUNWN%26vdm=live%26devOS=null%26devType=null%26plt=null%26swid=%26unid=null%26isDnt=0%26isAutoplay=0%26isMute=0%26vps=null%26stp=vdms%26lang=es%26ip=179.13.112.247&eid=n177a&ct=c&tc=1&exp=1585429715&rn=1282366311&srs=templatetimeline&drm_policy_name=espn_live_drm&geo=n177&sig=13ab07b10553f2b4bbba6f659a9a412776a976a81815057d966ad295a541a628";
    const protData = {
      "com.microsoft.playready": {
        serverURL: "https://content.uplynk.com/pr"
          // "https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=="
      }/* ,

      "com.widevine.alpha": {
        serverURL: "https://widevine-proxy.appspot.com/proxy"
        httpRequestHeaders: {
          "X-AxDRM-Message": licenseToken
        } 
      } */
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
