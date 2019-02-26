import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class RadioPositions extends Component {
    
    state = {
      value: 'all'
    };

    handleChange = (event, {value}) => {
        this.props.onPositionSelect(value);
        this.setState({ value });
    }

  render() {
    return (
      <Form id="position-filter">
        <Form.Field>
          <Radio
            label='All'
            name='radioGroup'
            value='all'
            checked={this.state.value === 'all'}
            onChange={this.handleChange}
          
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='QB'
            name='radioGroup'
            value='QB'
            checked={this.state.value === 'QB'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='RB'
            name='radioGroup'
            value='RB'
            checked={this.state.value === 'RB'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='WR'
            name='radioGroup'
            value='WR'
            checked={this.state.value === 'WR'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            radio
            label='TE'
            name='checkboxRadioGroup'
            value='TE'
            checked={this.state.value === 'TE'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}

export default RadioPositions;