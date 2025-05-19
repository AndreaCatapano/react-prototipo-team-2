import TravelCard from "../components/TravelCard.jsx";
import TravelFilters from "../components/TravelFilter.jsx";
import travelDataDemo from "../data/travelDataDemo.js";
import { useState } from "react";

function HomePage() {
  const [currentFilter, setCurrentFilter] = useState("disponibili");

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="container-fluid p-4 bg-secondary">
      <h1 className="text-center mb-5">Our Travel List</h1>

      <div className="container">
        <TravelFilters onFilterChange={handleFilterChange} />

        <div className="row g-3">
          {travelDataDemo.map((travel) => (
            <TravelCard key={travel.id} data={travel} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage;
