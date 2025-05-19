import travelDataDemo from '../data/travelDataDemo.js';

export default function AccordioTrip({ dataId }) {

    const currentTrip = travelDataDemo.find(trip => trip.id === parseInt(dataId));

    return <>
        <div className="accordion" id="accordionTrip">
            <div className="accordion-item mb-4">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTrip" aria-expanded="false" aria-controls="collapseTrip">
                        <strong>{currentTrip.packageName}</strong>
                    </button>
                </h2>
                <div id="collapseTrip" className="accordion-collapse collapse" data-bs-parent="#accordionTrip">
                    <div className="accordion-body">
                        <p>Destinazione: <strong>{currentTrip.destination}</strong></p>
                        <p>Dal <strong>{currentTrip.departure}</strong> al <strong>{currentTrip.return}</strong></p>
                        {currentTrip.abstract}
                    </div>
                </div>
            </div>
        </div>
    </>
}