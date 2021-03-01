import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productService } from '../modules/productService'
import axios from "axios";

const DisplayProducts = () => {
  const dispatch = useDispatch()
  const { productsFeed } = useSelector((state) => state)
  const [orderMessage, setOrderMessage] = useState()

  useEffect(() => {
    productService.index(dispatch)
  }, [dispatch])

  const addToOrder = async (productID) => {
    const response = await axios.post(
      '/orders',
      { product_id: productID },
    ) 
    setOrderMessage(response.data.message)
  }

  return (
    <>
    <div data-cy='products-index'>
      {productsFeed &&
        productsFeed.map((product) => {
          return (
            <div key={product.id}
            data-cy={`product-${product.id}`}>
              {product.name}
              {product.description}
              {product.price}
              <button
                data-cy={`add-to-order-button${product.id}`}
                onClick={() => addToOrder(product.id)}
              >
                Add To Order
              </button>
            </div> )
        })}
    </div>
       <p data-cy="order-message">{orderMessage}</p>
       </>
  )
}

export default DisplayProducts
