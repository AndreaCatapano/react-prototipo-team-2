import { Routes, Route } from "react-router-dom";

// Pagine principali
import HomePage from "./pages/HomePage";
import TravelsPage from "./pages/TravelsPage";
import ContactsPage from "./pages/ContactsPage";

// Pagine di dettaglio
import TripDetailPage from "./pages/TripDetailPage";
import GuideDetailPage from "./pages/GuideDetailPage";
import UserDetailPage from "./pages/UserDetailPage";

// Componente Router principale dell'app
function AppRouter() {
  return (
    <Routes>
      {/* Pagina iniziale di benvenuto */}
      <Route path="/" element={<HomePage />} />

      {/* Pagina con elenco dei viaggi */}
      <Route path="/travels" element={<TravelsPage />} />

      {/* Pagina contatti con recapiti, form e social */}
      <Route path="/contacts" element={<ContactsPage />} />

      {/* Pagina di dettaglio viaggio */}
      <Route path="/trips/:slug" element={<TripDetailPage />} />

      {/* Pagina di dettaglio guida */}
      <Route path="/guides/:id" element={<GuideDetailPage />} />

      {/* Pagina di dettaglio utente */}
      <Route path="/users/:id" element={<UserDetailPage />} />
    </Routes>
  );
}

export default AppRouter;
