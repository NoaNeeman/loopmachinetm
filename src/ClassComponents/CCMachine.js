import React, { Component } from 'react';
import audioFile_1 from '../Loop files/_tambourine_shake_higher.mp3';
import audioFile_2 from '../Loop files/ALL TRACK.mp3';
import audioFile_3 from '../Loop files/B VOC.mp3';
import audioFile_4 from '../Loop files/DRUMS.mp3';
import audioFile_5 from '../Loop files/HE HE VOC.mp3';
import audioFile_6 from '../Loop files/JIBRISH.mp3';
import audioFile_7 from '../Loop files/LEAD 1.mp3';
import audioFile_8 from '../Loop files/UUHO VOC.mp3';
import FCMultiplayer from '../FunctionalComponents/FCMultiplayer';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';


export default class CCMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrAudioFiles: [
                { "id": 0, "audio": audioFile_1, "muted": false, "color": "teal" },
                { "id": 1, "audio": audioFile_2, "muted": false, "color": "silver" },
                { "id": 2, "audio": audioFile_3, "muted": false, "color": "aquamarine" },
                { "id": 3, "audio": audioFile_4, "muted": false, "color": "papayawhip" },
                { "id": 4, "audio": audioFile_5, "muted": false, "color": "yellow" },
                { "id": 5, "audio": audioFile_6, "muted": false, "color": "coral" },
                { "id": 6, "audio": audioFile_7, "muted": false, "color": "darkturquoise" },
                { "id": 7, "audio": audioFile_8, "muted": false, "color": "thistle" }
            ],
            play: false, //clicked 'play' to start playing all audio files 
            stop: false, //clicked 'stop' to stop playing all audio files
            loop: true //audio files should be played in a loop
        };
    }

    handlePlay = (e) => { //user clicked on 'play'
        this.setState({ play: true, stop: false });
    }

    handleMuted = (data) => { //user clicked on the volume icon of an audio file - handle from child 
        let arrAudioFiles = this.state.arrAudioFiles;
        arrAudioFiles[data].muted = !arrAudioFiles[data].muted;
        this.setState({ arrAudioFiles }) 
    }

    handleStop = (e) => { //user clicked on 'stop'
        this.setState({ stop: true, play: false });
    }

    handleLoop = (e) => { //user switched the 'loop' option
        this.setState({ loop: e.target.checked })
    }

    render() {
        return <div>
            <FCMultiplayer arrAudioFiles={this.state.arrAudioFiles} play={this.state.play} stop={this.state.stop} loop={this.state.loop} sendMuted={this.handleMuted} />
            <input type="button" className="btn btn-primary mr-2" value="Play" onClick={this.handlePlay}></input>
            <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={this.handleStop}></input>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} onChange={this.handleLoop} label="Loop" />
            </FormGroup>
        </div>;
    }
}
