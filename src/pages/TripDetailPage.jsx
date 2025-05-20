import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TourOperatorCard } from "../components/TourOperatorCard.jsx";
import AccordionTrip from "../components/AccordionTrip.jsx";
import UserCard from "../components/UserCard.jsx";
import userDataDemo from "../data/userDataDemo";
import travelDataDemo from "../data/travelDataDemo";
import "../style/TravelDetailPage.css";

// Funzione per determinare lo stato del viaggio
function getTripStatus(departure, returnDate) {
  const today = new Date();
  const [d1, m1, y1] = departure.split("/");
  const [d2, m2, y2] = returnDate.split("/");

  const start = new Date(`${y1}-${m1}-${d1}`);
  const end = new Date(`${y2}-${m2}-${d2}`);

  if (end < today) return "Terminato";
  if (start > today) return "In Programma";
  return "In Corso";
}

function TripDetailPage() {
  const { id } = useParams();

  const [user, setUser] = useState(userDataDemo);
  const [findUser, setFindUser] = useState(user);
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    let filteredUser = user;

    if (userSearch !== "") {
      filteredUser = filteredUser.filter(
        (user) =>
          user.firstName.toLowerCase().includes(userSearch.toLowerCase()) ||
          user.lastName.toLowerCase().includes(userSearch.toLowerCase())
      );
    }

    setFindUser(filteredUser);
  }, [userSearch]);

  // Partecipanti al viaggio
  const tripUsers = findUser.filter((user) => user.tripId == id);

  // Dati viaggio
  const currentTrip = travelDataDemo.find((trip) => trip.id == id);
  const status = currentTrip
    ? getTripStatus(currentTrip.departure, currentTrip.return)
    : null;

  const badgeClass = {
    "In Corso": "bg-success",
    Terminato: "bg-danger",
    "In Programma": "bg-warning text-dark",
  }[status];

  return (
    <>
      {/* Accordion: info viaggio */}
      <div className="container py-4">
        <AccordionTrip dataId={id} />
      </div>

      {/* Tour operator */}
      <section id="tour-operator-section">
        <TourOperatorCard tripId={id} />
      </section>

      {/* Partecipanti + Stato */}
      <div className="container py-4">
        {status && (
          <div className="text-end mb-4">
            <span className={`badge ${badgeClass} fs-6 px-3 py-2`}>
              {status}
            </span>
          </div>
        )}

        <h2 className="text-center mb-4">Partecipanti</h2>

        {/* Searchbar */}
        <div className="search-container">
          <input
            className="form-control"
            type="search"
            placeholder="Search User"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </div>

        {/* User Cards */}
        <section className="text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {tripUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </section>

        {/* Back Button Centered */}
        <div className="d-flex justify-content-center mt-4">
          <Link to="/" className="btn btn-secondary">
            Torna alla homepage
          </Link>
        </div>
      </div>
    </>
  );
}

export default TripDetailPage;
