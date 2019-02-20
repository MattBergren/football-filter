import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

class RadioPositions extends Component {
    
    state = {};

    handleChange = (event, {value}) => {
        this.props.onPositionSelect(value);
        this.setState({ value });
    }

  render() {
    return (
      <Form id="position-filter">
        <Form.Field>
          <Checkbox
            radio
            label='All'
            name='checkboxRadioGroup'
            value='all'
            checked={this.state.value === 'all'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='QB'
            name='checkboxRadioGroup'
            value='qb'
            checked={this.state.value === 'qb'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='RB'
            name='checkboxRadioGroup'
            value='rb'
            checked={this.state.value === 'rb'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='WR'
            name='checkboxRadioGroup'
            value='wr'
            checked={this.state.value === 'wr'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='TE'
            name='checkboxRadioGroup'
            value='te'
            checked={this.state.value === 'te'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}

export default RadioPositions;