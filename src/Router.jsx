import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TripDetailPage from "./pages/TripDetailPage";
import GuideDetailPage from "./pages/GuideDetailPage";
import UserDetailPage from "./pages/UserDetailPage";

// Componente Router principale dell'app
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pagina iniziale con elenco viaggi */}
        <Route path="/" element={<HomePage />} />

        {/* Pagina di dettaglio viaggio (tramite ID) */}
        <Route path="/trips/:id" element={<TripDetailPage />} />

        {/* Pagina di dettaglio guida (tramite ID) */}
        <Route path="/guides/:id" element={<GuideDetailPage />} />

        {/* Pagina di dettaglio utente (tramite ID) */}
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
