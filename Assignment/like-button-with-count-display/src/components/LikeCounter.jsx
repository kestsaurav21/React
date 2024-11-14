import React, { useState } from 'react'
import LikeButton from './LikeButton';

const LikeCounter = () => {

    const [ count, setCount ] = useState(0);
  return (
    <div>
        <h2>Total Like : {count}</h2>
        <LikeButton increment={()=> setCount(count +1)} />
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default LikeCounter