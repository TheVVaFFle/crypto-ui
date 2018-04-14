import {connect} from 'react-redux'

import {CurrencyTable} from './currencyTable'

import {fetchCurrencies} from '../../actions/dataActions'

import {setSelectedCurrencyId} from '../../actions/currencyActions'

import {
  currenciesSelector,
  isFetchingCurrenciesSelector,
  isErrorFetchingCurrenciesSelector
} from '../../selectors/dataSelectors'

import {
  searchInputSelector
} from '../../selectors/searchSelectors'

import {
  selectedCurrencyIdSelector
} from '../../selectors/currencySelector'

const mapStateToProps = state => {
  return {
    currencies: currenciesSelector(state),
    selectedCurrencyId: selectedCurrencyIdSelector(state),
    isFetchingCurrencies: isFetchingCurrenciesSelector(state),
    isErrorFetchingCurrencies: isErrorFetchingCurrenciesSelector(state),
    searchInput: searchInputSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrencies: () => dispatch(fetchCurrencies()),
    setSelectedCurrencyId: id => dispatch(setSelectedCurrencyId(id))
  }
}

const CurrencyTableWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyTable)

export default CurrencyTableWrapper