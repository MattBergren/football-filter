import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

class TogglePro extends Component {
  state = { checked: false }
  handleChange = (event, {checked}) => {
    this.props.onProToggle(checked);
    this.setState({ checked });   
    }

  render() {
    return (
      <div>
        <Checkbox 
            toggle
            label='Pro Bowl' 
            onChange={this.handleChange} 
            checked={this.state.checked} 
        />
      </div>
    )
  }
}

export default TogglePro;