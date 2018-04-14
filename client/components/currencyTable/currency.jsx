import React, {Component} from 'react'
import classNames from 'classnames'

class Currency extends Component {
  constructor(props){
    super(props)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      isHovering: false,
      timeout: null
    }
  }
  onMouseOver(){
    clearTimeout(this.state.timeout)
    this.setState({...this.state, isHovering: true, timeout: null})
  }
  onMouseLeave(){
    if(this.state.isHovering){
      const timeout = setTimeout(() => {
        this.setState({isHovering: false})
      }, 250)
      this.setState({timeout})
    }
  }
  render(){
    const {
      id,
      name,
      abbrev,
      marketCap,
      price,
      change,
      isSelected,
      setSelectedCurrencyId
    } = this.props
    const currencyClasses = classNames(
            "currency", 
            {"is-hovering": this.state.isHovering},
            {"is-selected": isSelected}
          ),
          changeDailyClasses = classNames(
            "currency-change-daily", 
            "currency-item", 
            {"green": change.daily >= 0},
            {"red": change.daily < 0}
          )

    return(
      <div className={currencyClasses} 
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        onClick={() => setSelectedCurrencyId(id)}
      >
        <div className="currency-id currency-item">
          <h1>{id}</h1>
        </div>
        <div className="currency-icon currency-item">
          <div className="icon-image" style={{backgroundImage: `url(/img/icons/color/${abbrev.toLowerCase()}.svg)`}}/>
        </div>
        <div className="currency-name currency-item">
          <div className="currency-sub-item">
            <div className="currency-full">
              <h1>{name}</h1>
            </div>
            <div className="currency-abbrev">
              <h1>{abbrev}</h1>
            </div>
          </div>
        </div>
        <div className="currency-market-cap currency-item">
          <h1>${marketCap}</h1>
        </div>
        <div className="currency-price currency-item">
          <h1>${price}</h1>
        </div>
        <div className={changeDailyClasses}>
          <h1>{change.daily}%</h1>
        </div>
      </div>
    )
  }
}

export default Currency