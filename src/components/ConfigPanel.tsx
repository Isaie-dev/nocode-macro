import {cartalog} from "../data/cartalog";

interface Cart {
    id: number;
    uniqId: string;
    x: number;
    y: number;
}

interface selectedCart {
    id: number;
    uniqId: string;
    isDivOpen: number;
}

interface ConfigPanelProps {
    selectedCart: selectedCart;
    setSelectedCart: React.Dispatch<React.SetStateAction<selectedCart>>;
    carts: Cart[];
}


export default function ConfigPanel(props: ConfigPanelProps) {
    let currentSelectedCart =
        cartalog[
        props.carts.find((cart) => cart.uniqId === props.selectedCart?.uniqId)?.id ?? -1
            ]
    return (
        <div className="configpanel">
            <div className="configpanel-close-button-div">
                <button className="configpanel-close-button"
                        onClick={() => props.selectedCart?.isDivOpen === 0 ? props.setSelectedCart({
                            id: props.selectedCart.id,
                            uniqId: props.selectedCart.uniqId,
                            isDivOpen: (95),
                        }) : props.setSelectedCart({
                            id: props.selectedCart?.id,
                            uniqId: props.selectedCart?.uniqId,
                            isDivOpen: (0),
                        })}>
                    <p><strong>Configuration :</strong></p>
                    <p className="configpanel-text">{currentSelectedCart ? currentSelectedCart.name : "Select a cart"}</p>
                    <p className="configpanel-cross">x</p>
                </button>
            </div>
            <div className="configpanel-variable-zone" style={{maxHeight: props.selectedCart?.isDivOpen + "vh"}}>
                {currentSelectedCart ? currentSelectedCart.elements.map((element, index) => {
                    if (element.label) {
                        return (
                            <div>
                                <label htmlFor={element.label}>{element.label}</label>
                                <input
                                    id={element.label}
                                    key={index}
                                    className={element.class}
                                    {...(element.type && {type: element.type as any})}
                                    {...(element.placeHolder && {placeholder: element.placeHolder as any})}
                                />
                            </div>
                        )
                    } else if (element.function) {
                        return (
                            <button className={element.class}>
                                {element.text}
                            </button>
                        )
                    }
                }) : null}
                {currentSelectedCart && <button type="submit" className="apply">Apply</button>}
            </div>
        </div>
    );
}