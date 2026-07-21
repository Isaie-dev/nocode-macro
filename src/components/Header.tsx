export default function Header() {
  return (
    <div className="header">
        <div className="header-aside">
            <button className="header-buttons directory">MyMacroFolder</button>
        </div>
        <div className="button-div">
            <button className="header-buttons save">Save</button>
            <button className="header-buttons start">Start Macro</button>
            <button className="header-buttons stop">Stop Macro</button>
            <button className="header-buttons record">Record</button>
        </div>
        <div className="header-aside">
        <button className="header-buttons settings">Settings</button>
        </div>
    </div>
  );
}