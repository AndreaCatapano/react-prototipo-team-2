import { useParams, Link } from "react-router-dom";
import userDataDemo from "../data/userDataDemo";
import "../style/UserDetailPage.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function UserDetailPage() {
  const { id } = useParams();
  const user = userDataDemo.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <div className="user-not-found">
          <h2>Utente non trovato</h2>
        </div>
        <Link to="/" className="back-button mt-3">
          Torna alla homepage
        </Link>
      </div>
    );
  }

  const { firstName, lastName, phone, email, fiscalCode, tripId } = user;

  return (
    <div className="container py-5">
      <div className="user-detail-container">
        <h1 className="user-title">{firstName} {lastName}</h1>

        <div className="user-info-card">
          <div className="user-info-item">
            <span className="user-label">
              <i className="bi bi-envelope-fill me-2"></i>Email:
            </span>
            <a href={`mailto:${email}`} className="user-value text-decoration-none">
              {email}
            </a>
          </div>

          <div className="user-info-item">
            <span className="user-label">
              <i className="bi bi-telephone-fill me-2"></i>Telefono:
            </span>
            <a href={`tel:${phone}`} className="user-value text-decoration-none">
              {phone}
            </a>
          </div>

          <div className="user-info-item">
            <span className="user-label">
              <i className="bi bi-person-vcard-fill me-2"></i>Codice Fiscale:
            </span>
            <span className="user-fiscal-code">{fiscalCode}</span>
          </div>
        </div>

        <Link to={`/trips/${tripId}`} className="back-button">
          Torna ai dettagli del viaggio
        </Link>
      </div>
    </div>
  );
}
