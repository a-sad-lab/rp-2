import {useReducer, useMemo} from 'react'

import {MemoWrapper} from './components/memo-wrapper'

import {reducer} from './reducers/reducer'




function App() {

  const [val, dispatch] = useReducer(reducer, 5)

  console.log('App render')
  return useMemo(
    () => <MemoWrapper val={val} dispatch={dispatch} />,
    [val]
  );
}

export default App;
