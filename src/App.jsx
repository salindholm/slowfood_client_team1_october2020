import React from 'react'
import Home from './Home'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
     </Switch>
     <Footer/>
    </>
  );
};
export default App;