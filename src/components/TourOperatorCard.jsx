import { Link } from "react-router-dom";
import guidesDataDemo from "../data/guidesDataDemo.js"; // Importiamo i dati delle guide

export function TourOperatorCard({ tripId }) {
  const guide = guidesDataDemo.find((guide) => guide.tripId === tripId);
  const guideId = guide ? guide.id : null;

  return (
    <div className="container py-4">
      <div className="d-grid gap-2">
        {guideId && (
          <Link
            to={`/guides/${guideId}`}
            className="general-btn p-2 text-decoration-none"
          >
            <h3>Operatore</h3>
          </Link>
        )}
      </div>
    </div>
  );
}
