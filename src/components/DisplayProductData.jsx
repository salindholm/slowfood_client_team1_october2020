import React, { Component } from "react";

class DisplayProductData extends Component {
  render() {
    let dataIndex;
    const data = this.props.productData;
    if (Array.isArray(data) && data) {
      dataIndex = (
        <div id="index">
          {data.map((item) => {
            return (
              <div key={item.id} data-cy={`product-${item.id}`}>
                {item.title},{item.ingredients},{item.price}
                {localStorage.getItem("authenticated") === "true" && (
                  <button
                    data-product={item.id}
                    onClick={(event) => this.props.addToOrder(event)}
                  >
                    Add to Order
                  </button>
                )}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <h2 id="message">
          Sorry! Unfortunately we have issues with online system. <br/>Please pick up
          your order and bring cash!{" "}
        </h2>
      );
    }

    return <div>{dataIndex}</div>;
  }
}

export default DisplayProductData;
