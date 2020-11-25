import React from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Header } from 'semantic-ui-react'
import DisplayCategoriesList from './components/DisplayCategoriesList'

const Home = () => {
  return (
    <>
      <Header id='RestaurantName' as='h1'>Revisarik</Header>
      <DisplayProductData />
      <DisplayCategoriesList/>
    </>
  );
};

export default Home;