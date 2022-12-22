import { AiFillDelete } from "react-icons/ai";

const DestinationCard = ({ name, id, date, time, remove_location }) => {
  return (
    <div className="dest-card">
      <div className="dest-name">{name}</div>
      <p>{date}</p>
      <p>{time}</p>
      <button className="dlt-btn" onClick={() => remove_location(id)}>
        <AiFillDelete size="2rem" />
      </button>
    </div>
  );
};

export default DestinationCard;
