import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import guidesDataDemo from "../data/guidesDataDemo.js";
import travelDataDemo from "../data/travelDataDemo.js";
import "../style/GuideDetailPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function GuideDetailPage() {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);
  const [travel, setTravel] = useState(null);

  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const foundGuide = guidesDataDemo.find((g) => g.id === parseInt(id));
    if (foundGuide) {
      setGuide(foundGuide);
      setFormData({
        email: foundGuide.email,
        phone: foundGuide.phone
      });

      const relatedTravel = travelDataDemo.find((t) => t.id === foundGuide.tripId);
      if (relatedTravel) setTravel(relatedTravel);
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSavePhone = () => {
    if (guide && formData.phone !== guide.phone) {
      guide.phone = formData.phone;
      setNotification({ type: "success", message: "Numero aggiornato con successo!" });
    } else {
      setNotification({ type: "danger", message: "Il numero non è cambiato." });
    }
    setIsEditingPhone(false);
  };

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  if (!guide) {
    return (
      <div className="container py-5 text-center">
        <div className="guide-not-found">
          <h2>Guida non trovata</h2>
        </div>
        <Link to="/" className="back-button mt-3">Torna alla homepage</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="guide-detail-container">
        <h1 className="guide-title">Dettaglio Operatore</h1>

        {notification && (
          <div className={`alert alert-${notification.type} text-center`} role="alert">
            {notification.message}
          </div>
        )}

        <div className="guide-info-card">
          <div className="guide-info-item">
            <span className="guide-label"><i className="bi bi-person-fill me-2"></i>Nome:</span>
            <span className="guide-value">{guide.firstName} {guide.lastName}</span>
          </div>

          <div className="guide-info-item">
            <span className="guide-label"><i className="bi bi-envelope-fill me-2"></i>Email:</span>
            <a href={`mailto:${formData.email}`} className="guide-value text-decoration-none">{formData.email}</a>
          </div>

          <div className="guide-info-item d-flex align-items-center justify-content-between">
            <div className="flex-grow-1">
              <span className="guide-label"><i className="bi bi-telephone-fill me-2"></i>Telefono:</span>
              {!isEditingPhone ? (
                <a href={`tel:${formData.phone}`} className="guide-value text-decoration-none">{formData.phone}</a>
              ) : (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control d-inline-block"
                  style={{ maxWidth: "250px" }}
                />
              )}
            </div>
            {!isEditingPhone ? (
              <button className="btn btn-outline-secondary ms-2" onClick={() => setIsEditingPhone(true)}>
                <i className="bi bi-pencil-fill"></i>
              </button>
            ) : (
              <button className="btn btn-success ms-2" onClick={handleSavePhone}>Salva</button>
            )}
          </div>

          <div className="guide-info-item">
            <span className="guide-label"><i className="bi bi-geo-alt-fill me-2"></i>Viaggio:</span>
            <span className="guide-value">
              {travel ? travel.packageName : "Nessun viaggio associato"}
            </span>
          </div>

          <div className="text-center mt-4">
            <Link to={`/trips/${guide.tripId}`} className="back-button">Torna ai dettagli del viaggio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideDetailPage;
