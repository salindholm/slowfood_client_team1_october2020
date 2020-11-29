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

  onChangeHandler = async (event) => {
    let selectedCategory = event.target.textContent.toLowerCase();
    let response;
    if (selectedCategory === "view all") {
      this.getProductData();
    } else {
      response = await axios.get(`/categories/${selectedCategory}`);
      this.setState({ productData: response.data.category.products });
    }
  };

  async addToOrder(event) {
    let productID = parseInt(event.target.dataset.product);
    let headers = JSON.parse(localStorage.getItem("credentials")); 
    let response = await axios.post(
      "http://localhost:3000/api/orders",
      { product_id: productID },
      { headers: headers }
    );

    this.setState({ message: response.data.message });
    let count = response.data.order.items.length;
    this.setState({ orderItemsCount: count });
  }
  render() {
    return (
      <>
        <div id="container" as="h1">
          Revisarik - pick-up is great!
          <Icon name="food" size="large" />
        </div>
        <div id="menu">
          <DisplayCategoriesList
            onChangeHandler={(event) => this.onChangeHandler(event)}
          />
          {this.state.message && (
            <h2 data-cy="message">{this.state.message}</h2>
          )}
          {this.state.orderItemsCount && (
            <h3 data-cy="order-items-count">
              You have {this.state.orderItemsCount} item in your order
            </h3>
          )}
          <DisplayProductData
            productData={this.state.productData}
            addToOrder={(event) => this.addToOrder(event)}
          />
        </div>
      </>
    );
  }
}
export default Home;
