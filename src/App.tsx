import { useState } from 'react'
import './App.css'
import Icon from '../lib'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Icon name="chevron-down-right" onClick={() => setCount(count + 1)} />
    </>
  )
}

export default App
