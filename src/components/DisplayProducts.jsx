import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productService } from '../modules/productService';
import axios from 'axios';

const DisplayProducts = () => {
  const dispatch = useDispatch();
  const { productsFeed } = useSelector((state) => state);
  const [orderMessage, setOrderMessage] = useState();
  const [orderID, setOrderID] = useState();
  const [itemsCountMessage, setItemsCountMessage] = useState();
  const credentials = useSelector((state) => state.credentials);

  useEffect(() => {
    productService.index(dispatch);
  }, [dispatch]);

  const addToOrder = async (productID, productName) => {
    if (orderID) {
      let response = await axios.put(
        '/orders',
        { product_id: productID },
        { headers: credentials }
      );
      setItemsCountMessage(
        `You have ${response.data.items.lenght} items in your order`
      );
      setOrderMessage(`${response.data.message} (1 x ${productName})`);
    } else {
      let response = await axios.post(
        '/orders',
        { product_id: productID },
        { headers: credentials }
      );
      setOrderID(response.data.items[0].order_id);
      setItemsCountMessage(`You have 1 item in your order.`);
      setOrderMessage(`${response.data.message} (1 × ${productName})`);
    }
  };
  return (
    <>
      <div data-cy='products-index'>
        {productsFeed &&
          productsFeed.map((product) => {
            return (
              <div key={product.id} data-cy={`product-${product.id}`}>
                {product.name}
                {product.description}
                {product.price}
                <button
                  data-cy={`add-to-order-button${product.id}`}
                  onClick={() => addToOrder(product.id, product.name)}
                >
                  Add To Order
                </button>
              </div>
            );
          })}
      </div>
      <p data-cy='order-message'>{orderMessage}</p>
      <p data-cy='items-count-message'>{itemsCountMessage}</p>
    </>
  );
};

export default DisplayProducts;
