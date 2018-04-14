import React, {Component} from 'react'
import classNames from 'classnames'

class CurrencyDetailsView extends Component{
  constructor(props){
    super(props)
    this.state = {
      isTransitioning: false
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(!prevState.isTransitioning && !this.state.isTransitioning){
      this.setState({isTransitioning: true})
      setTimeout(() => this.setState({isTransitioning: false}), 500)
    }
  }
  render(){
    const {details} = this.props
    const detailsViewClasses = classNames({"is-transitioning": this.state.isTransitioning})
    let currencyDetails = null
    
    if(details){
      currencyDetails = (
        <div id="currency-details-view" className={detailsViewClasses}>
          <div id="currency-details-header">
            <div id="currency-details-icon">
              <div className="icon-image" style={{backgroundImage: `url(/img/icons/color/${details.abbrev.toLowerCase()}.svg)`}}/>
            </div>
            <div id="currency-details-name">
              <h1>{details.name.toUpperCase()}</h1>
            </div>
            <div id="currency-details-abbrev">
              <h1>({details.abbrev.toUpperCase()})</h1>
            </div>
            <div id="currency-details-price">
              <div className="value">
                <h1>${details.price}</h1>
              </div>
              <div className="label">
                <h1>PRICE</h1>
              </div>
            </div>
          </div>
          <div id="currency-details-body">

          </div>
        </div>
      )
    }
    return(
      <div id="currency-details-view-wrapper">
        {currencyDetails}
      </div>
    )
  }
}

export {
  CurrencyDetailsView
}