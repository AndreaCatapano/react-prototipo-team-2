export default function TravelCardV2({ data }) {

    return <>
        <div className="col">
            <div className="card">
                <div className="card-header">
                    {data.packageName}
                </div>
                <div className="card-body">
                    <p className="card-text">Destination: {data.destination}</p>
                    <p className="card-text">Departure: {data.departure}</p>
                    <p className="card-text">Return: {data.return}</p>
                    <a href="#" className="btn btn-primary">See more</a>
                </div>
            </div>
        </div>
    </>
}