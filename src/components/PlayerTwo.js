import React, { Component } from "react";
import ReactDOM from "react-dom";
import MediaPlayer from "../utils/hasplayer.min";

import "./PlayerTwo.css";

export default class PlayerTwo extends Component {
    constructor() {
        super();
        const METHODS = ["loadeddata", "play", "pause", "onError", "onWarning"];

        METHODS.forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    play() {
        console.log("Play");
        this.videoPlayer.play();
    }

    loadeddata() {
        console.log("loadeddata");
    }

    pause() {
        console.log("pause");
        this.videoPlayer.pause();
    }

    onError(e) {
        console.error("ERROR: " + JSON.stringify(e));
    }

    onWarning(e) {
        console.warn("WARN: " + JSON.stringify(e));
    }

    componentDidMount() {
        this.videoPlayer = ReactDOM.findDOMNode(this.refs.videoPlayer);

        var stream = {
            /* url:
                "https://content.uplynk.com/a1850dcd4c90444084a999c2c324da34.m3u8?cid=a1850dcd4c90444084a999c2c324da34&ct=a&eid=a1850dcd4c90444084a999c2c324da34&ad.caid=5e45435cbe6ab3090d773738&linearv=4&tc=1&exp=1581620015&rn=493764583&sig=37a52027719612d1090ae7e0fa672768d802b41266189eba1e41af9e424e5772", */

            /* url:"https://content.uplynk.com/event/ext/d09b16c953aa40c98dd8c513526aca5a/a112789344.m3u8?oid=d09b16c953aa40c98dd8c513526aca5a&ad=espn_latamvod_es&ad.vast3=1&ad.vid=5c86c839-1b91-4108-88dc-4e04bb85f3a0&ad.tfcd=0&ad.adUnit=/latin_south/espnplay/null&ad.pp=espn-core-ssai&ad.vip=190.70.41.161&ad.ppid=&ad.description_url=null&ss_req=1&ad.ssss=vdms&ad.hl=es&ad.npa=0&ad.msid=null&ad.an=espnapp&ad.extcalls=liveconnect&ad.cust_params=chan=latin_south%26authp=null%26nlsnAppID=null%26nlsnDevGrp=devgrp%2CUNWN%26vdm=vod%26devOS=null%26devType=null%26plt=null%26swid=%26unid=null%26isDnt=0%26isAutoplay=0%26isMute=0%26vps=null%26stp=vdms%26lang=es&eid=a112789344&ct=e&tc=1&exp=1583447881&rn=1769342494&sig=3953ab35bccae1edd5effd774f387351974acc83f2df02742b612e44ba54efe5", */
            url:"http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8",
            type: "application/x-mpegURL",

/*             protocol: "HLS",
            protData: {
                "com.microsoft.playready": {
                    laURL:
                        "https://content.uplynk.com/pr"
                }
                 "com.widevine.alpha": {
                    laURL: "https://content.uplynk.com/wv"
                }
            }  */
        };

        this.mediaPlayer = new MediaPlayer();
        this.mediaPlayer.init(this.videoPlayer);
        this.mediaPlayer.addEventListener(
            "loadeddata",
            this.loadeddata.bind(this)
        );
        this.mediaPlayer.addEventListener("error", this.onError.bind(this));
        this.mediaPlayer.addEventListener("warning", this.onWarning.bind(this));
        this.mediaPlayer.setAutoSwitchQuality(true);
        this.mediaPlayer.setScheduleWhilePaused(true);
        this.mediaPlayer.load(stream);
    }

    render() {
        return (
            <div ref="divRef">
                <video
                    className="player"
                    id="videoPlayer"
                    controls
                    ref="videoPlayer"
                    autoPlay
                    
                    /* crossOrigin="include"
                    encrypted-media
                    picture-in-picture
                    accelerometer
                    gyroscope */
                ></video>
                <div>
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.pause}>Pause</button>
                </div>
{/*                 <iframe
                    width="560"
                    height="315"
                    src=""
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe> */}
            </div>
        );
    }
}
