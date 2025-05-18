import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import guidesDataDemo from "../data/guidesDataDemo.js";
import travelDataDemo from "../data/travelDataDemo.js";
import "../style/GuideDetailPage.css";

// Pagina di dettaglio guida
function GuideDetailPage() {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);
  const [travel, setTravel] = useState(null);

  useEffect(() => {
    const foundGuide = guidesDataDemo.find(
      (guide) => guide.id === parseInt(id)
    );

    if (foundGuide) {
      setGuide(foundGuide);

      const foundTravel = travelDataDemo.find(
        (travel) => travel.id === foundGuide.tripId
      );

      if (foundTravel) {
        setTravel(foundTravel);
      }
    }
  }, [id]);

  return (
    <div className="container py-5">
      <div className="guide-detail-container">
        <h1 className="guide-title">Dettaglio Guida</h1>

        {guide ? (
          <div className="guide-info-card">
            <div className="guide-info-item">
              <span className="guide-label">Nome:</span>
              <span className="guide-value">
                {guide.firstName} {guide.lastName}
              </span>
            </div>
            <div className="guide-info-item">
              <span className="guide-label">Email:</span>
              <span className="guide-value">{guide.email}</span>
            </div>
            <div className="guide-info-item">
              <span className="guide-label">Telefono:</span>
              <span className="guide-value">{guide.phone}</span>
            </div>
            <div className="guide-info-item">
              <span className="guide-label">Viaggio:</span>
              <span className="guide-value">
                {travel ? travel.packageName : "Nessun viaggio associato"}
              </span>
            </div>
          </div>
        ) : (
          <div className="guide-not-found">
            <p className="mb-0">Guida con ID: {id} non trovata</p>
          </div>
        )}

        <Link to={`/trips/${id}`} className="back-button">
          Torna ai dettagli del viaggio
        </Link>
      </div>
    </div>
  );
}

export default GuideDetailPage;
