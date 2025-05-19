import { useParams, Link } from "react-router-dom";

import { TourOperatorCard } from "../components/TourOperatorCard.jsx";

import userDataDemo from "../data/userDataDemo"
import UserCard from "../components/UserCard.jsx";
import { useEffect, useState } from "react";
import AccordionTrip from "../components/AccordionTrip.jsx";
import "../style/TravelDetailPage.css"

// Pagina di dettaglio viaggio
function TripDetailPage() {
  const { id } = useParams();

  const [user, setUser] = useState(userDataDemo);
  const [findUser, setFindUser] = useState(user);
  const [userSearch, setuserSearch] = useState('');

  useEffect(() => {

    let filteredUser = user;

    if (userSearch !== '') {

      filteredUser = filteredUser.filter(user =>
        user.firstName.toLowerCase().includes(userSearch.toLowerCase()) ||
        user.lastName.toLowerCase().includes(userSearch.toLowerCase())
      )
    }

    setFindUser(filteredUser);

  }, [userSearch]);

  // filtering user by id
  const tripUsers = findUser.filter(user => user.tripId == id);

  return (
    <>
      <section id="tour-operator-section">
        <TourOperatorCard tripId={id} />
      </section>

      <div className="container py-4">

        <AccordionTrip dataId={id} />

        <h2 className="text-center mb-4">Partecipanti</h2>

        <div className="container">
          <input className="form-control me-2 mb-4" type="search" placeholder="Search User" value={userSearch} onChange={e => setuserSearch(e.target.value)} />
        </div>
        <section className="container text-center">
          <div className="row g-3">
            {tripUsers.map(user => <UserCard key={user.id} user={user} />)}
          </div>
        </section>

        <Link to="/" className="btn btn-secondary mt-3">
          Torna alla homepage
        </Link>
      </div>
    </>
  );
}

export default TripDetailPage;
