import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const StartButton = () => {
  return (
    <Link to="/plan" className="links">
      <button className="start-button">
        <p style={{ margin: "0 0.3rem" }}>Start</p>
        <span>
          <FiArrowRight size="1.2rem" />
        </span>
      </button>
    </Link>
  );
};

export default StartButton;
