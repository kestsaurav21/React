import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeCounter from './components/LikeCounter'

// Create a LikeButton child component with a button labeled "Like".

// When clicked, it should increment a like count in the parent component called LikeCounter.

// In LikeCounter, display the total like count received from all LikeButton instances.

// Bonus: Add a “Reset All” button in LikeCounter to reset the total count to zero.

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LikeCounter />
    </>
  )
}

export default App
