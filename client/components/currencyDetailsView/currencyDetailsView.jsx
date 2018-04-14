import React from 'react'

const CurrencyDetailsView = ({
  details
}) => {
  let currencyDetails = null
  if(details){
    currencyDetails = (
      <div id="currency-details-view">
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

export {
  CurrencyDetailsView
}