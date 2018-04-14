import React, {Component} from 'react'
import classNames from 'classnames'

import Currency from './currency'
import SearchBarWrapper from '../searchBar/searchBarWrapper'

import particlesConfig from '../../effects/particlesConfig.json'

class CurrencyTable extends Component {
  componentDidMount(){
    particlesJS('currency-table-particles', particlesConfig)
    this.props.fetchCurrencies()
  }
  render(){
    const {
      currencies,
      selectedCurrencyId,
      setSelectedCurrencyId,
      isFetchingCurrencies,
      isErrorFetchingCurrencies,
      searchInput
    } = this.props

    let tableBodyContent = null,
        tableBodyClasses = "scroll-bar"
    
    if(isErrorFetchingCurrencies){
      
    }
    else if(isFetchingCurrencies || currencies.length === 0){
      tableBodyClasses = `${tableBodyClasses} is-loading`
      tableBodyContent = []
      for(let i = 0; i < 15; i++){
        tableBodyContent.push(<div key={i} className="currency is-loading"/>)
      }
    }
    else{
      const currencyItems = currencies
        .filter(currency => currency.name.toLowerCase().includes(searchInput.toLowerCase()) 
          || currency.abbrev.toLowerCase().includes(searchInput.toLowerCase()))
        .map(currency => (
          <Currency
            key={currency.id}
            id={currency.id}
            name={currency.name}
            abbrev={currency.abbrev}
            marketCap={currency.marketCap}
            price={currency.price}
            change={currency.change}
            isSelected={currency.id === selectedCurrencyId}
            setSelectedCurrencyId={setSelectedCurrencyId}
          />
        ))

      tableBodyContent = currencyItems
    }

    return(
      <div id="currency-table-wrapper">
        <div id="currency-table-particles"/>
        <div id="currency-table">
          <CurrencyTableHeader/>
          <div id="currency-table-body" className={tableBodyClasses}>
            {tableBodyContent}
          </div>
        </div>
      </div>
    )
  }
}

const CurrencyTableHeader = ({}) => (
  <div id="currency-table-header">
    <div id="currency-table-title">
      <i className="far fa-money-bill-alt"/>
      <h1>CURRENCIES</h1>
    </div>
    <SearchBarWrapper/>
    <div id="header-items">
      <div className="header-item-id header-item">
        <h1>#</h1>
      </div>
      <div className="header-item-icon header-item"/>
      <div className="header-item-name header-item">
        <h1>Name</h1>
      </div>
      <div className="header-item-market-cap header-item">
        <h1>Market Cap</h1>
      </div>
      <div className="header-item-price header-item">
        <h1>Price</h1>
      </div>
      <div className="header-item-change-daily header-item">
        <h1>24h</h1>
      </div>
    </div>
  </div>
)

export {
  CurrencyTable
}