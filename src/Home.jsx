import React, { Component } from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Icon } from 'semantic-ui-react'
import DisplayCategoriesList from './components/DisplayCategoriesList'
import axios from 'axios'
import { getData } from "./modules/productData";

class Home extends Component {

  onChangeHandler = async (event) => {
    let selectedCategory = event.target.textContent.toLowerCase()
    let response = await axios.get(
      `/categories/${selectedCategory}`, 
    ) 
  };

  componentDidMount() {
    this.getProductData();
  }

  async getProductData() {
    let result = await getData();
    this.setState({ productData: result });
  }

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