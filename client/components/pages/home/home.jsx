import React, {Component} from 'react'

import HeaderWrapper from '../../header/headerWrapper'
import CurrencyTableWrapper from '../../currencyTable/currencyTableWrapper'
import CurrencyDetailsViewWrapper from '../../currencyDetailsView/currencyDetailsViewWrapper'

class Home extends Component {
  render(){
    return(
      <div id="home">
        <CurrencyTableWrapper/>
        <CurrencyDetailsViewWrapper/>
      </div>
    )
  }
}

export default Home