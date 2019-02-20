import React, { Component } from "react";
import { Form, Checkbox } from 'semantic-ui-react';
import './App.css';
import axios from "axios";
import DropdownTeams from './components/DropdownTeams';
import RadioPositions from './components/RadioPositions';
import TogglePro from './components/TogglePro';

class App extends Component {
  
  // initialize our state 
  state = {
    team: 'all',
    position: 'all',
    proBowl: false
  };

  componentDidMount() {
    
  }

  onTeamSelect = (team) => {
    this.setState({ team });
  }

  onPositionSelect = (position) => {
    this.setState({ position });
  }

  onProToggle = (proBowl) => {
    this.setState({ proBowl });
  }

  render() {
    console.log('render called');
    return (

      <div className="ui container">
        <div className="ui stackable grid">
          <div className="five wide column">
            <aside>
              <h2>Filter by:</h2>
              <div className="ui sub header">Team</div>
              <DropdownTeams onTeamSelect={this.onTeamSelect} />
              <div className="ui sub header">Position</div>
              <RadioPositions onPositionSelect={this.onPositionSelect}/>
              <TogglePro onProToggle={this.onProToggle} />
            </aside> 
          </div>
        </div>
      </div>

    );

  }



}

export default App;
