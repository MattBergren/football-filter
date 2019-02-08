import React, { Component } from "react";
import axios from "axios";
import CardList from './components/CardList';

class App extends Component {
  
  // initialize our state 
  state = {
    data: []
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/getData")
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }));
  };

  renderContent() {
    if(this.state.data === undefined || this.state.data.length === 0){
      return <p>Loading content ...</p>
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
      
      <div>{this.renderContent()}</div>
      // <CardList teams={this.state.data.teams}  />
    );

  }



}

export default App;
