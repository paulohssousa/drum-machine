import Display from "./Display"
import DrumPad from "./DrumPad"
import { useDispatch } from "react-redux";
import { displayDrumPad } from "../redux/drum";
import "../sass/drumMachine.scss"

function DrumMachine() {
    const dispatch = useDispatch();

    function handleAudio(event) {
        const audio = event.target.querySelector("audio");
        audio.currentTime = 0;
        audio.play().catch((error) => console.log(error));
        dispatch(displayDrumPad(event.target.id));
    }

    return (
        <div id="drum-machine" >
            <div id="drum-pads" >
                <DrumPad keyValue="Q" name="heater-1" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="W" name="heater-2" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="E" name="heater-3" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="A" name="heater-4" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="S" name="clap" source="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="D" name="open-hh" source="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="Z" name="kick-n-hat" source="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="X" name="kick" source="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" playAudio={ handleAudio }/>
                <DrumPad keyValue="C" name="closed-hh" source="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" playAudio={ handleAudio }/>
            </div>
            <Display />
        </div>
    )
}

export default DrumMachine