import { useParams, Link } from "react-router-dom";

// Pagina di dettaglio utente
function UserDetailPage() {
  const { id } = useParams();

  return (
    <div className="container py-4">
      <h1>Dettaglio utente</h1>
      <p>Hai selezionato l'utente con ID: <strong>{id}</strong></p>

      <Link to="/" className="btn btn-secondary mt-3">
        Torna alla homepage
      </Link>
    </div>
  );
}

export default UserDetailPage;
