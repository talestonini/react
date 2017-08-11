import * as types from '../actions/actionTypes'

const initialState = {
  loadedRefData: {
    albums: []
  }
}

const refDataReducer = (state = initialState.loadedRefData, action) => {
  switch (action.type) {
    case types.LOAD_REFDATA_SUCCESS:
      return action.loadedRefData
    default:
      return state
  }
}

export default refDataReducer
