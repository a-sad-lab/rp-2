import {useReducer} from 'react'

import {Cmp1} from './components/cmp-1'
import {Cmp2} from './components/cmp-2'

import {reducer} from './reducers/reducer'
import {add, minus} from './reducers/types'

import logo from './logo.svg';
import './App.css';

const delta = 3

function App() {

  const [val, dispatch] = useReducer(reducer, 5)


  return (
    <>
      <pre>{val}</pre>
      <button onClick={() => dispatch({type: add, payload: delta})}>add</button>
      <button onClick={() => dispatch({type: minus, payload: delta})}>minus</button>
      <Cmp1 />
      <Cmp2 />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
    </>
  );
}

export default App;
