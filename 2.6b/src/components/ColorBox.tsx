import { useState } from "react";
import "./ColorBox.css"
const colorBoxRotation = ["red", "green", "blue", "yellow", "violet"]

function ColorBoxeuh() {
    const [color, setNewColor] = useState(0);
    const nextColor  = () =>{
        setNewColor((color + 1) % colorBoxRotation.length)
    }

    return(
        <div style={{backgroundColor: colorBoxRotation[color]}}>
        
        <button style = {{backgroundColor: colorBoxRotation[(color + 1) % colorBoxRotation.length]}} 
                onClick={() => nextColor()}>
                    {colorBoxRotation[(color + 1) % colorBoxRotation.length]}
        </button>
        <h3>{colorBoxRotation[color]}</h3>
        </div>
    )
}



export default ColorBoxeuh;