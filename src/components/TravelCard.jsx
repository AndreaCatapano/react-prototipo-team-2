import { Link } from "react-router-dom";

export default function TravelCard({ data }) {

    return <>
        <div className="col-12">
            <div className="card text-bg-dark">
                <img src={`../../public/${data.image}`} className="card-img img-size" alt={data.packageName} />
                <div className="card-img-overlay">
                    <h5 className="card-title">{data.packageName}</h5>
                    <p className="card-text">Destination: {data.destination}</p>
                    <p className="card-text">Departure: {data.departure}</p>
                    <p className="card-text">Return: {data.return}</p>

                    {/* Link al dettaglio viaggio */}
                    <Link to={`/trips/${data.id}`} className="btn btn-primary me-2">
                        Vedi viaggio
                    </Link>
                </div>
            </div>
        </div>
    </>
}