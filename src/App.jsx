import './App.css'
import { Form } from './components/Form'
import { Square } from './components/Square'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState([1, 50])
  const [numbers, setNumbers] = useState([])

  return (
    <div>
      <header>
        <Form input={input} setInput={setInput} setNumbers={setNumbers} />
      </header>
      <main>
        <Square numbers={numbers} />
      </main>
    </div>
  )
}

export default App
