export default function TravelCard({ data }) {

    return <>

        <div className="col">
            <div className="card container mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="replace img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.packageName}</h5>
                            <p className="card-text">Destination: {data.destination}</p>
                            <p className="card-text">Departure: {data.departure}</p>
                            <p className="card-text">Return: {data.return}</p>
                            <a href="#" className="btn btn-primary">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}