//imports
import { cartalog } from "../data/cartalog";
interface SidebarProps {
  onAddCart: (cartId : number) => void;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="sidebar flexbox">
        <input className="search-input" type="text" placeholder="Look for a cart..." />
        <h2 className="cartalog-title">Cartalog</h2>
        <div className="cartalog-div">
          {cartalog.map((cart) => (
                <div 
                    id={String(cart.id)}
                    onClick={ () => props.onAddCart(cart.id) } 
                    className="add-cart"> 
                    <p>{cart.name}</p> 
                    <div className="info">?<span className="cart-popup">{cart.description}</span></div>
                </div>
          ))}
        </div>
        <button className="feedback-button">Feedback</button>
    </div>
  );
}   