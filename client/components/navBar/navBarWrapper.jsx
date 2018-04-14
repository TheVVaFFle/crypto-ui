import {connect} from 'react-redux'

import {NavBar} from './navBar'

import {
  globalDataSelector,
  isFetchingGlobalDataSelector,
  isErrorFetchingGlobalDataSelector
} from '../../selectors/dataSelectors'

const mapStateToProps = state => {
  return {
    globalData: globalDataSelector(state),
    isFetchingGlobalData: isFetchingGlobalDataSelector(state),
    isErrorFetchingGlobalData: isErrorFetchingGlobalDataSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const NavBarWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarWrapper