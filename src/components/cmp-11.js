import {useContext} from 'react'
import {context} from '../contexts/context'

import {add, minus, reset} from '../reducers/types'

export function Cmp11() {
  const dispatch = useContext(context)
  console.log('cmp 11 render')
  return (
    <div>
      <h3>cmp 11</h3>
      <button onClick={() => dispatch({type: add, payload: 3})}>add</button>
      <button onClick={() => dispatch({type: minus, payload: 3})}>minus</button>
      <button onClick={() => dispatch({type: reset, payload: 5})}>reset</button>
    </div>
  )
}
