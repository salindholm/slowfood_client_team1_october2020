import React, { Component } from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Icon } from 'semantic-ui-react'
import DisplayCategoriesList from './components/DisplayCategoriesList'

class Home extends Component {

  render() {

  return (
    <>
    <div id="container" as='h1'>Revisarik<Icon name='food' size='large' />
      </div>
      <div id="menu">
        <DisplayProductData />
        <DisplayCategoriesList/>
     </div>
    </>
    );
  }
 };

export default Home;