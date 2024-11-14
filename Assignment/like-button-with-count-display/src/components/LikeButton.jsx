import React from 'react'

const LikeButton = ({ increment }) => {
  return (
    <div>
        <button onClick={increment}>Like</button>
    </div>
  )
}

export default LikeButton