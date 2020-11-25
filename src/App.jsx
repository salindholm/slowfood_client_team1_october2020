import React from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Header, Icon } from 'semantic-ui-react'

const App = () => {
  return (
    <div>
      <Header id='header' as='h1'>Revisarik</Header>
      <Icon name='laptop'/>
      <DisplayProductData />
    </div>
  );
};

export default App;
