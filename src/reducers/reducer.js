import {add, minus, reset} from './fns'
import * as types from './types'

export const reducer = function(state, {type, payload}) {
  switch(type) {
    case types['add']:
      return add(state, payload)
    case types['minus']:
      return minus(state, payload)
    case types['reset']:
      return reset(payload)
    default:
      throw new Error(`没有为 ${type} 定义操作`)
  }
}
