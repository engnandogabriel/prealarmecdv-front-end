import "./App.css";
import { CircuitoDeViaContext } from "./Context/Context";
import Home from "./pages/Home";
function App() {
  return (
    <CircuitoDeViaContext>
      <div className="App">
        <Home />
      </div>
    </CircuitoDeViaContext>
  );
}

export default App;
