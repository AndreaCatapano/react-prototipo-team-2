import { useParams, Link } from "react-router-dom";

// Pagina di dettaglio guida
function GuideDetailPage() {
  const { id } = useParams();

  return (
    <div className="container py-4">
      <h1>Dettaglio guida</h1>
      <p>Hai selezionato la guida con ID: <strong>{id}</strong></p>

      <Link to="/" className="btn btn-secondary mt-3">
        Torna alla homepage
      </Link>
    </div>
  );
}

export default GuideDetailPage;
