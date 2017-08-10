import { combineReducers } from 'redux'

import theReducerData from './refDataReducer'

const rootReducer = combineReducers({
  // short hand property names
  propForConnectedComponent: theReducerData
})

export default rootReducer
