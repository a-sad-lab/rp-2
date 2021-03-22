import {useReducer} from 'react'

import {Cmp1} from './components/cmp-1'
import {Cmp2} from './components/cmp-2'

import {reducer} from './reducers/reducer'
// import {add, minus, reset} from './reducers/types'

import {context} from './contexts/context'

// const delta = 3

function App() {

  const [val, dispatch] = useReducer(reducer, 5)

  console.log('App render')
  return (
    <>
      <pre>{val}</pre>
      {/* 
      <button onClick={() => dispatch({type: add, payload: delta})}>add</button>
      <button onClick={() => dispatch({type: minus, payload: delta})}>minus</button>
      <button onClick={() => dispatch({type: reset, payload: 5})}>reset</button>
       */}
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
    </>
  );
}

export default App;
