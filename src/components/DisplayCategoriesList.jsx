import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Meat', value: 'meat' },
  { key: 2, text: 'Veggie', value: 'veggie' },
  { key: 3, text: 'Glutenfree', value: 'glutenfree' },
]

class DisplayCategoriesList = ({ onChangeHandler }) => {
    return (
      <Menu compact >
        <Dropdown onChange={onChangeHandler} text='Select a category' data-cy="dropdown" options={options} simple item />
      </Menu>
  )

}

export default DisplayCategoriesList;