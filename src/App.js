import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, add, subtract, storeResult, deleteResult } from './actions';

const App = () => {
  const counter = useSelector((state) => state.counter.counter);
  const results = useSelector((state) => state.result.results);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="CounterOutput">Current Counter: {counter}</div>
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
      <button type="button" onClick={() => dispatch(add(5))}>Add 5</button>
      <button type="button" onClick={() => dispatch(subtract(5))}>Subtract 5</button>
      <hr />
      <button type="button" onClick={() => dispatch(storeResult(counter))}>Store results</button>
      {results.map((result, i) => <span key={i} onClick={() => dispatch(deleteResult(result.id))}>{result.value}</span>)}
    </div>
  );
};

export default App;
