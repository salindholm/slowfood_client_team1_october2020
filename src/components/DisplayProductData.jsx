import React, { Component } from "react";


class DisplayProductData extends Component {
  // state = {
  // 	productData: [],
  // };
//   async addToOrder (event) {
//     let productID = parseInt(event.target.dataset.product)
//     let headers = JSON.parse(localStorage.getItem('credentials')) // RED FLAG
//     let response = await axios.post('http://localhost:3000/api/orders', 
//     {product_id: productID},
//     { headers: headers })
// }

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
                 <button
                 data-product={item.id}
                 onClick={(event) => this.props.addToOrder(event)}>Add to Order</button>
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
