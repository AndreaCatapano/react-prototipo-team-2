import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./Router";

// Punto d'ingresso dell'app
function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
