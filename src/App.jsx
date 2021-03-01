import React from 'react';
import DisplayProducts from './components/DisplayProducts';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
      <h1>Pizza Please</h1>
      <Registration/>
      <DisplayProducts/>
    </>
  );
}

export default App;
