//imports
import { useRef, MouseEvent, useState } from 'react';

export default function Canvas() {
//script
const [backgroundZoom, setBackgroundZoom] = useState(4.5);
const [placedCartPositions, setPlacedCartPositions] = 
useState(
    {   
        top : 400,
        left : 700
    }
);

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
        setMouseCoordinates(
            {
                x : event.clientX,
                y : event.clientY
            }
        )
    }
}
function scrollIfHolding(event: MouseEvent<HTMLDivElement>){
    if (isHolding === true){

        let deltaX = (event.clientX - mouseCoordinates.x)
        let deltaY = (event.clientY - mouseCoordinates.y)

        setCameraCoordinates(
            {
                x : cameraCoordinates.x - deltaX,
                y : cameraCoordinates.y - deltaY
            }
        )

        setMouseCoordinates(
            {
                x : event.clientX,
                y : event.clientY
            }
        )

        setPlacedCartPositions(
            {
                top : placedCartPositions.top - deltaY,
                left : placedCartPositions.left - deltaX
            }
        )
    }

}
function zoomUpOrDown(event: React.WheelEvent<HTMLDivElement>){
if  (event.deltaY < 0){
    if (backgroundZoom < 10) {
        setBackgroundZoom(backgroundZoom +0.2)
    }
}
else {
    if (backgroundZoom > 1) {
        setBackgroundZoom(backgroundZoom -0.2)
    }
}
}
//visual
return (
    <div className="canvas-div">
        <div ref={canvasRef} style={{backgroundPositionX: cameraCoordinates.x + "px", backgroundPositionY: cameraCoordinates.y + "px", backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) "+ backgroundZoom / 10 +"vh ,rgba(212, 0, 190, 0) "+ backgroundZoom / 10 +"vh)", backgroundSize:`${backgroundZoom}vh ${backgroundZoom}vh`}} onMouseDown={wichClick} onMouseUp={isntHolding} onMouseMove={scrollIfHolding} onMouseLeave={isntHolding} onWheel={zoomUpOrDown} className="canvas">
            <div style={{transform: `scale(${backgroundZoom})`, left: placedCartPositions.left + "px", top: placedCartPositions.top + "px"}} className="add-cart placed-cart"><p className="cart-mouse">Mouse</p><p className="info">?</p></div>
        </div>
    </div>
  );
}  