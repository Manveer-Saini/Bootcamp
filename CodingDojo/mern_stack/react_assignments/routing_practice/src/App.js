import {Router} from "@reach/router";
import './App.css';
import ColorWord from "./components/ColorWord";
import Home from "./components/Home";
import Number from "./components/Number";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:id" />
        <ColorWord path="/:word/:textColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
