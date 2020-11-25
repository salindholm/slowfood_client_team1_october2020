import React from 'react'
import { Link } from "react-router-dom"
import { Menu, Segment } from 'semantic-ui-react';

const Header = () => {
  return (
    <Segment>
      <Menu.Item 
        id="Header"
        name="Home"
        as={Link}
        to={{ pathname: "/" }}
         />
    </Segment>

  )
}

export default Header