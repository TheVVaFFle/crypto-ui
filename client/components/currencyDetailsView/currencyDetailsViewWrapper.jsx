import {connect} from 'react-redux'

import {CurrencyDetailsView} from './currencyDetailsView'

import {
  selectedCurrencyDetailsSelector
} from '../../selectors/currencySelector'

const mapStateToProps = state => {
  return {
    details: selectedCurrencyDetailsSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const CurrencyDetailsViewWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyDetailsView)

export default CurrencyDetailsViewWrapper