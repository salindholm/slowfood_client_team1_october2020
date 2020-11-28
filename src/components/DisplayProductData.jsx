import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class DisplayProductData extends Component {
  // state = {
  // 	productData: [],
  // };

  render() {
    let dataIndex;
    const data = this.props.productData;
    if (Array.isArray(data) && data) {
      dataIndex = (
        <div id="index">
          {data.map((item) => {
            return (
              <div key={item.id} data-cy={`product-${item.id}`}>
                {item.name},{item.description},{item.price}
                {localStorage.getItem("authenticated") === "true" && (
                 <button>Add to Order</button>
                )}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <p id="message">Sorry! Unfortunately we have issues with our menu</p>
      );
    }

    return <div>{dataIndex}</div>;
  }
}

export default DisplayProductData;
