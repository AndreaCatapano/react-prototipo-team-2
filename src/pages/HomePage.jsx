import { useState } from "react";
import TravelCard from "../components/TravelCard.jsx";
import travelDataDemo from "../data/travelDataDemo.js";
import "../style/HomePage.css"; // assicura che esista ed eventualmente aggiungilo

// Converte data da "gg/mm/aaaa" a oggetto Date
function parseDate(dateStr) {
  const [day, month, year] = dateStr.split("/");
  return new Date(`${year}-${month}-${day}`);
}

// Pagina Home: mostra solo i viaggi in corso alla data attuale
export default function HomePage() {
  const today = new Date();

  const availableTravels = travelDataDemo.filter((travel) => {
    const departure = parseDate(travel.departure);
    const returnDate = parseDate(travel.return);
    return today >= departure && today <= returnDate;
  });

  return (
    <div className="bg-secondary min-vh-100 py-5">
      <div className="container">
        <h1 className="text-center text-light mb-5">Our Travel List</h1>

        <div className="row g-3">
          {availableTravels.length > 0 ? (
            availableTravels.map((travel) => (
              <div className="col-12 col-sm-6 col-lg-4" key={travel.id}>
                <TravelCard data={travel} />
              </div>
            ))
          ) : (
            <div className="text-center text-white py-5">
              <h4>Nessun viaggio attualmente disponibile.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
