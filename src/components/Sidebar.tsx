//imports
import {cartalog} from "../data/cartalog";
import {useState} from "react";

interface SidebarProps {
    onAddCart: (cartId: number) => void;
}

export default function Sidebar(props: SidebarProps) {
    const [searchBar, setSearchBar] = useState("");

    const filteredCartalog = cartalog.filter((cart) => {
        if (cart.name === "") return false;

        return cart.name.toLowerCase().includes(searchBar.toLowerCase());
    });

    return (
        <div className="sidebar flexbox">
            <input
                className="search-input"
                type="text"
                placeholder="Look for a cart..."
                value={searchBar}
                onChange={(event) => setSearchBar(event.target.value)}
            />
            <h2 className="cartalog-title">Cartalog</h2>
            <div className="cartalog-div">
                {filteredCartalog.map((cart) => (
                    <div
                        id={String(cart.id)}
                        onClick={() => props.onAddCart(cart.id)}
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