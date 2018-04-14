import {createSelector} from 'reselect'

const currenciesSelector = state => state.data.currencies,
      isFetchingCurrenciesSelector = state => state.data.isFetchingCurrencies,
      isErrorFetchingCurrenciesSelector = state => state.data.isErrorFetchingCurrencies

      
const globalDataSelector = state => state.data.globalData,
      isFetchingGlobalDataSelector = state => state.data.isFetchingGlobalData,
      isErrorFetchingGlobalDataSelector = state => state.data.isErrorFetchingGlobalData

export {
  currenciesSelector,
  isFetchingCurrenciesSelector,
  isErrorFetchingCurrenciesSelector,
  globalDataSelector,
  isFetchingGlobalDataSelector,
  isErrorFetchingGlobalDataSelector
}