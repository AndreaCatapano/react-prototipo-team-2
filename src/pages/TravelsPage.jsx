import { useState } from "react";
import TravelCard from "../components/TravelCard.jsx";
import TravelFilters from "../components/TravelFilter.jsx";
import travelDataDemo from "../data/travelDataDemo.js";

// Funzione per convertire la data da "gg/mm/aaaa" a oggetto Date
function parseDate(dateStr) {
  const [day, month, year] = dateStr.split("/");
  return new Date(`${year}-${month}-${day}`);
}

// Pagina principale con elenco dei viaggi e filtro
export default function TravelsPage() {
  const [currentFilter, setCurrentFilter] = useState(""); // inizialmente nessun filtro attivo

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const today = new Date();

  // Filtro dinamico applicato solo se è stato selezionato un filtro
  const filteredTravels = travelDataDemo
    .filter((travel) => {
      const departureDate = parseDate(travel.departure);
      const returnDate = parseDate(travel.return);

      if (currentFilter === "terminati") {
        return returnDate < today;
      }

      if (currentFilter === "disponibili") {
        return today >= departureDate && today <= returnDate;
      }

      if (currentFilter === "inProgramma") {
        return departureDate > today;
      }

      return true; // se nessun filtro è attivo, mostra tutto
    })
    .sort((a, b) => parseDate(a.departure) - parseDate(b.departure));

  return (
    <div className="container-fluid p-4 min-vh-100">
      <h1 className="text-center mb-5">Tutti i nostri viaggi</h1>

      <div className="container">
        <TravelFilters onFilterChange={handleFilterChange} />

        <div className="row g-3">
          {filteredTravels.length > 0 ? (
            filteredTravels.map((travel) => (
              <TravelCard key={travel.id} data={travel} />
            ))
          ) : (
            <div className="text-center text-white py-5">
              <h4>Nessun viaggio trovato per il filtro selezionato.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
