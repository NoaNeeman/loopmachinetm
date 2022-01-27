import React from 'react';
import FCPlayer from './FCPlayer';

export default function FCMultiplayer(props) {

    function sendMuted(data) { //user clicked on the volume icon of an audio file - handle from child 
        props.sendMuted(data);
    }

    //for each item of audio in the array
    const listItems = props.arrAudioFiles.map((item, index) => 
        <FCPlayer key={index} audioFile={item} play={props.play} stop={props.stop} loop={props.loop} sendMuted={sendMuted} />
    )

    return (
        <div>
            {listItems}
        </div>)
}   
