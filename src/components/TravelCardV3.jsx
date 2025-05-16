import { Link } from "react-router-dom";

// Card semplice con link a viaggio + guida
function TravelCardV3({ data }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.packageName}</h5>
          <p className="card-text">Destination: {data.destination}</p>
          <p className="card-text">Departure: {data.departure}</p>
          <p className="card-text">Return: {data.return}</p>

          <Link to={`/trips/${data.id}`} className="btn btn-primary me-2">
            Vedi viaggio
          </Link>

          <Link to={`/guides/${data.id}`} className="btn btn-outline-secondary">
            Guida
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TravelCardV3;
