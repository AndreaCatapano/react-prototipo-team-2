import AppRouter from "./Router";
import Header from "./components/Header";

// Punto d'ingresso dell'app
function App() {
  return (
    <>
      <Header />
      <AppRouter />;
    </>
  );
}

export default App;
