import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Meat', value: 1 },
  { key: 2, text: 'Veggie', value: 2 },
  { key: 3, text: 'Glutenfree', value: 3 },
]
debugger
const DisplayCategoriesList = () => (
 <Menu compact >
   <Dropdown text='Select a category' data-cy="dropdown" options={options} simple item />
 </Menu>
)

export default DisplayCategoriesList;