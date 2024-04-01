// here is the useState version of this, but as I will be using Redux I will use this as an example for the template
// import { useState } from 'react';

// // default test for functionality
// const Counter = () => {

//     const [count, setCount] = useState(0);
//     return(
//         <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     )
// };

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


export default Counter;