import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import DisplayProductData from './components/DisplayProductData'
import DisplayCategoriesList from './components/DisplayCategoriesList'
import { getData } from './modules/productData'
import axios from 'axios'

class Home extends Component {
  state = {
    productData: [],
  }

  componentDidMount() {
    this.getProductData()
  }

  async getProductData() {
    let result = await getData()
    this.setState({ productData: result })
  }

  onChangeHandler = async (event) => {
    let selectedCategory = event.target.textContent.toLowerCase()
    let response
    if (selectedCategory === 'view all') {
      this.getProductData()
    } else {
      response = await axios.get(`/categories/${selectedCategory}`)
      this.setState({ productData: response.data.category.products })
    }
  }

  render() {
    return (
      <>
        <div id='container' as='h1'>
          Revisarik
          <Icon name='food' size='large' />
        </div>
        <div id='menu'>
          <DisplayCategoriesList
            onChangeHandler={(event) => this.onChangeHandler(event)}
          />
          <DisplayProductData productData={this.state.productData} />
        </div>
      </>
    )
  }
}
export default Home
