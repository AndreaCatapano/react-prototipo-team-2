import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import userDataDemo from "../data/userDataDemo";
import "../style/UserDetailPage.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserDetailPage() {
  const { id } = useParams();
  const user = userDataDemo.find((u) => u.id === parseInt(id));

  const [formData, setFormData] = useState(user ? {
    email: user.email,
    phone: user.phone,
    fiscalCode: user.fiscalCode,
  } : { email: "", phone: "", fiscalCode: "" });

  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [notification, setNotification] = useState(null);

  const { firstName, lastName, tripId } = user || {};

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSavePhone = () => {
    if (formData.phone !== user.phone) {
      user.phone = formData.phone;
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

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <div className="user-not-found">
          <h2>Utente non trovato</h2>
        </div>
        <Link to="/" className="back-button mt-3">Torna alla homepage</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="user-detail-container">
        <h1 className="user-title">{firstName} {lastName}</h1>

        {notification && (
          <div className={`alert alert-${notification.type} text-center`} role="alert">
            {notification.message}
          </div>
        )}

        <div className="user-info-card">
          <div className="user-info-item">
            <span className="user-label"><i className="bi bi-envelope-fill me-2"></i>Email:</span>
            <a href={`mailto:${formData.email}`} className="user-value text-decoration-none">{formData.email}</a>
          </div>

          <div className="user-info-item d-flex align-items-center justify-content-between">
            <div className="flex-grow-1">
              <span className="user-label"><i className="bi bi-telephone-fill me-2"></i>Telefono:</span>
              {!isEditingPhone ? (
                <a href={`tel:${formData.phone}`} className="user-value text-decoration-none">{formData.phone}</a>
              ) : (
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="form-control d-inline-block" style={{ maxWidth: "250px" }} />
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

          <div className="user-info-item">
            <span className="user-label"><i className="bi bi-person-vcard-fill me-2"></i>Codice Fiscale:</span>
            <span className="user-fiscal-code">{formData.fiscalCode}</span>
          </div>

          <div className="text-center mt-4">
            <Link to={`/trips/${tripId}`} className="back-button">Torna ai dettagli del viaggio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
