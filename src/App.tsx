//import components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";

//import style
import "./App.css";
  
//imports react
import { useState } from "react";

//put them together in a function
function App() {

//functions and states that are used in multiple components
const [carts, setCarts] = useState<{id: number, uniqId: string, x: number, y: number}[]>([]);
//function to add a new cart to the canvas
function handleAddCart(cartId : number) {
  setCarts(carts => [...carts, 
    { 
        id: cartId,
        uniqId: `cart_${crypto.randomUUID()}`,
        x: 0, 
        y: 0 
    }
  ]);
}

  return (
    <div className="app-container">
        <Header />
      <div className="main-content">
        <Sidebar onAddCart={handleAddCart} />
        <Canvas carts={carts} setCarts={setCarts}/>
        <ConfigPanel />
      </div>
    </div>
  );
}

//export the function
export default App;