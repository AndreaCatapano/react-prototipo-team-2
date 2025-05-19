import { useParams, Link } from "react-router-dom";
import userDataDemo from "../data/userDataDemo";
import "../style/UserDetailPage.css"

// Pagina di dettaglio utente
function UserDetailPage({ }) {
  const { id } = useParams();

  // filteriing user by id
  const user = userDataDemo.filter((user) => user.id == id);

  // user destructure
  const { firstName, lastName, phone, email, fiscalCode, tripId } = user[0];

  return (
    <div className="container py-4 mb-3">
      {/* <h1>{firstName} {lastName}</h1>
      <ul className="list-unstyled">
        <li className="p-2"><strong>Phone number:</strong> {phone}</li>
        <li className="p-2"><strong>Email:</strong> {email}</li>
        <li className="p-2"><strong>ID code:</strong> {fiscalCode}</li>
      </ul> */}


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

export default UserDetailPage;
