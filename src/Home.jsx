import React from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Header, Icon } from 'semantic-ui-react'
import DisplayCategoriesList from './components/DisplayCategoriesList'

const Home = () => {
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
};

export default Home;