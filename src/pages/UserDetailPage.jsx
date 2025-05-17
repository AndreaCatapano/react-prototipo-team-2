import { useParams, Link } from "react-router-dom";
import userDataDemo from "../data/userDataDemo"

// Pagina di dettaglio utente
function UserDetailPage({ }) {
  const { id } = useParams();

  // filteriing user by id
  const user = userDataDemo.filter(user => user.id == id)

  // user destructure
  const { firstName, lastName, phone, email, fiscalCode, tripId } = user[0]

  return (
    <div className="container py-4 mb-3">
      <h1>{firstName} {lastName}</h1>
      <ul className="list-unstyled">
        <li className="p-2"><strong>Phone number:</strong> {phone}</li>
        <li className="p-2"><strong>Email:</strong> {email}</li>
        <li className="p-2"><strong>ID code:</strong> {fiscalCode}</li>
      </ul>

      <Link to={`/trips/${tripId}`} className="btn btn-secondary">
        Torna alla scheda del viaggio
      </Link>
    </div>
  );
}

export default UserDetailPage;
