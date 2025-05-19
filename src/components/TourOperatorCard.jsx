import { Link } from "react-router-dom";

import "../style/travelDetailPage.css"

export function TourOperatorCard({ tripId }) {
  return (
    <div className="container py-4">
      <div className="d-grid gap-2">
        <Link
          to={`/guides/${tripId}`}
          className="general-btn btn"
        >
          <h3>Operatore</h3>
        </Link>
      </div>
    </div>
  );
}
