import React, { Component } from "react";
import DisplayProductData from "./components/DisplayProductData";
import { Icon } from 'semantic-ui-react'
import DisplayCategoriesList from './components/DisplayCategoriesList'
import { getData } from "./modules/productData";

class Home extends Component {
  state = {
		productData: [],
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
        <DisplayProductData productData={this.state.productData}/>
        <DisplayCategoriesList/>
     </div>
    </>
    );
  }
 };

export default Home;