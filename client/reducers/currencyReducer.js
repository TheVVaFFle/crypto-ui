import {
  SET_SELECTED_CURRENCY_ID
} from '../actions/currencyActionTypes'

const selectedCurrencyId = (state = 1, action) => {
  switch(action.type){
    case SET_SELECTED_CURRENCY_ID:
      return action.value
    default:
      return state
  }
}

export {
  selectedCurrencyId
}