import React from 'react'

const NavBar = ({}) => {
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
            <h1>$563.8B</h1>
          </div>
        </div>
        <div id="total-24hr-volume" className="nav-bar-item">
          <div className="label">
            <i className="far fa-clock"/>
            <h1>24HR VOL</h1>
          </div>
          <div className="value">
            <h1>$35.9B</h1>
          </div>
        </div>
        <div id="btc-dominance" className="nav-bar-item">
          <div className="label">
            <i className="fab fa-bitcoin"/>
            <h1>BTC</h1>
          </div>
          <div className="value">
            <h1>39.2%</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export {NavBar}