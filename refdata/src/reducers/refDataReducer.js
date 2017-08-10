import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function refDataReducer(state = initialState.loadedRefData, action) {
  switch (action.type) {
    case types.LOAD_REFDATA_SUCCESS:
      return action.loadedRefData
    default:
      return state
  }
}