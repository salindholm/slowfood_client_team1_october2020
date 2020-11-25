import React from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Header } from 'semantic-ui-react'

const Home = () => {
  return (
    <>
      <Header id='RestaurantName' as='h1'>Revisarik</Header>
      <DisplayProductData />
    </>
  );
};

export default Home;