import DestinationForm from "./DestinationForm";
import Logo from "./logo";
import svgs from "../assets";

const MapsBoard = ({ add_location }) => {
  return (
    <div className="maps-board">
      <Logo />
      <h1>Pick and add your destinations</h1>
      <DestinationForm add_input={add_location} />
      <img src={svgs.destination} alt="picking up from map" className="map-img" />
    </div>
  );
};

export default MapsBoard;
