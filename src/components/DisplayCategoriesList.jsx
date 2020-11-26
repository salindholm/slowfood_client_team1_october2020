import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Meat', value: 'meat' },
  { key: 2, text: 'Veggie', value: 'veggie' },
  { key: 3, text: 'Glutenfree', value: 'glutenfree' },
]

class DisplayCategoriesList extends Component {

  onChangeHandler = e => { debugger
    this.setState({ value: e.target.value });
  };


    return () {
      <Menu compact >
        <Dropdown
        onChange={this.handleChange}
        id="options"
        text='Select a category'
        data-cy="dropdown"
        options={options}
        simple item />
      </Menu>

  }
}

export default DisplayCategoriesList;