import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

import AppWrapper from './components/app/appWrapper'

import store from './store'

Provider.childContextTypes = {
  store: PropTypes.object,
  storeSubscription: PropTypes.func
}

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper/>
  </Provider>,
  document.getElementById('root')
)
