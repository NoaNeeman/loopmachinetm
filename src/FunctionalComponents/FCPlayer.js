import { React, useRef, useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function FCPlayer(props) {
    const player = useRef(); //ref - audio file
    const divAudio = useRef(); //ref - div audio 

    function handlePlayAudio() { //user clicked on 'play'
        if (!props.audioFile.muted) //play only the unmuted audio files
            player.current.audio.current.play();
    };

    // store the loop prop in local state
    const [loop] = useState(props.loop);
    
    useEffect(() => {
        if (props.loop !== loop) { //detect changes 
            player.current.audio.current.loop = props.loop;
        }
    }, [props.loop]);


    function checkMuted(e) { //user clicked on the volume icon of an audio file 
        if (e.target.volume == 0) {
            player.current.audio.current.pause(); //pause from playing
        }
        props.sendMuted(props.audioFile.id);
      
    }

    function handleStopAudio() { //user clicked on 'stop'
        if (props.stop) {
            player.current.audio.current.pause(); //stop playing
            player.current.audio.current.currentTime = 0; //go back to start
        }
    }

    return (
        <div className='player'>
            {props.play ? handlePlayAudio() : handleStopAudio()}
            <div className='divAudio' ref={divAudio}></div>
            <AudioPlayer onVolumeChange={checkMuted}
                autoPlay
                src={props.audioFile.audio}
                muted={props.audioFile.muted}
                showJumpControls={false}
                style={{ background: props.audioFile.color }}
                ref={player}
                loop={props.loop}
                listenInterval="10"
                onListen={e => divAudio.current.style.width =((player.current.audio.current.currentTime) / (player.current.audio.current.duration + 2.5) * 100 ) + "%"}
            />
        </div>)
}

