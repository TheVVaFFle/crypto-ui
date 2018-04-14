const getRand = (min, max) => Math.floor(Math.random() * max) + min

const formatCurrency = curr => {
  const splitCurrency = curr.toString().split("."),
        beforeDecimal = splitCurrency[0],
        afterDecimal = splitCurrency[1] ? splitCurrency[1] : '',
        beforeDecimalFormatted = beforeDecimal.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        afterDecimalFormatted = afterDecimal && afterDecimal !== '0' ? `.${afterDecimal}` : ''
        
  return `${beforeDecimalFormatted}${afterDecimalFormatted}`
}

const shortFormatCurrency = curr => {
  const splitCurrency = curr.toString().split(",")
  let formattedCurrency = 0,
      suffix = ''

  if(splitCurrency && splitCurrency.length > 0){
    suffix = getNumberSuffix(splitCurrency.length)
    formattedCurrency = `${splitCurrency[0]}.${splitCurrency[1][0]}${suffix}`
  }

  return formattedCurrency
}

const getNumberSuffix = n => {
  switch(n){
    case 4:
      return 'B'
    case 3:
      return 'M'
    default:
      return ''

  }
}

export {
  getRand,
  formatCurrency,
  shortFormatCurrency
}