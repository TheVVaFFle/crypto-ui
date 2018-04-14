import {
  SET_SELECTED_CURRENCY_ID
} from './currencyActionTypes'

const setSelectedCurrencyId = value => {
  return {
    type: SET_SELECTED_CURRENCY_ID,
    value
  }
}

export {
  setSelectedCurrencyId
}