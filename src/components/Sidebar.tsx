
interface SidebarProps {
  onAddCart: () => void;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="sidebar flexbox">
        <input className="search-input" type="text" placeholder="Look for a cart..." />
        <h2 className="cartalog-title">Cartalog</h2>
        <div className="cartalog-div">
            <div draggable onClick={props.onAddCart} className="add-cart"><p className="cart-mouse">Mouse</p><p className="info">?</p></div>
            <div className="add-cart" onClick={props.onAddCart}><p className="cart-keyboard">Keyboard</p><p className="info">?</p></div>
            <div className="add-cart" onClick={props.onAddCart}><p className="cart-run">Run</p><p className="info">?</p></div>
            <div className="add-cart" onClick={props.onAddCart}><p className="cart-kill">Kill</p><p className="info">?</p></div>
            <div className="add-cart" onClick={props.onAddCart}><p className="cart-destroy">Destroy</p><p className="info">?</p></div>
            <div className="add-cart" onClick={props.onAddCart}><p className="cart-text">Text</p><p className="info">?</p></div>
            <div className="add-cart" onClick={props.onAddCart}><p className="cart-copy">Copy</p><p className="info">?</p></div>
            <div className="add-cart" onClick={props.onAddCart}><p className="cart-paste">Paste</p><p className="info">?</p></div>
        </div>
        <button className="feedback-button">Feedback</button>
    </div>
  );
}   