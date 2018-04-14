import {
  IS_SCROLL_AT_TOP
} from './indicatorActionTypes'

const setIsScrollAtTop = value => {
  return {
    type: IS_SCROLL_AT_TOP,
    value
  }
}

export {
  setIsScrollAtTop
}