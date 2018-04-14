import {
  getRand,
  formatCurrency
} from '../util'

const mapCurrencies = currencies => {
  if(currencies && currencies.length > 0){
    return currencies.map((curr, index) => mapCurrency(curr, index + 1))
  }
  return []
}

const mapCurrency = (currency, id) => ({
  id,
  name: currency.name ? currency.name : "N/A",
  abbrev: currency.symbol ? currency.symbol : "N/A",
  marketCap: currency.market_cap_usd ? formatCurrency(currency.market_cap_usd) : "N/A",
  price: currency.price_usd ? formatCurrency(currency.price_usd) : "N/A",
  volume: currency['24h_volume_usd'] ? currency['24h_volume_usd'] : "N/A",
  circulatingSupply: currency.total_supply ? currency.total_supply : "N/A",
  change: {
    hourly: currency.percent_change_1h ? currency.percent_change_1h : "N/A",
    daily: currency.percent_change_24h ? currency.percent_change_24h : "N/A"
  }
})

const mapGlobalData = data => ({
  totalMarketCap: data.total_market_cap_usd ? formatCurrency(data.total_market_cap_usd) : "N/A",
  totalDailyVolume: data.total_24h_volume_usd ? formatCurrency(data.total_24h_volume_usd) : "N/A",
  btcDominance: data.bitcoin_percentage_of_market_cap ? data.bitcoin_percentage_of_market_cap : "N/A"
})

export {
  mapCurrencies,
  mapGlobalData
}