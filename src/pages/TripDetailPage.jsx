import { useParams, Link } from "react-router-dom";

import { TourOperatorCard } from "../components/TourOperatorCard.jsx";

// Pagina di dettaglio viaggio
function TripDetailPage() {
  const { id } = useParams();

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
        <Link to="/" className="btn btn-secondary mt-3">
          Torna alla homepage
        </Link>
      </div>
    </>
  );
}

export default TripDetailPage;
