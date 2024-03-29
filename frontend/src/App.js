import React, { Component } from "react";
import "./App.css";
import DropdownTeams from "./components/DropdownTeams";
import RadioPositions from "./components/RadioPositions";
import TogglePro from "./components/TogglePro";
import CardList from "./components/CardList";

class App extends Component {
  // initialize our state
  state = {
    team: "all",
    position: "all",
    proBowl: false,
  };

  onTeamSelect = (team) => {
    this.setState({ team });
  };

  onPositionSelect = (position) => {
    this.setState({ position });
  };

  onProToggle = (proBowl) => {
    this.setState({ proBowl });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui stackable grid">
          <div className="five wide column">
            <aside>
              <h2>Filter by:</h2>
              <div className="ui sub header">Team</div>
              <DropdownTeams onTeamSelect={this.onTeamSelect} />
              <div className="ui sub header">Position</div>
              <RadioPositions onPositionSelect={this.onPositionSelect} />
              <TogglePro onProToggle={this.onProToggle} />
            </aside>
          </div>
          <div className="eleven wide column">
            <CardList
              team={this.state.team}
              position={this.state.position}
              proBowl={this.state.proBowl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
