import React, { Component } from "react";
import ReactPlayer from "react-player";
import videojs from "video.js";

import "videojs-contrib-eme";
import "video.js/dist/video-js.css";

export default class Player extends Component {
    constructor(props) {
        super(props);

        this.ref = player => {
            this.player = player;
        };
    }

    componentDidMount() {
        //console.log(this.player.getInternalPlayer());
        /*         this.playerjs = videojs(
            this.player.getInternalPlayer(),
            this.props,
            () => {
                console.log("onPlayerReady");
            }
        
        );*/

        this.internalPlayer = this.player.getInternalPlayer();

        const options = {
            liveui: true,
/*             html5: {
                hls: {
                    overrideNative: !videojs.browser.IS_SAFARI,
                    valueOfwithCredentials: true,
                    enableLowInitialPlaylist: true,
                    withCredentials: true
                }
            }, */
            ...this.props
        };
        console.log("Internal Player: ", this.internalPlayer);
        this.internalPlayer.className = "video-js vjs-16-9";
        this.player = videojs(this.internalPlayer, options, () => {
            console.log("plugin: ", this.player.hasPlugin("eme"));
        });
        // this.playerJS.eme();
        /*         this.playerJS.src({
            keySystems: {
                "com.microsoft.playready": {
                    licenseUri: "https://content.uplynk.com/pr"
                }
            }
        }); */
    }

    pause() {
        console.log("Pause");
        this.internalPlayer().pause();
    }

    play() {
        console.log("Play");
        this.internalPlayer().play();
    }

    render() {
        const player = (
            <ReactPlayer
                //className= "video-js vjs-16-9" //"react-player"
                ref={this.ref}
                url="http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/TANT/tu1_manifest.m3u8"
                // url="https://content.uplynk.com/event/ext/d09b16c953aa40c98dd8c513526aca5a/a112707848.m3u8?oid=d09b16c953aa40c98dd8c513526aca5a&ad=espn_latamvod_en&ad.vast3=1&ad.vid=2f281b04-2140-4e93-a52f-3d3e237150e9&ad.tfcd=0&ad.adUnit=/latin_south/espnplay/null&ad.pp=espn-core-ssai&ad.vip=54.198.38.239&ad.ppid=&ad.description_url=null&ss_req=1&ad.ssss=vdms&ad.hl=en&ad.npa=0&ad.msid=null&ad.an=espnapp&ad.extcalls=liveconnect&ad.cust_params=chan=latin_south%26authp=null%26nlsnAppID=null%26nlsnDevGrp=devgrp%2CUNWN%26vdm=vod%26devOS=null%26devType=null%26plt=null%26swid=%26unid=null%26isDnt=0%26isAutoplay=0%26isMute=0%26vps=null%26stp=vdms%26lang=en&eid=a112707848&ct=e&tc=1&exp=1583555044&rn=1284670073&sig=51d96df27007763d6002c55f59cd70a963b4fae83f7ee8801144c3e479d95462"
                width="100%"
                height="100%"
                config={{
                    file: {
                        hlsOptions: {
                            // debug: true,
                            // capLevelToPlayerSize:true,
                            // forceKeyFrameOnDiscontinuity: false,
                        },
                        hlsVersion: "0.12.4",
                        attributes: {
                            autoPlay: true,
                            crossOrigin: "use-credentials",
                            controls: true
                        }
                    }
                }}
            />
        );

        return (
            <div>
                {player}
                <button onClick={this.pause.bind(this)}>Pause</button>
                <button onClick={this.play.bind(this)}>Play</button>
            </div>
        );
    }
}
