import React from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Header } from 'semantic-ui-react'

const App = () => {
  return (
    <>
      <Header id='header' as='h1'>Revisarik</Header>
      <DisplayProductData />
    </>
  );
};

export default App;
