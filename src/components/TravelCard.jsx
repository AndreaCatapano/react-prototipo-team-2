import { Link } from "react-router-dom";
import "../style/TravelCard.css";

export default function TravelCard({ data }) {
  return (
    <div className="container mb-3">
      <div className="col-12">
        <Link to={`/trips/${data.id}`} className="text-decoration-none">
          <div className="travel-card">
            <div className="travel-card-image-container ratio ratio-16x9">
              <img
                src={`../../public/img/${data.image}`}
                className="travel-card-image"
                alt={data.packageName}
              />
            </div>
            <div className="travel-card-overlay card-img-overlay d-flex flex-column">
              <h5 className="travel-card-title">{data.packageName}</h5>
              <span className="travel-card-date">
                {data.departure} - {data.return}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
