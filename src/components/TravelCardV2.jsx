import { Link } from "react-router-dom";

// Card con header e link a viaggio + guida
function TravelCardV2({ data }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">{data.packageName}</div>
        <div className="card-body">
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

export default TravelCardV2;
