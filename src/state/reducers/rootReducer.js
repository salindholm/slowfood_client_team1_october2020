import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        productsFeed: action.payload,
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        credentials: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
