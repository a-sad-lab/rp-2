import {useContext} from 'react'
import {share} from '../contexts/context'

export function Cmp21() {
  const val = useContext(share)

  console.log('cmp 21 render')
  return (
    <div>
      <h3>cmp 21</h3>
      <pre>{val}</pre>
    </div>
  )
}
