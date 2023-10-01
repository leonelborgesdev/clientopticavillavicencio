import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Tienda } from "./components/Tienda/Tienda";
import { Citas } from "./components/Citas/Citas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/cita" element={<Citas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
