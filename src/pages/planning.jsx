import React from "react";
import "./planning.css";
import TripBoard from "./../components/TripBoard";
import MapsBoard from "../components/MapBoard";

class Planning extends React.Component {
  state = { locations: [] };

  componentDidMount() {
    var Locations = JSON.parse(localStorage.getItem("locations"));
    if (Locations) {
      this.setState({ locations: Locations });
    } else {
      localStorage.setItem("locations", JSON.stringify(this.state.locations));
    }
  }

  //ALWAYS use arrow functions here, because this function is passed as a prop to another component
  // and inside another component context changes hence "this" might be undefined or something else
  add_location = (location) => {
    //it's a regex looking for a line start (^), followed by zero or more whitespace (\s*) characters, followed by a line end ($).
    if (!location.name || /^\s*$/.test(location.name)) {
      return;
    }
    const newlocations = [...this.state.locations, location];

    console.log("This is the input location: ", this.state.locations);
    localStorage.setItem("locations", JSON.stringify(newlocations));
    this.setState({ locations: newlocations });
    console.log("This is the location just added: ", this.state.locations);
    console.log(newlocations);
  };

  remove_location = (id) => {
    const removedLocations = [...this.state.locations].filter(
      (location) => location.id !== id
    );
    localStorage.setItem("locations", JSON.stringify(removedLocations));
    this.setState({ locations: removedLocations });
  };

  render() {
    return (
      <div className="planning-container">
        <div className="planning-board">
          <h1>Create a new Trip</h1>
          <TripBoard
            locations={this.state.locations}
            remove_location={this.remove_location}
          />
        </div>
        <MapsBoard add_location={this.add_location} />
      </div>
    );
  }
}
export default Planning;
