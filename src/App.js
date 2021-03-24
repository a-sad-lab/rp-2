import {useReducer} from 'react'

import {reducer} from './reducers/reducer'

import {context, share} from './contexts/context'

import {Cmp1} from './components/cmp-1'
import {Cmp2} from './components/cmp-2'


function App() {

  const [val, dispatch] = useReducer(reducer, 5)

  console.log('App render')
  return (
    <>
      <pre>{val}</pre>
      <share.Provider value={val}>
        <context.Provider value={dispatch}>
          <Cmp1 />
          <Cmp2 />
          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </context.Provider>
      </share.Provider>
      <ul>
        <li>
          适合父代和子代组件的通信，尤其适合子代对父代组件的状态变更，通过传递 dispatch 或
          通过 context 传递 dispatch
        </li>
        <li>
          如果状态需要在父代和子代组件中共享，通过 props 或另外的 context（dispatch 的 
          context 和状态的 context 分开）来共享状态
        </li>
      </ul>
    </>
  )
}

export default App;
