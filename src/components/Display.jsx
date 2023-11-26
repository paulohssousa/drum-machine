import { useSelector } from "react-redux";
import "../sass/display.scss"

function Display() {
    const { drumPad } = useSelector((state) => state.drum);

    return (
        <div id="display" >{drumPad}</div>
    )
}

export default Display