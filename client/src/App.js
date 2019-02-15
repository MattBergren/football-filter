import React, { Component } from "react";
import './App.css';
import axios from "axios";

class App extends Component {
  
  // initialize our state 
  state = {
    data: []
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("/api")
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }));
  };

  renderContent() {
    if(this.state.data === undefined || this.state.data.length === 0){
      return <p>Loading contents ...</p>
    } else {
      console.log(this.state.data);
      const teams = this.state.data.teams.map((team) => {
        return <li>{team.city}</li>
      });
      return <ul>{teams}</ul>
    }
  }
 
  render() {
  
    return (

      <div className="ui container">
        <div className="ui stackable grid">
          <div className="five wide column">
            <aside>
              <h2>Filter by:</h2>
              <div className="ui sub header">Team</div>
              {this.renderContent()}
            </aside> 
          </div>
        </div>
      </div>


      // <ul>
      //     {data.length <= 0
      //       ? "NO DB ENTRIES YET"
      //       : data.map(dat => (
      //           <li style={{ padding: "10px" }} key={data.message}>
      //             <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
      //             <span style={{ color: "gray" }}> data: </span>
      //             {dat.message}
      //           </li>
      //         ))}
      //   </ul>
      
      
      // <CardList teams={this.state.data.teams}  />
    );

  }



}

export default App;
