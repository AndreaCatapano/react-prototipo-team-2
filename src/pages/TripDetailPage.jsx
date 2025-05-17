import { useParams, Link } from "react-router-dom";

import { TourOperatorCard } from "../components/TourOperatorCard.jsx";

import userDataDemo from "../data/userDataDemo"
import UserCard from "../components/UserCard.jsx";

// Pagina di dettaglio viaggio
function TripDetailPage() {
  const { id } = useParams();

  // filteriing user by id
  const tripUsers = userDataDemo.filter(user => user.tripId == id)

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

        <section className="container text-center">
          <div className="row row-cols-3 g-3">
            {tripUsers.map(user => <UserCard user={user} />)}
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
