//import components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";

//import style
import "./App.css";

//put them together in a function
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

//export the function
export default App;