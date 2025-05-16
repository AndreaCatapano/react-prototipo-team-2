import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Router principale dell'app
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Homepage dei viaggi */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
