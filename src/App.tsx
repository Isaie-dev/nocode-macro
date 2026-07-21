import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";

import "./App.css";

function App() {
  return (
    <div className="app-container">
        <Header />
      
      <div className="main-content">
        <Sidebar />
        <Canvas />
        <ConfigPanel />
      </div>
    </div>
  );
}

export default App;