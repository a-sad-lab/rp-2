import {useContext} from 'react'

import {Cmp21} from './cmp-21'

import {context} from '../contexts/context'

import {reset} from '../reducers/types'

export function Cmp2() {

  const dispatch = useContext(context)

  console.log('cmp 2 render')
  return (
    <div>
      <h3>cmp 2</h3>
      <button onClick={() => dispatch({type: reset, payload: 5})}>reset</button>
      <Cmp21 />
    </div>
  )
}
