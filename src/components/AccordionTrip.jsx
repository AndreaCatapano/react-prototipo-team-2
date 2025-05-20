import travelDataDemo from '../data/travelDataDemo.js';

export default function AccordioTrip({ dataId }) {

    const currentTrip = travelDataDemo.find(trip => trip.id === parseInt(dataId));

    return <>
        <div className="accordion text-white" id="accordionTrip">
            <div className="accordion-item mb-4"
                style={{
                    backgroundImage: `url(/public/img/${currentTrip.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px"
                }}>

                <h2 className="accordion-header" 
                    style={{ 
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px"
                        }}>
                    <button className="accordion-button collapsed fs-4 text-white bg-transparent" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTrip"
                            aria-expanded="false"
                            aria-controls="collapseTrip"
                            style={{
                                boxShadow: "none",
                                outline: "none"
                            }}>
                        <strong>{currentTrip.packageName}</strong>
                    </button>
                </h2>

                <div id="collapseTrip" className="accordion-collapse collapse" data-bs-parent="#accordionTrip">
                    <div className="accordion-body text-white"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px"
                        }}>

                        <p>Destinazione: <strong>{currentTrip.destination}</strong></p>
                        <p>Dal <strong>{currentTrip.departure}</strong> al <strong>{currentTrip.return}</strong></p>
                        {currentTrip.abstract}
                    </div>
                </div>
            </div>
        </div>
    </>
}