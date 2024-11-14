import React, { useState } from 'react'
import Counter from './Counter'

const CounterControl = () => {

    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(0);



  return (
    <div>
        
        <Counter counter={count1} incrementCount={() => setCount1(count1+1)} decrementCount={() => count1 > 0 ? setCount1(count1-1) : null}  />
        <Counter counter={count2} incrementCount={() => setCount2(count2+1)} decrementCount={() => count2 > 0 ? setCount2(count2-1) : null} />

        <button onClick={()=> {setCount1(0),setCount2(0)}}>Reset</button>
    </div>
  )
}

export default CounterControl