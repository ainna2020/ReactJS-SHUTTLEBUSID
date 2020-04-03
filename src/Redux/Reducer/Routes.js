const initialState = {
  routes: [],
  isLoading: true
  //showModal: false
}

const routesReducer = (state = initialState, action) => {
  console.log('ingg', action.type)
  console.log(action)
  switch (action.type) {
    case 'GET_ROUTES': {
      return {
        ...state,
        isLoading: false,
        routes: action.payload
      }
    } case 'POST_ROUTES': {
      return {
        ...state,
        isLoading: false,
        routes: action.payload
      }
    } case 'UPDATE_ROUTES': {
      return {
        ...state,
        isLoading: false,
        busses: action.payload

      }
    } case 'GET_ROUTES_BY_ID': {
      return {
        ...state,
        isLoading: false,
        busses: action.payload
      }
    }
    default:
      return state
  }
}

export default routesReducer