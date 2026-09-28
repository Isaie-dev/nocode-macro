import { cartalog } from "../data/cartalog";
interface Cart {
    id: number;
    uniqId: string;
    x: number;
    y: number;
}
interface ConfigPanelProps {
  selectedCart: { id: number; uniqId: string } | null;
  carts: Cart[];
}

export default function ConfigPanel(props: ConfigPanelProps) {
  let selectedCartId = JSON.stringify(
    cartalog[
      props.carts.find((cart) => cart.uniqId === props.selectedCart?.uniqId)?.id ?? -1
    ]
  )
  return (
    <div className="configpanel">
      <button className="configpanel-close-button"><strong>Configuration :</strong><p className="configpanel-text">Mouse</p><p className="configpanel-cross">x</p></button>
      <div className="configpanel-variable-zone">
        <p>{selectedCartId}</p>
      </div>
      <button type="submit" className="apply">Apply</button>
    </div>
  );
}