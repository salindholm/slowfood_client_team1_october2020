import React, { Component } from "react";
import { getData } from "../modules/productData";

class DisplayProductData extends Component {
  state = {
    productData: [],
  };

  componentDidMount() {
    this.getProductData();
  }

  async getProductData() {
    let result = await getData();
    this.setState({ productData: result.data.products });
  }

  render() {
    let dataIndex;
    const data = this.state.productData;
    if (Array.isArray(data) && data) {
      dataIndex = (
        <div id="index">
          {data.map((item) => {
            return (
              <div key={item.id}>
                {item.name},{item.description},{item.price}
              </div>
            );
          })}
        </div>
      );
    }

    return <div>{dataIndex}</div>;
  }
}

export default DisplayProductData;
