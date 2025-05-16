export default function TravelCardV3({ data }) {

    return <>
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{data.packageName}</h5>
                    <p className="card-text">Destination: {data.destination}</p>
                    <p className="card-text">Departure: {data.departure}</p>
                    <p className="card-text">Return: {data.return}</p>
                    <a href="#" className="btn btn-primary">See more</a>
                </div>
            </div>
        </div>
    </>
}