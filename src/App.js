import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Tienda } from "./components/Tienda/Tienda";
import { Citas } from "./components/Citas/Citas";
import { ReservarCita } from "./components/ReservarCita/ReservarCita";
import { Cliente } from "./components/Cliente/Cliente";
import { Receta } from "./components/Receta/Receta";
import { Clientes } from "./components/Clientes/Clientes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/cita" element={<ReservarCita />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/receta" element={<Receta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
