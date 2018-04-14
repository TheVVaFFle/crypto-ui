import {
  SET_CURRENCIES,
  IS_FETCHING_CURRENCIES,
  IS_ERROR_FETCHING_CURRENCIES
} from './dataActionTypes'

import res from '../data/currencies.json'

const fetchCurrencies = () => (dispatch, getState) => {
  dispatch(setIsFetchingCurrencies(true))
  dispatch(setIsErrorFetchingCurrencies(false))
  setTimeout(() => {
    const currencies = res.body.currencies
    dispatch(setIsFetchingCurrencies(false))
    dispatch(setCurrencies(currencies))
  }, 500)
}

const setCurrencies = value => {
  return {
    type: SET_CURRENCIES,
    value
  }
}

const setIsFetchingCurrencies = value => {
  return {
    type: IS_FETCHING_CURRENCIES,
    value
  }
}

const setIsErrorFetchingCurrencies = value => {
  return {
    type: IS_ERROR_FETCHING_CURRENCIES,
    value
  }
}

export {
  fetchCurrencies
}