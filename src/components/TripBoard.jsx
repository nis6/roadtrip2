import DestinationCard from "./DestinationCard";

const TripBoard = (props) => {
  return (
    <div className="trip-board">
      {props.locations.map(({ id, name, date, time }) => (
        <DestinationCard
          key={id}
          remove_location={props.remove_location}
          id={id}
          name={name}
          date={date}
          time={time}
        />
      ))}
    </div>
  );
};

export default TripBoard;
