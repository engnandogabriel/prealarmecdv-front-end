import "./App.css";
import { CircuitoDeViaContext } from "./Context/Context";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AnomaliasCorrente from "./pages/AnomaliasCorrente/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import AnomaliasResistencia from "./pages/AnomaliasResistencia";

function getBaseName() {
  const urlPath = window.location.pathname;
  console.log(urlPath);
  const urlParts = urlPath.split("/");
  const baseName =
    urlPath.indexOf("cma/") !== -1 ? `${urlParts[1]}/${urlParts[2]}/` : "/";
  return baseName;
}

function App() {
  const baseName = getBaseName();
  return (
    <CircuitoDeViaContext>
      <Header />
      <Router basename={baseName}>
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
