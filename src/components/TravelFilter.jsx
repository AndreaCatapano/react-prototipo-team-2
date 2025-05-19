import { useState } from "react";
import "../style/travelFilter.css";

// Componenti filtri per la lista viaggi
function TravelFilters({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState(""); // filtro inizialmente spento

  // Attiva/disattiva filtro cliccato
  const handleFilterClick = (filter) => {
    const newFilter = activeFilter === filter ? "" : filter;
    setActiveFilter(newFilter);
    if (onFilterChange) {
      onFilterChange(newFilter);
    }
  };

  // Reset filtro
  const resetFilters = () => {
    setActiveFilter("");
    if (onFilterChange) {
      onFilterChange("");
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

      {/* Pulsante di reset: compare solo se un filtro è attivo */}
      {activeFilter && (
        <button
          className="btn btn-dark btn-sm"
          onClick={resetFilters}
          title="Annulla filtro"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      )}
    </div>
  );
}

export default TravelFilters;
