import "../sass/drumPad.scss"

function DrumPad(props) { 
    
    function handleClick(event) {
        props.playAudio(event);
    }

    return (
        <button className="drum-pad" id={props.name} onClick={handleClick}>
            {props.keyValue}
            <audio id={props.keyValue} src={props.source} className="clip"></audio>
        </button>
    )
}

export default DrumPad