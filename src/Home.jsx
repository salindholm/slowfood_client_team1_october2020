import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import DisplayProductData from "./components/DisplayProductData";
import DisplayCategoriesList from "./components/DisplayCategoriesList";
import { getData } from "./modules/productData";
import axios from "axios";

class Home extends Component {
  state = {
    productData: [],
    message: null,
    orderItemsCount: null,
  };

  componentDidMount() {
    this.getProductData();
  }

  async getProductData() {
    let result = await getData();
    this.setState({ productData: result });
  }
  // I moved this function here from DisplayCategoriesList and added so it updates the state of productData
  // productData is the state that we are using to pass as props to DisplayProducts. I add number 22
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

  async addToOrder (event) {
    let productID = parseInt(event.target.dataset.product)
    let headers = JSON.parse(localStorage.getItem('credentials')) // RED FLAG
    let response = await axios.post('http://localhost:3000/api/orders', 
    {product_id: productID},
    { headers: headers })

    this.setState({message: response.data.message})
    let count = response.data.order.items.length
    this.setState({ orderItemsCount: count})
}
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
          { this.state.message && <h2 data-cy="message">{this.state.message}</h2>}
          { this.state.orderItemsCount && <h3 data-cy="order-items-count">You have {this.state.orderItemsCount} item in your order</h3>}
          <DisplayProductData productData={this.state.productData} addToOrder={(event) => this.addToOrder(event)} />
        </div>
      </>
    );
  }
}
export default Home;