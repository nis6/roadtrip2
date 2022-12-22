import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function DestinationForm(props) {
  const [input, setInput] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");

  var dtToday = new Date();
  var month = dtToday.getMonth() + 1; //javascript starts month from 0 to ... 11
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var minDate = year + "-" + month + "-" + day;

  const handleSubmit = (e) => {
    e.preventDefault();
    //add_locations used here to add a new location to the state variable of Planning and localStorage
    props.add_input({
      id: Math.floor(Math.random() * 1000),
      name: input,
      date: inputDate,
      time: inputTime,
    });
    //Empty out the input fields after submission
    setInput("");
    setInputDate("");
    setInputTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-fields-container">
        <input
          type="text"
          name="destination"
          className="input-field"
          placeholder="City, State"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <input
          type="date"
          name="destination"
          className="input-field"
          placeholder="Pick a Date"
          min={minDate}
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
        <input
          type="time"
          name="destination"
          className="input-field"
          placeholder="Time you start your journey"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
      </div>

      <button className="add-btn" type="submit">
        Add <AiOutlinePlus />
      </button>
    </form>
  );
}
