import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home" className="links">
      <span className="Logo">
        <ImLocation />
        TheTrips.com
      </span>
    </Link>
  );
};

export default Logo;
