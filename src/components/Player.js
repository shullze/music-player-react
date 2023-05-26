import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; //component itself
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"; // actual icons
import {useRef, useEffect} from "react";

function Player({currentSong, isPlaying, setIsPlaying, songs, setCurrentSong, setSongs}) {

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        percentage: 0
    })

    useEffect(()=>{
        const changeSongActiveStatus = songs.map(
         song => {
             if(song.id === currentSong.id){
                 return{
                     ...song,
                     active: true,
                 };
             }else {
                 return {
                     ...song,
                     active: false,
                 };
             }
         }
        )
        setSongs(changeSongActiveStatus)
    }, [currentSong])

    const audioRef = useRef(null)

    function playSongHandler(){
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    function timeUpdateHandler(event){
        const songCurrentTime = event.target.currentTime;
        const songDuration = event.target.duration;
        const roundedCurrentTime = Math.round(songCurrentTime)
        const roundedDuration = Math.round(songDuration)
        const animationPercentage = Math.round((roundedCurrentTime/roundedDuration)*100)
        setSongInfo(prevState => {
            return(
                {...prevState,
                    currentTime: songCurrentTime,
                    duration: songDuration,
                    animationPercentage: animationPercentage
                }
            )
        })
    }

    function dragHnadler(event){
        audioRef.current.currentTime = event.target.value
        setSongInfo(prevState => {
            return(
                {...prevState, currentTime: event.target.value}
            )
        })
    }

    // function to format time
    function getTime(time){
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    function autoPlayHandler(){
        if(isPlaying){
            audioRef.current.play()
        }
    }

    function skipTrackHandler(direction){
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if(direction === "skip-forward"){
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === "skip-back"){
            if((currentIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1])
                return
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
    }

    const trackAnimation = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className='player'>
            <div className='time-control'>
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className='track'>
                    <input
                        type='range'
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHnadler}
                    />
                    <div style={trackAnimation} className='animate-track'></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon
                    className='skip-back'
                    icon={faAngleLeft}
                    size='2x'
                    onClick={()=> skipTrackHandler("skip-back")}
                />
                <FontAwesomeIcon
                    className='play'
                    icon={isPlaying ? faPause : faPlay}
                    size='2x'
                    onClick={playSongHandler}
                />
                <FontAwesomeIcon
                    className='skip-forward'
                    icon={faAngleRight}
                    size='2x'
                    onClick={()=> skipTrackHandler("skip-forward")}
                />
            </div>
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onLoadedData={autoPlayHandler}
            >

            </audio>
        </div>
    );
}

export default Player;