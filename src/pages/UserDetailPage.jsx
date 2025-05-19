import { useParams, Link } from "react-router-dom";
import userDataDemo from "../data/userDataDemo";

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
    <div className="container py-4">
      <h1>
        {firstName} {lastName}
      </h1>
      <ul className="list-unstyled fs-5">
        <li>
          <strong>Telefono: </strong>
          <a href={`tel:${phone}`} className="text-decoration-none">{phone}</a>
        </li>
        <li>
          <strong>Email: </strong>
          <a href={`mailto:${email}`} className="text-decoration-none">{email}</a>
        </li>
        <li>
          <strong>Codice Fiscale: </strong>
          {fiscalCode}
        </li>
      </ul>

      <Link to={`/trips/${tripId}`} className="btn btn-outline-primary mt-3 me-2">
        Torna alla scheda del viaggio
      </Link>

      <Link to="/" className="btn btn-secondary mt-3">
        Torna alla homepage
      </Link>
    </div>
  );
}
