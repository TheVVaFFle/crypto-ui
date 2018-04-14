import {createSelector} from 'reselect'

const currenciesSelector = state => state.data.currencies,
      isFetchingCurrenciesSelector = state => state.data.isFetchingCurrencies,
      isErrorFetchingCurrenciesSelector = state => state.data.isErrorFetchingCurrencies

export {
  currenciesSelector,
  isFetchingCurrenciesSelector,
  isErrorFetchingCurrenciesSelector
}