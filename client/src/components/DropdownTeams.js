import React from 'react'
import { Dropdown } from 'semantic-ui-react'


class DropdownTeams extends Component {

    state = {
        teamOptions: []
    };

    render() {
    
        return (
            <Dropdown placeholder='All teams' search selection options={this.state.teamOptions} />
        );
    
    }

}

export default DropdownTeams;