import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import guidesDataDemo from "../data/guidesDataDemo.js";

// Pagina di dettaglio guida
function GuideDetailPage() {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    // Cerca la guida con l'ID corrispondente nei dati di esempio
    const foundGuide = guidesDataDemo.find(guide => guide.id === parseInt(id));
    if (foundGuide) {
      setGuide(foundGuide);
    }
  }, [id]);

  return (
    <div className="container py-4">
      <h1>Dettaglio guida</h1>
      
      {guide ? (
        <div>
          <p><strong>ID:</strong> {guide.id}</p>
          <p><strong>Nome:</strong> {guide.firstName}</p>
          <p><strong>Cognome:</strong> {guide.lastName}</p>
          <p><strong>Email:</strong> {guide.email}</p>
          <p><strong>Telefono:</strong> {guide.phone}</p>
          <p><strong>ID Viaggio:</strong> {guide.tripId}</p>
        </div>
      ) : (
        <p>Guida con ID: {id} non trovata</p>
      )}

      <Link to="/" className="btn btn-secondary mt-3">
        Torna alla homepage
      </Link>
    </div>
  );
}

export default GuideDetailPage;