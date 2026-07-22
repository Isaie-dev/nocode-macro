export default function ConfigPanel() {
  return (
    <div className="configpanel">
        <button className="configpanel-close-button"><strong>Configuration :</strong><p className="configpanel-text">Mouse</p><p className="configpanel-cross">x</p></button>
        <div className="configpanel-variable-zone">
            <div className="configpanel-div configpanel-div-select">
                <label className="configpanel-label-select" htmlFor="mouse-click"><strong>Configuration :</strong>Left Click</label>
                <select className="configpanel-select" name="mouse-click" id="mouse-click">
                    <option className="configpanel-option" value="left-click">Left Click</option>
                    <option className="configpanel-option" value="right-click">Right Click</option>
                    <option className="configpanel-option" value="middle-click">Middle Click</option>
                    <option className="configpanel-option" value="mouse-button-1">Mouse Button 1</option>
                    <option className="configpanel-option" value="mouse-button-2">Mouse Button 2</option>
                </select>
            </div>
            <div className="configpanel-div configpanel-div-number">
                <label className="configpanel-label-number" htmlFor="coordinates"><strong>Position :</strong></label>
                <input type="number" id="coordinates" placeholder="x"className="configpanel-input-number" />
                <input type="number" id="coordinates" placeholder="y"className="configpanel-input-number" />
                <button className="configpanel-button">Select on next click</button>
            </div>
            <div className="configpanel-div configpanel-div-number">
                <label className="configpanel-label-number" htmlFor="delay"><strong>Delay(ms) :</strong></label>
                <input type="number" id="delay" defaultValue={40} min={40} className="configpanel-input-number" />
            </div>
            <div className="configpanel-div configpanel-div-number">
                <label className="configpanel-label-number" htmlFor="iteration"><strong>Iterations :</strong></label>
                <input type="number" id="iteration" placeholder="Iterations :"className="configpanel-input-number" />
            </div>
            <button type="submit" className="apply">Apply</button>
        </div>
    </div>
  );
}