import {connect} from 'react-redux'

import {NavBar} from './navBar'

const mapStateToProps = state => {
  return {
    
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