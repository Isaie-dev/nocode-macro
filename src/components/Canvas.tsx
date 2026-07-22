//imports
import { useRef, MouseEvent, useState } from 'react';

export default function Canvas() {
//script

const [isHolding, setIsHolding] = useState(false);

const [mouseCoordinates, setMouseCoordinates] = 
useState(
    {
        x : 0,
        y : 0
    }
)

const [cameraCoordinates, setCameraCoordinates] = 
useState(
    {
        x : 0,
        y : 0
    }
)
const canvasRef = useRef<HTMLDivElement>(null);
function isntHolding(){
    setIsHolding(false);
}
function wichClick(event: MouseEvent<HTMLDivElement>) {
    if (event.button === 0) {
        setIsHolding(true);
        console.log("isHolding = ",isHolding)
        setMouseCoordinates(
            {
                x : event.clientX,
                y : event.clientY
            }
        )
        console.log("mouseCoordinates = ",mouseCoordinates)
    }
}
function scrollIfHolding(event: MouseEvent<HTMLDivElement>){
    if (isHolding === true){

        let deltaX = (event.clientX - mouseCoordinates.x)
        let deltaY = (event.clientY - mouseCoordinates.y)
        console.log("deltaX = ",deltaX)
        console.log("deltaY = ",deltaY)

        setCameraCoordinates(
            {
                x : cameraCoordinates.x + deltaX,
                y : cameraCoordinates.y + deltaY
            }
        )
        console.log("cameraCoordinates = ",cameraCoordinates)

        setMouseCoordinates(
            {
                x : event.clientX,
                y : event.clientY
            }
        )
        console.log("mouseCoordinates = ",mouseCoordinates)

    }

}

//visual
return (
    <div className="canvas-div">
        <div ref={canvasRef} style={{backgroundPositionX: cameraCoordinates.x + "px", backgroundPositionY: cameraCoordinates.y + "px"}} onMouseDown={wichClick} onMouseUp={isntHolding} onMouseMove={scrollIfHolding} onMouseLeave={isntHolding} className="canvas">
        </div>
    </div>
  );
}  