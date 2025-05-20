import { Link } from "react-router-dom";
import "../style/TuorOperatorCard.css";

export function TourOperatorCard({ tripId }) {
  return (
    <div className="container py-4 tour-operator-container">
      <div className="tour-operator-grid">
        <Link to={`/guides/${tripId}`} className="tour-operator-link">
          <h3 className="tour-operator-title">Operatore</h3>
        </Link>
      </div>
    </div>
  );
}
