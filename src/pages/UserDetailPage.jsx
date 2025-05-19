import { useParams, Link } from "react-router-dom";
import userDataDemo from "../data/userDataDemo";

// Pagina di dettaglio utente
function UserDetailPage() {
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

      <Link to={`/trips/${tripId}`} className="btn btn-secondary mt-3">
        Torna alla scheda del viaggio
      </Link>
    </div>
  );
}

export default UserDetailPage;
