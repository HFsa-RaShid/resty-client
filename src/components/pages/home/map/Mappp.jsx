import { Map, Marker } from "pigeon-maps"
import { PiAirplaneTiltFill } from "react-icons/pi";
import { GiCargoShip } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
const Mappp = () => {
  return (
    <div className="container mx-auto flex gap-20 my-20">
      <div className="w-[60%]">
      <Map height={450} defaultCenter={[22.7033, 90.3415]} defaultZoom={11}>
      <Marker width={50} anchor={[22.7033, 90.3415]} />
    </Map>
      </div>
      <div className="w-[40%]">
        <h1 className="text-3xl font-bold mb-6">EXPLORE OUR LOCATION</h1>

        <p className="py-4">Sagordi is an area located in Barishal Sadar, Barishal, Bangladesh, known for its vibrant atmosphere and strategic importance due to the presence of Sagordi Bridge. Situated along the banks of the Kirtankhola River, Sagordi serves as a bustling hub for transportation, commerce, and cultural activities.</p>
        <div className="flex gap-2 items-center text-2xl my-4">
        <PiAirplaneTiltFill className="text-red-400"/>
        <p>22 minutes taxi to airport <span className="text-sm">5 Km</span></p>

        </div>
        <div className="flex gap-2 items-center text-2xl my-2">
        <GiCargoShip className="text-red-400"/>
        <p>10 minutes taxi to launch ghat <span className="text-sm">1 km</span></p>

        </div>
        <div className="flex gap-2 items-center text-2xl my-4">
        <FaCarAlt className="text-red-400"/>
        <p>4 minutes to paid parking <span className="text-sm">200 Tk/day</span></p>

        </div>

      </div>
    </div>
  );
};

export default Mappp;
