import * as fns from './fns'

function reducer(state, {type, payload}) {
  if(!fns[type]) throw new Error(`没有为 ${type} 定义操作`)
  return fns[type](state, payload)
}

export {
  reducer
}
