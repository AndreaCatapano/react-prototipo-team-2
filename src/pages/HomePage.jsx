import TravelCard from "../components/TravelCard";
import travelDataDemo from "../data/travelDataDemo.js";

// Pagina principale con elenco dei viaggi in tre versioni
function HomePage() {
  return (
    <div className="container-fluid p-4 bg-secondary">
      <h1 className="text-center mb-5">Our Travel List</h1>

      <div className="container">
        <div className="row g-3">
          {travelDataDemo.map((travel) => (
            <TravelCard key={travel.id} data={travel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
