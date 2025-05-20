import { useState } from "react";
import "../style/travelFilter.css";

function TravelFilters({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("");

  // Attiva/disattiva filtro cliccato
  const handleFilterClick = (filter) => {
    const newFilter = activeFilter === filter ? "" : filter;
    setActiveFilter(newFilter);
    if (onFilterChange) {
      onFilterChange(newFilter);
    }
  };

  return (
    <div className="travel-filters-container d-flex align-items-center gap-2 flex-wrap mb-3">
      {/* Pulsanti filtro */}
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
