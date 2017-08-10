import refDataApi from '../api/refDataApi'
import * as types from './actionTypes'

export function loadRefDataSuccess(refData) {
  return {
    type: types.LOAD_REFDATA_SUCCESS,
    loadedRefData: refData
  }
}

export function loadRefData(key) {
  return function (dispatch) {
    return refDataApi.getRefData(key)
      .then(refData => dispatch(loadRefDataSuccess(refData)))
      .catch(error => { throw (error) })
  }
}
