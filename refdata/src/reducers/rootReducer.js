import { combineReducers } from 'redux'

import theReducerData from './refDataReducer'

const rootReducer = combineReducers({
  propForConnectedComponent: theReducerData
})

export default rootReducer
