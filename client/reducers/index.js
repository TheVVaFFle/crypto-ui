import {combineReducers} from 'redux'

import {
  data
} from './dataReducer'

import {
  search
} from './searchReducer'

import {
  indicators
} from './indicatorReducer'

import {
  selectedCurrencyId
} from './currencyReducer'

const indexReducer = combineReducers({
  data,
  search,
  selectedCurrencyId,
  indicators
})

export {
  indexReducer
}