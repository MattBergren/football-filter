import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react';
import Spinner from './Spinner';

class DropdownTeams extends Component {

    state = {
        teamOptions: []
    };

    componentDidMount() {
        this.getDataFromDb();
    }

    handleChange = (event, {value}) => {
        this.props.onTeamSelect(value);
    }

    getDataFromDb = () => {
        fetch("/api/allTeams")
          .then(resp => resp.json())
          .then(data => {
            const teamList = data.teams.map(team => {
                return { key: team._id, value: team._id, text: team.city }
            });
            teamList.unshift({ key: 'all', value: 'all', text: 'All teams'});
            this.setState({ teamOptions: teamList })
          });
    };

    renderContent() {
        const { value } = this.state;

        if(this.state.teamOptions === undefined || this.state.teamOptions.length === 0){
            return <Spinner />
        } else {
            return <Dropdown 
                placeholder='All teams' 
                search 
                selection 
                options={this.state.teamOptions} 
                onChange={this.handleChange}
                value={value}
                />
        }
    }

    render() {
    
        return (
            <div className="dropdown-holder">
                { this.renderContent() }
            </div>
        );
    
    }

}

export default DropdownTeams;