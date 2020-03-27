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
      src: "https://content.uplynk.com/event/ext/d09b16c953aa40c98dd8c513526aca5a/a112808469.m3u8?oid=d09b16c953aa40c98dd8c513526aca5a&ad=espn_latamvod_en&ad.vast3=1&ad.vid=cdfa4494-1758-4f2b-a2a3-c78e713983c9&ad.tfcd=0&ad.adUnit=/latin_south/espnplay/null&ad.pp=espn-core-ssai&ad.vip=200.13.250.200&ad.ppid=&ad.description_url=null&ss_req=1&ad.ssss=vdms&ad.hl=en&ad.npa=0&ad.msid=null&ad.an=espnapp&ad.extcalls=liveconnect&ad.cust_params=chan=latin_south%26authp=null%26nlsnAppID=null%26nlsnDevGrp=devgrp%2CUNWN%26vdm=vod%26devOS=null%26devType=null%26plt=null%26swid=%26unid=null%26isDnt=0%26isAutoplay=0%26isMute=0%26vps=null%26stp=vdms%26lang=en&eid=a112808469&ct=e&tc=1&exp=1584025822&rn=1771101577&sig=6d3619d92a0aa2457f2d6ece03747f13afa6e8104ac3524bdc6bf4ecb8da0dbf"
      // src: this.props.playURL
      // type: "application/dash+xml",
      // keySystems: {
        // "com.microsoft.playready": ""
        /* {
          url: this.props.streamInfo.licenseAcquisitionUrl
          // url:
            // "http://playready-testserver.azurewebsites.net/rightsmanager.asmx?PlayRight=1&UseSimpleNonPersistentLicense=1"
        } */
      // }

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
