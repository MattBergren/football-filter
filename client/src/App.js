import React, { Component } from "react";
import './App.css';
import axios from "axios";
import DropdownTeams from './components/DropdownTeams';

class App extends Component {
  
  // initialize our state 
  state = {
    data: []
  };

  componentDidMount() {
    
  }

  render() {
  
    return (

      <div className="ui container">
        <div className="ui stackable grid">
          <div className="five wide column">
            <aside>
              <h2>Filter by:</h2>
              <div className="ui sub header">Team</div>
                <DropdownTeams />
            </aside> 
          </div>
        </div>
      </div>

    );

  }



}

export default App;
