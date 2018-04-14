import {createSelector} from 'reselect'

import {currenciesSelector} from './dataSelectors'

const selectedCurrencyIdSelector = state => state.selectedCurrencyId,
      selectedCurrencyDetailsSelector = createSelector(
        selectedCurrencyIdSelector,
        currenciesSelector,
        (id, currencies) => currencies.find(currency => currency.id === id)
      )

export {
  selectedCurrencyIdSelector,
  selectedCurrencyDetailsSelector
}