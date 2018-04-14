import {
  SET_SEARCH_INPUT
} from './searchActionTypes'

const setSearchInput = value => {
  return {
    type: SET_SEARCH_INPUT,
    value
  }
}

export {
  setSearchInput
}