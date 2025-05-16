//data
//travel
import TravelCardV1 from "../components/TravelCardV1";
import TravelCardV2 from "../components/TravelCardV2";
import TravelCardV3 from "../components/TravelCardV3";

import { travelDataDemo } from "../data/travelDataDemo";

export default function HomePage() {

    console.log(travelDataDemo);

    return <>
        <div className="container-fluid p-4 bg-secondary">
            <h1 className="text-center">Our Travel List</h1>

            <a href="#" className="btn btn-primary">Travel Details</a>

            <h2>Version 1</h2>
            <div className="row row-cols-3 g-3">
                {travelDataDemo.map(travel => <TravelCardV1 key={travel.id} data={travel} />)}
            </div>

            <hr />
            <h2>Version 2</h2>

            <div className="row row-cols-3 g-3">
                {travelDataDemo.map(travel => <TravelCardV2 key={travel.id} data={travel} />)}
            </div>

            <hr />
            <h2>Version 3</h2>

            <div className="row row-cols-3 g-3">
                {travelDataDemo.map(travel => <TravelCardV3 key={travel.id} data={travel} />)}
            </div>

        </div>
    </>
}