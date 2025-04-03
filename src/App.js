import "./App.css";
import { CircuitoDeViaContext } from "./Context/Context";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AnomaliasCorrente from "./pages/AnomaliasCorrente/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import AnomaliasResistencia from "./pages/AnomaliasResistencia";

function App() {
  return (
    <CircuitoDeViaContext>
      <Header />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/anomalias/correntes"
              element={<AnomaliasCorrente />}
            />
            <Route
              path="/anomalias/resistencia"
              element={<AnomaliasResistencia />}
            />
          </Routes>
        </div>
      </Router>
    </CircuitoDeViaContext>
  );
}

export default App;
