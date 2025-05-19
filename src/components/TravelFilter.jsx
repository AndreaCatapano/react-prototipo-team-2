import { useState } from "react";
import "../style/travelFilter.css";

// Componenti filtri per la lista viaggi
function TravelFilters({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("disponibili");

  // Aggiorna filtro attivo e notifica il genitore
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <div className="travel-filters-container">
      <button
        className={`travel-filter-btn ${
          activeFilter === "terminati" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("terminati")}
      >
        Terminati
      </button>

      <button
        className={`travel-filter-btn ${
          activeFilter === "disponibili" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("disponibili")}
      >
        Disponibili
      </button>

      <button
        className={`travel-filter-btn ${
          activeFilter === "inProgramma" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("inProgramma")}
      >
        In Programma
      </button>
    </div>
  );
}

export default TravelFilters;
