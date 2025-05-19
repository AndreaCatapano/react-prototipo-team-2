import { Link } from "react-router-dom";

export function TourOperatorCard({ tripId }) {
  return (
    <div className="container py-4">
      <div className="d-grid gap-2">
        <Link
          to={`/guides/${tripId}`}
          className="general-btn p-2 text-decoration-none"
        >
          <h3>Operatore</h3>
        </Link>
      </div>
    </div>
  );
}
