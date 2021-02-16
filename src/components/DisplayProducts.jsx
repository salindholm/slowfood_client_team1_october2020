import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productService } from '../modules/productService'

const DisplayProducts = () => {
  const dispatch = useDispatch()
  const { productsFeed } = useSelector((state) => state)

  useEffect(() => {
    productService.index(dispatch)
  }, [dispatch])

  return (
    <div data-cy='products-index'>
      {productsFeed &&
        productsFeed.map((product) => {
          return (
            <div key={product.id}>
              {product.name}
              {product.description}
              {product.price}
            </div>
          )
        })}
    </div>
  )
}

export default DisplayProducts
