import TravelCard from "../components/TravelCard.jsx";
import TravelFilters from "../components/TravelFilter.jsx";
import travelDataDemo from "../data/travelDataDemo.js";
import { useState } from "react";
import "../style/homePage.css";

function HomePage() {
  const [currentFilter, setCurrentFilter] = useState("disponibili");

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="home-container">
      <div className="container">
        <h1 className="home-title text-center">Our Travel List</h1>

        <div className="travel-content">
          <TravelFilters onFilterChange={handleFilterChange} />

          <div className="row g-3 travel-grid">
            {travelDataDemo.map((travel) => (
              <div className="col-12 col-sm-6 col-lg-4" key={travel.id}>
                <TravelCard data={travel} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
