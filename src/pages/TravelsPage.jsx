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
  const [currentFilter, setCurrentFilter] = useState("disponibili");

  // Aggiorna filtro selezionato
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const today = new Date();

  // Filtraggio dei viaggi in base alla data e al filtro attivo
  const filteredTravels = travelDataDemo.filter((travel) => {
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

    return true; // fallback
  });

  return (
    <div className="container-fluid p-4 bg-secondary">
      <h1 className="text-center mb-5">Our Travel List</h1>

      <div className="container">
        {/* Componenti filtri */}
        <TravelFilters onFilterChange={handleFilterChange} />

        {/* Lista dei viaggi filtrati */}
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
