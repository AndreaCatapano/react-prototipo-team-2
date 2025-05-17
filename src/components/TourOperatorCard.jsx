import { Link } from "react-router-dom";

export function TourOperatorCard({ tripId }) {
  return (
    <div className="container py-4">
      <div className="d-grid gap-2">
        <Link
          to={`/guides/${tripId}`}
          className="btn btn-outline-secondary btn-lg"
        >
          Guida
        </Link>
      </div>
    </div>
  );
}
