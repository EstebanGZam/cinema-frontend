import { BrowserRouter, Routes, Route } from "react-router-dom";

// Contextos
import { CinemaProvider } from "./contexts/CinemaContext";
import { ReservationProvider } from "./contexts/ReservationContext";

// Páginas disponibles
import CinemaPage from "./pages/cinema/CinemaPage";
import ReservationPage from "./pages/reservation/ReservationPage";
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <BrowserRouter>
      <CinemaProvider>
        <ReservationProvider>
          <Routes>
            {/* Ruta para el sistema de reservaciones */}
            <Route path="/" element={<CinemaPage />}></Route>
            <Route path="/reservation" element={<ReservationPage />}></Route>
            {/* Ruta para manejo de errores 404 en rutas públicas */}
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </ReservationProvider>
      </CinemaProvider>
    </BrowserRouter>
  );
}

export default App;
