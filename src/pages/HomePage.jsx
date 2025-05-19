import TravelCard from "../components/TravelCard.jsx";
import travelDataDemo from "../data/travelDataDemo.js";
<<<<<<< HEAD
import { useState } from "react";
import "../style/homePage.css";
=======
>>>>>>> refactory-HomePage-Travels-and-add-status-travels

// Funzione per convertire data da "gg/mm/aaaa" a oggetto Date
function parseDate(dateStr) {
  const [day, month, year] = dateStr.split("/");
  return new Date(`${year}-${month}-${day}`);
}

// Pagina Home di benvenuto: mostra solo i viaggi disponibili oggi
export default function HomePage() {
  const today = new Date();

  // Filtra solo viaggi in corso alla data attuale
  const availableTravels = travelDataDemo.filter((travel) => {
    const departure = parseDate(travel.departure);
    const returnDate = parseDate(travel.return);
    return today >= departure && today <= returnDate;
  });

  return (
<<<<<<< HEAD
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
=======
    <div className="container-fluid py-5 px-4 bg-secondary min-vh-100">
      <h1 className="text-center text-light mb-5">Home Page</h1>

      <div className="container">
        <div className="row g-3">
          {availableTravels.length > 0 ? (
            availableTravels.map((travel) => (
              <TravelCard key={travel.id} data={travel} />
            ))
          ) : (
            <div className="text-center text-white py-5">
              <h4>Nessun viaggio attualmente disponibile.</h4>
            </div>
          )}
>>>>>>> refactory-HomePage-Travels-and-add-status-travels
        </div>
      </div>
    </div>
  );
}
