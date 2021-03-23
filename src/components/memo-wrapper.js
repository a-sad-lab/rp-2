import {context} from '../contexts/context'

import {Cmp1} from './cmp-1'
import {Cmp2} from './cmp-2'

export function MemoWrapper({val, dispatch}) {
  console.log('memo-wrapper render')

  return (
    <>
      <pre>{val}</pre>

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
  )
}
