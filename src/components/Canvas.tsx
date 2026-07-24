//imports
import { useRef, MouseEvent, useState } from 'react';

export default function Canvas() {
//script
//useState
const [backgroundZoom, setBackgroundZoom] = useState(4.5);
const [placedCartPositions, setPlacedCartPositions] =
useState(
    {  
        x : 400,
        y : 700
    }
);
const [cameraCoordinates, setCameraCoordinates] =
useState(
    {
        x : 0,
        y : 0
    }
)

//useRef
const isDraggingCanvas = useRef(false);
const isDraggingCart = useRef(false);
const lastMousePos = useRef({x: 0, y: 0});

//useRef - dom
const cart1 = useRef<HTMLDivElement>(null);
const canvasRef = useRef<HTMLDivElement>(null);

//functions
//stops other functions when leaving the screen or stop holding left click
function isntHolding(){
     isDraggingCanvas.current = false;
     isDraggingCart.current = false;
}

//handle the canvas when held
function handleCanvasMouseDown(event: MouseEvent<HTMLDivElement>) {
    //makes sure that the left click is clicked
    if (event.button === 0) {
        //makes sure that a click is held
        isDraggingCanvas.current = true;
        //save Mouse position
        lastMousePos.current = ({x: event.clientX, y: event.clientY});
    }
}

//handle the cart when held
function handleCartMouseDown(event: MouseEvent<HTMLDivElement>) {
    //prevent the cart from moving when the cart is held
    event.stopPropagation()
    //makes sure that the left click is clicked
    if (event.button === 0) {
        //makes sure that a click is held
        isDraggingCart.current = true;
        //save Mouse position
        lastMousePos.current = ({x: event.clientX, y: event.clientY});
    }
}

//handle the held element when the mouse is moving
function handleGlobalMouseMove(event: MouseEvent<HTMLDivElement>){
    //stop if neither the canvas neither the cart is being held
    if (isDraggingCanvas.current === false &&
        isDraggingCart.current === false)
    {
        return
    }

    else
    {
        //set deltaX and deltaY (current mouse coords - previous mouse coords)
        let deltaX = event.clientX - lastMousePos.current.x;
        let deltaY = event.clientY - lastMousePos.current.y;
        //if canvas is held

        if (isDraggingCanvas.current === true)
        {
            //sets new camera coordinates
            setCameraCoordinates ({
                x : cameraCoordinates.x + deltaX,
                y : cameraCoordinates.y + deltaY
            })
        }

        //if cart is held
        else if (isDraggingCart.current === true)
        {
            //sets new cart coordinates
            setPlacedCartPositions ({
                x : placedCartPositions.x + deltaX,
                y : placedCartPositions.y + deltaY
            })
        }
        //sets new mouse coords
        lastMousePos.current.x = event.clientX
        lastMousePos.current.y = event.clientY
    }
}

//zoom on scroll
function zoomUpOrDown(event: React.WheelEvent<HTMLDivElement>){
    //determine if scroll up or down
    if  (event.deltaY < 0){
        //securtity to prevent infinite zoom
        if (backgroundZoom < 10) {
            //update backgroundZoom
            setBackgroundZoom(backgroundZoom +0.2)
        }
    }

    else {
        //securtity to prevent infinite zoom
        if (backgroundZoom > 1) {
            //update backgroundZoom
            setBackgroundZoom(backgroundZoom -0.2)
        }
    }
}


//visual
return (
    <div className="canvas-div">
        <div ref={canvasRef} style={{backgroundPositionX: cameraCoordinates.x + "px", backgroundPositionY: cameraCoordinates.y + "px", backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) "+ backgroundZoom / 10 +"vh ,rgba(212, 0, 190, 0) "+ backgroundZoom / 10 +"vh)", backgroundSize:`${backgroundZoom + 1 }vh ${backgroundZoom + 1 }vh`}} onMouseDown={handleCanvasMouseDown} onMouseUp={isntHolding} onMouseMove={handleGlobalMouseMove} onMouseLeave={isntHolding} onWheel={zoomUpOrDown} className="canvas">
            <div id='0' ref={cart1} style={{transform: `scale(${backgroundZoom - 0.5})`, left: placedCartPositions.x + cameraCoordinates.x + "px", top: placedCartPositions.y + cameraCoordinates.y + "px"}}onMouseDown={handleCartMouseDown} className="add-cart placed-cart"><p className="cart-mouse">Mouse</p><p className="info">?</p></div>
        </div>
    </div>
  );
}