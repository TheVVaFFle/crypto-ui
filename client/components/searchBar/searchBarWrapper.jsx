import {connect} from 'react-redux'

import {SearchBar} from './searchBar'

import {
  setSearchInput
} from '../../actions/searchActions'

import {
  searchInputSelector
} from '../../selectors/searchSelectors'

const mapStateToProps = state => {
  return {
    searchInput: searchInputSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchInput: val => dispatch(setSearchInput(val))
  }
}

const SearchBarWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchBarWrapper