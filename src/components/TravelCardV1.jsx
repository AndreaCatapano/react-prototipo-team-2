import { Link } from "react-router-dom";

// Card con immagine a sinistra e dettagli a destra
function TravelCardV1({ data }) {
  return (
    <div className="col">
      <div className="card container mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/300x200"
              className="img-fluid rounded-start"
              alt={`Immagine per ${data.packageName}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.packageName}</h5>
              <p className="card-text">Destination: {data.destination}</p>
              <p className="card-text">Departure: {data.departure}</p>
              <p className="card-text">Return: {data.return}</p>

              {/* Link al dettaglio viaggio */}
              <Link to={`/trips/${data.id}`} className="btn btn-primary me-2">
                Vedi viaggio
              </Link>

              {/* Link al dettaglio guida */}
              <Link to={`/guides/${data.id}`} className="btn btn-outline-secondary">
                Guida
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCardV1;
