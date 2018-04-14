import axios from 'axios'

import {
  SET_CURRENCIES,
  IS_FETCHING_CURRENCIES,
  IS_ERROR_FETCHING_CURRENCIES,
  SET_GLOBAL_DATA,
  IS_FETCHING_GLOBAL_DATA,
  IS_ERROR_FETCHING_GLOBAL_DATA
} from './dataActionTypes'

import {
  COIN_MARKET_CAP_CURRENCIES_URL,
  COIN_MARKET_CAP_GLOBAL_URL
} from '../constants'

import res from '../data/currencies.json'

import {
  mapCurrencies,
  mapGlobalData
} from '../mappers/dataMapper'

const fetchCurrencies = () => (dispatch, getState) => {
  dispatch(setIsFetchingCurrencies(true))
  dispatch(setIsErrorFetchingCurrencies(false))
  axios.get(COIN_MARKET_CAP_CURRENCIES_URL)
    .then(res => {
      const currencies = mapCurrencies(res.data)
      dispatch(setIsFetchingCurrencies(false))
      dispatch(setCurrencies(currencies))
    })
    .catch(err => {
      dispatch(setIsErrorFetchingCurrencies(true))
      console.error('Error loading currencies from Coin Market Cap')
      console.error(err)
    })
}

const fetchGlobalData = () => (dispatch, getState) => {
  dispatch(setIsFetchingGlobalData(true))
  dispatch(setIsErrorFetchingGlobalData(false))
  axios.get(COIN_MARKET_CAP_GLOBAL_URL)
    .then(res => {
      const globalData = mapGlobalData(res.data)
      dispatch(setIsFetchingGlobalData(false))
      dispatch(setGlobalData(globalData))
    })
    .catch(err => {
      dispatch(setIsErrorFetchingGlobalData(true))
      console.error('Error loading global data from Coin Market Cap')
      console.error(err)
    })

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

const setGlobalData = value => {
  return {
    type: SET_GLOBAL_DATA,
    value
  }
}

const setIsFetchingGlobalData = value => {
  return {
    type: IS_FETCHING_GLOBAL_DATA,
    value
  }
}

const setIsErrorFetchingGlobalData = value => {
  return {
    type: IS_ERROR_FETCHING_GLOBAL_DATA,
    value
  }
}

export {
  fetchCurrencies,
  fetchGlobalData
}