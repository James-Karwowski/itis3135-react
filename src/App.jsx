import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)
  document.title = "ITIS3135 | James Karwowski-Mulready's | Jumbo King-Mackerel";
  return (
    <>
      <div>
        <h2>ITIS3135</h2>
        <p>This is all the content for my ITIS 3135 class.</p>
      </div>
      <hr></hr>
    </>
  )
}

export default App