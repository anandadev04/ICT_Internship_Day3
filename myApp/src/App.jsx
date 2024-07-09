import { useState } from 'react'
import './App.css'
import View from './components/View'
import Records from './components/Records'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React Session</h1>
      <View />
      <br />
      <Records />
    </>
  )
}

export default App
