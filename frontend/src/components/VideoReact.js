import React from "react";
import ReactPlayer from "react-player";
import VideoControls from "./VideoControls";
import cryptVideo from "../video/cryptVideo.mp4";
import { useState } from "react";

function VideoReact() {
    const [state, setState] = useState({
        playing: false,
        volume: 0.5
    })

    const{
        playing,
        volume
    } = state

    const handlePlay = () => {
        setState({...state, playing: !state.playing})
    }

    const handleVolume = (e) => {
        setState({...state, volume: e.target.value})
    }
    
    return(
        <>
        <div className="video__wrapper">
                <ReactPlayer 
                  url= {cryptVideo}
                  playing= {playing}
                  controls= {false}
                  volume = {volume}
                  width="100%"
                  height="100%"
                />
                
                <VideoControls 
                    handlePlay = {handlePlay}
                    handleVolume = {handleVolume}
                    playing = {playing}
                    volume = {volume}
                />
              </div>
        </>
    )
}

export default VideoReact; 

