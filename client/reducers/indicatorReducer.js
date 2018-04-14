import {combineReducers} from 'redux'

import {
  IS_SCROLL_AT_TOP
} from '../actions/indicatorActionTypes'

const isScrollAtTop = (state = true, action) => {
  switch(action.type){
    case IS_SCROLL_AT_TOP:
      return action.value
    default:
      return state
  }
}

const indicators = combineReducers({
  isScrollAtTop
})

export {
  indicators
}