import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import DisplayProductData from "./components/DisplayProductData";
import DisplayCategoriesList from "./components/DisplayCategoriesList";
import { getData } from "./modules/productData";
import axios from "axios";

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
  // I moved this function here from DisplayCategoriesList and added so it updates the state of productData
  // productData is the state that we are using to pass as props to DisplayProducts
  onChangeHandler = async (event) => {
    let selectedCategory = event.target.textContent.toLowerCase();
    let response;
    // I added an if / else here because i implemented a button that will view all products again after choosing a category
    if (selectedCategory === "view all") {
      this.getProductData();
    } else {
      response = await axios.get(`/categories/${selectedCategory}`);
      // down below we are setting the new state och productData with the products of the selected category
      this.setState({ productData: response.data.category.products });
    }
  };

  render() {
    return (
      <>
        <div id="container" as="h1">
          Revisarik
          <Icon name="food" size="large" />
        </div>
        <div id="menu">
          <DisplayCategoriesList
            // passing that function as props to this component to still access the event and the name of each category
            onChangeHandler={(event) => this.onChangeHandler(event)}
          />
          <DisplayProductData productData={this.state.productData} />
        </div>
      </>
    );
  }
}
export default Home;