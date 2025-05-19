import { useParams, Link } from "react-router-dom";
import userDataDemo from "../data/userDataDemo";
import "../style/UserDetailPage.css"

// Pagina di dettaglio utente
<<<<<<< HEAD
function UserDetailPage({ }) {
=======
function UserDetailPage() {
>>>>>>> refactory-HomePage-Travels-and-add-status-travels
  const { id } = useParams();

  // Filtering user by id
  const user = userDataDemo.filter((user) => user.id == id);

  if (!user.length) {
    return (
      <div className="container py-4">
        <h2>Utente non trovato</h2>
      </div>
    );
  }

  // User destructuring
  const { firstName, lastName, phone, email, fiscalCode, tripId } = user[0];

  return (
<<<<<<< HEAD
    <div className="container py-4 mb-3">
      {/* <h1>{firstName} {lastName}</h1>
      <ul className="list-unstyled">
        <li className="p-2"><strong>Phone number:</strong> {phone}</li>
        <li className="p-2"><strong>Email:</strong> {email}</li>
        <li className="p-2"><strong>ID code:</strong> {fiscalCode}</li>
      </ul> */}
=======
    <div className="container py-4">
      <h1>
        {firstName} {lastName}
      </h1>

      <ul className="list-unstyled mt-3">
        <li className="mb-2">
          <strong>
            <i className="bi bi-telephone-fill me-2"></i>
            Telefono:
          </strong>{" "}
          <a href={`tel:${phone}`} className="text-decoration-none">
            {phone}
          </a>
        </li>

        <li className="mb-2">
          <strong>
            <i className="bi bi-envelope-fill me-2"></i>
            Email:
          </strong>{" "}
          <a href={`mailto:${email}`} className="text-decoration-none">
            {email}
          </a>
        </li>

        <li className="mb-2">
          <strong>
            <i className="bi bi-person-vcard me-2"></i>
            Codice fiscale:
          </strong>{" "}
          {fiscalCode}
        </li>
      </ul>
>>>>>>> refactory-HomePage-Travels-and-add-status-travels


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
