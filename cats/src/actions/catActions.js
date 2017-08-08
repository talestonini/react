import catApi from '../api/catApi'
import * as types from './actionTypes'

export function loadCatsSuccess(cats) {
  return {
    type: types.LOAD_CATS_SUCCESS,
    cats
  }
}

export function loadCats() {
  return function (dispatch) {
    return catApi.getAllCats()
      .then(cats => dispatch(loadCatsSuccess(cats)))
      .catch(error => { throw (error) })
  }
}
