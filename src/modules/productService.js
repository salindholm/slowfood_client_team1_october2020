import axios from 'axios'

const productService = {
  async index(dispatch) {
    const result = await axios.get('/products')
    dispatch({ type: 'GET_PRODUCTS', payload: result.data.products })
  },
}

export {productService}