import React, { Component } from "react";
import ReactPlayer from "react-player";
import videojs from "video.js";

export default class Player extends Component {
    constructor(props) {
        super(props);

        this.ref = player => {
            this.player = player;
        };
    }

    componentDidMount() {
        console.log(this.player.getInternalPlayer());
        this.playerjs = videojs(
            this.player.getInternalPlayer(),
            this.props,
            () => {
                console.log("onPlayerReady");
            }
        );
        console.log(this.playerjs);
    }

    pause() {
        console.log("Pause");
        console.log(this.player.getInternalPlayer());
        this.player.getInternalPlayer().pause();
    }

    play() {
        console.log("Play");
        this.player.getInternalPlayer().play();
    }

    render() {
        console.log(this.player);

        return (
            <div>
                <button onClick={this.pause.bind(this)}>Pause</button>
                <button onClick={this.play.bind(this)}>Play</button>
                <div />
                <ReactPlayer
                    ref={this.ref}
                    // url="https://media.axprod.net/TestVectors/v7-MultiDRM-SingleKey/Manifest_1080p.mpd"
                    // url="https://content.uplynk.com/event/ext/d09b16c953aa40c98dd8c513526aca5a/a112739597.m3u8?oid=d09b16c953aa40c98dd8c513526aca5a&ad=espn_latamvod_en&ad.vast3=1&ad.vid=ec52f844-341c-4120-b041-487c81f3be6a&ad.tfcd=0&ad.adUnit=/latin_south/espnplay/null&ad.pp=espn-core-ssai&ad.vip=54.198.38.239&ad.ppid=&ad.description_url=null&ss_req=1&ad.ssss=vdms&ad.hl=en&ad.npa=0&ad.msid=null&ad.an=espnapp&ad.extcalls=liveconnect&ad.cust_params=chan=latin_south%26authp=null%26nlsnAppID=null%26nlsnDevGrp=devgrp%2CUNWN%26vdm=vod%26devOS=null%26devType=null%26plt=null%26swid=%26unid=null%26isDnt=0%26isAutoplay=0%26isMute=0%26vps=null%26stp=vdms%26lang=en&eid=a112739597&ct=e&tc=1&exp=1581696006&rn=947078760&sig=3c8636c1cd258589e31ae34b710dc75bb3c59193b3eb432441449370fe1a33ab"
                    url="http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8"
                    playing
                    controls
                    access-control-allow-origin
                    config={{
                        file: {
                            hlsOptions: {},
                            hlsVersion: "0.12.4",
                            attributes: {
                                autoPlay: true,
                                crossOrigin: "use-credentials",
                                className: "vjs-default-skin",
                                controls: true
                            }
                        }
                    }}
                />
            </div>
        );
    }
}
