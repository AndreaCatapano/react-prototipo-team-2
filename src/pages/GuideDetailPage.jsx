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
        <h1 className="guide-title">Dettaglio Operatore</h1>

        {guide ? (
          <div className="guide-info-card">
            <div className="guide-info-item">
              <span className="guide-label">
                <i className="bi bi-person-fill me-2"></i>
                Nome:
              </span>
              <span className="guide-value">
                {guide.firstName} {guide.lastName}
              </span>
            </div>
            <div className="guide-info-item">
              <span className="guide-label">
                <i className="bi bi-envelope-fill me-2"></i>
                Email:
              </span>
              <span className="guide-value">
                <a href={`mailto:${guide.email}`} className="text-decoration-none">
                  {guide.email}
                </a>
              </span>
            </div>
            <div className="guide-info-item">
              <span className="guide-label">
                <i className="bi bi-telephone-fill me-2"></i>
                Telefono:
              </span>
              <span className="guide-value">
                <a href={`tel:${guide.phone}`} className="text-decoration-none">
                  {guide.phone}
                </a>
              </span>
            </div>
            <div className="guide-info-item">
              <span className="guide-label">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Viaggio:
              </span>
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

        <Link to={`/trips/${id}`} className="back-button mt-4 d-inline-block">
          <i className="bi bi-arrow-left me-2"></i>
          Torna ai dettagli del viaggio
        </Link>
      </div>
    </div>
  );
}

export default GuideDetailPage;
