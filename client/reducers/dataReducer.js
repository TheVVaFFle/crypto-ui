import {combineReducers} from 'redux'
import { 
  SET_CURRENCIES,
  IS_FETCHING_CURRENCIES,
  IS_ERROR_FETCHING_CURRENCIES
} from '../actions/dataActionTypes'

const currencies = (state = [], action) => {
  switch(action.type){
    case SET_CURRENCIES:
      return action.value
    default:
      return state
  }
}

const isFetchingCurrencies = (state = false, action) => {
  switch(action.type){
    case IS_FETCHING_CURRENCIES:
      return action.value
    default:
      return state
  }
}

const isErrorFetchingCurrencies = (state = false, action) => {
  switch(action.type){
    case IS_ERROR_FETCHING_CURRENCIES:
      return action.value
    default:
      return state
  }
}

const data = combineReducers({
  currencies,
  isFetchingCurrencies,
  isErrorFetchingCurrencies
})

export {
  data
}