import React from 'react'

import {shortFormatCurrency} from '../../util'

const NavBar = ({
  globalData,
  isFetchingGlobalData,
  isErrorFetchingGlobalData
}) => {
  let totalMarketCap = '0',
      totalDailyVolume = '0',
      btcDominance = '0.00'

  if(globalData){
    totalMarketCap = globalData.totalMarketCap ? shortFormatCurrency(globalData.totalMarketCap) : '0'
    totalDailyVolume = globalData.totalDailyVolume ? shortFormatCurrency(globalData.totalDailyVolume) : '0'
    btcDominance = globalData.btcDominance ? globalData.btcDominance : '0.00'
  }

  return(
    <div id="nav-bar">
      <div id="nav-bar-brand">
        <div id="nav-bar-logo">
          <i className="fab fa-bitcoin"/>
        </div>
        <div id="nav-bar-name">
          <h1>CRYPTO</h1>
        </div>
      </div>
      <div id="nav-bar-items">
        <div id="total-market-cap" className="nav-bar-item">
          <div className="label">
            <i className="fas fa-dollar-sign"/>
            <h1>MARKET CAP</h1>
          </div>
          <div className="value">
            <h1>{`$${totalMarketCap}`}</h1>
          </div>
        </div>
        <div id="total-24hr-volume" className="nav-bar-item">
          <div className="label">
            <i className="far fa-clock"/>
            <h1>24HR VOL</h1>
          </div>
          <div className="value">
            <h1>{`$${totalDailyVolume}`}</h1>
          </div>
        </div>
        <div id="btc-dominance" className="nav-bar-item">
          <div className="label">
            <i className="fab fa-bitcoin"/>
            <h1>BTC</h1>
          </div>
          <div className="value">
            <h1>{`${btcDominance}%`}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export {NavBar}