import {combineReducers} from 'redux'

import {
  SET_SEARCH_INPUT
} from '../actions/searchActionTypes'

const input = (state = '', action) => {
  switch(action.type){
    case SET_SEARCH_INPUT:
      return action.value
    default:
      return state
  }
}

const search = combineReducers({
  input
})

export {
  search
}