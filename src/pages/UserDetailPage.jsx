import { useParams, Link } from "react-router-dom";
import userDataDemo from "../data/userDataDemo";
import "../style/UserDetailPage.css"

// Pagina di dettaglio utente
export default function UserDetailPage() {
  const { id } = useParams();

  // Trova l'utente corrispondente all'id
  const user = userDataDemo.find((u) => u.id === parseInt(id));

  // Se non trovato
  if (!user) {
    return (
      <div className="container py-5 text-center">
        <h2>Utente non trovato</h2>
        <Link to="/" className="btn btn-secondary mt-3">
          Torna alla homepage
        </Link>
      </div>
    );
  }

  const { firstName, lastName, phone, email, fiscalCode, tripId } = user;

  return (
    <div className="container py-4 mb-3">
      <div className="user-detail-container">
        <h1 className="user-title">{firstName} {lastName}</h1>

        {user ? (
          <div className="user-info-card">
            <div className="user-info-item">
              <span className="user-label">Email:</span>
              <span className="user-value">{email}</span>
            </div>
            <div className="user-info-item">
              <span className="user-label">Telefono:</span>
              <span className="user-value">{phone}</span>
            </div>
            <div className="user-info-item">
              <span className="user-label">Codice Fiscale:</span>
              <span className="user-value">{fiscalCode}</span>
            </div>
          </div>
        ) : (
          <div className="user-not-found">
            <p className="mb-0">Utente non trovato</p>
          </div>
        )}

        <Link to={`/trips/${tripId}`} className="back-button">
          Torna ai dettagli del viaggio
        </Link>
      </div>
    </div>
  );
}
