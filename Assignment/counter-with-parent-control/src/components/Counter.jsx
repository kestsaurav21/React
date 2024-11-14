import React, { useState } from 'react'

const Counter = ({ counter, incrementCount, decrementCount }) => {

  return (
    <div>
       <h2>Count: {counter}</h2>

       <button onClick={incrementCount}>Increment</button>
       <button onClick={decrementCount}>Decrement</button>

    </div>
  )
}

export default Counter