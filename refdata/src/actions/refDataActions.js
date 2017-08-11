import refDataApi from '../api/refDataApi'
import * as types from './actionTypes'

export const loadRefData = key => dispatch =>
  refDataApi.getRefData(key)
    .then(refData => dispatch(loadRefDataSuccess(refData)))
    .catch(error => { throw (error) })

export const loadRefDataSuccess = refData => {
  return {
    type: types.LOAD_REFDATA_SUCCESS,
    loadedRefData: refData
  }
}
