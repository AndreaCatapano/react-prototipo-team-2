import { useParams, Link } from "react-router-dom";

import { TourOperatorCard } from "../components/TourOperatorCard.jsx";

import userDataDemo from "../data/userDataDemo"
import UserCard from "../components/UserCard.jsx";
import { useEffect, useState } from "react";

// Pagina di dettaglio viaggio
function TripDetailPage() {
  const { id } = useParams();

  const [user, setUser] = useState(userDataDemo);
  const [findUser, setFindUser] = useState(user);
  const [firstNameSearchUser, setFirstNameSearchUser] = useState('');
  const [lastNameSearchUser, setLastNameSearchUser] = useState('');

  useEffect(() => {

    let filteredUser = user;

    if(firstNameSearchUser !== '') {

      filteredUser = filteredUser.filter(user => user.firstName.toLowerCase().includes(firstNameSearchUser.toLowerCase()));
    }

    if(lastNameSearchUser !== '') {

      filteredUser = filteredUser.filter(user => user.lastName.toLowerCase().includes(lastNameSearchUser.toLowerCase()));
    }

    setFindUser(filteredUser);

  }, [firstNameSearchUser, lastNameSearchUser]);

  // filtering user by id
  const tripUsers = findUser.filter(user => user.tripId == id);

  return (
    <>
      <section id="tour-operator-section">
        <TourOperatorCard tripId={id} />
      </section>

      <div className="container py-4">
        <h1>Dettaglio viaggio</h1>
        <p>
          Hai selezionato il viaggio con ID: <strong>{id}</strong>
        </p>

        <div className="row row-cols-2 mb-4">
          <div className="col">
            <input className="form-control me-2" type="search" placeholder="Search By First Name" value={firstNameSearchUser} onChange={e => setFirstNameSearchUser(e.target.value)} />
          </div>
          <div className="col">
            <input className="form-control me-2" type="search" placeholder="Search By Last Name" value={lastNameSearchUser} onChange={e => setLastNameSearchUser(e.target.value)} />
          </div>
        </div>
        
        <section className="container text-center">
          <div className="row row-cols-3 g-3">
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
