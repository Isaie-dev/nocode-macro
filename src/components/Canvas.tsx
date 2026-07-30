//imports
import { useRef, MouseEvent, useState, } from 'react';
import { cartalog } from "../data/cartalog";

interface Cart {
    id: number;
    uniqId: string;
    x: number;
    y: number;
}

interface CanvasProps {
  carts: Cart[];
  setCarts: React.Dispatch<React.SetStateAction<Cart[]>>;
}

export default function Canvas(props: CanvasProps) {
//script
//useState
const [backgroundZoom, setBackgroundZoom] = useState(1);
const [cameraCoordinates, setCameraCoordinates] =
useState(
    {
        x : 0,
        y : 0
    }
)

//useRef
const isDraggingCanvas = useRef(false);
const isDraggingCart = useRef({
    uniqId : "",
    bool : false
});
const lastMousePos = useRef({x: 0, y: 0});

//useRef - dom
const canvasRef = useRef<HTMLDivElement>(null);

//functions
//stops other functions when leaving the screen or stop holding left click
function isntHolding(){
     isDraggingCanvas.current = false;
     isDraggingCart.current.bool = false;
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
        isDraggingCart.current.bool = true;
isDraggingCart.current.uniqId = event.currentTarget.id; 
        //save Mouse position
        lastMousePos.current = ({x: event.clientX, y: event.clientY});
    }
}

//handle the held element when the mouse is moving
function handleGlobalMouseMove(event: MouseEvent<HTMLDivElement>){
    //stop if neither the canvas neither the cart is being held
    if (isDraggingCanvas.current === false &&
        isDraggingCart.current.bool === false)
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
        else if (isDraggingCart.current.bool === true)
        {
                        props.setCarts( placedCarts => placedCarts.map( cart => {
    
    if (cart.uniqId === isDraggingCart.current.uniqId) {
        return { 
            ...cart, 
            x: cart.x + deltaX / backgroundZoom,
                y: cart.y + deltaY / backgroundZoom
            };
    } else {
        return cart;
    }
    
}));
        }
        //sets new mouse coords
        lastMousePos.current.x = event.clientX
        lastMousePos.current.y = event.clientY
    }
}

//zoom on scroll
function zoomUpOrDown(event: React.WheelEvent<HTMLDivElement>){
    let newCamCoords = {x:0, y: 0}
    //determine if scroll up or down
    if  (event.deltaY < 0){
        //securtity to prevent infinite zoom
        if (backgroundZoom < 2) {
            let newZoom = backgroundZoom + 0.1;
            //update backgroundZoom
            newCamCoords.x = (event.clientX - cameraCoordinates.x) / backgroundZoom;
            newCamCoords.y = (event.clientY - cameraCoordinates.y) / backgroundZoom;
            setCameraCoordinates ({
                x : event.clientX - newCamCoords.x * newZoom,
                y : event.clientY - newCamCoords.y * newZoom
            });
            setBackgroundZoom(backgroundZoom + 0.1);
        };
    }

    else {
        //securtity to prevent infinite zoom
        if (backgroundZoom > 0.5) {
            let newZoom = backgroundZoom - 0.1;
            //update backgroundZoom
            newCamCoords.x = (event.clientX - cameraCoordinates.x) / backgroundZoom
            newCamCoords.y = (event.clientY - cameraCoordinates.y) / backgroundZoom
            setCameraCoordinates ({
                x : event.clientX - newCamCoords.x * newZoom,
                y : event.clientY - newCamCoords.y * newZoom
            })   
            setBackgroundZoom(backgroundZoom - 0.1)
        }
    }
}


//visual
return (
    <div className="canvas-div">
        <div 
            ref={canvasRef} 
            style={{
                backgroundPositionX: cameraCoordinates.x + "px",
                backgroundPositionY: cameraCoordinates.y + "px",
                backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) "+ backgroundZoom +"px ,rgba(212, 0, 190, 0) "+ backgroundZoom +"px)",
                backgroundSize:`${backgroundZoom + 1 }vh ${backgroundZoom + 1 }vh`
            }} 

            onMouseDown={handleCanvasMouseDown} 
            onMouseUp={isntHolding} 
            onMouseMove={handleGlobalMouseMove} 
            onMouseLeave={isntHolding} 
            onWheel={zoomUpOrDown} 
            className="canvas">

            {props.carts.map((cart) => (
                <div
                    key={cart.uniqId}
                    id={cart.uniqId}
                    style={{
                            transform: `scale(${backgroundZoom})`,
                            left: `${(cart.x * backgroundZoom) + cameraCoordinates.x}px`, 
                            top: `${(cart.y * backgroundZoom) + cameraCoordinates.y}px`
                    }} 
                    onMouseDown={handleCartMouseDown} 
                    className="add-cart placed-cart"> 
                    <p className="cart-mouse">{cartalog[cart.id].name}</p>
                </div>
            ))}
        </div>
    </div>
  );
}