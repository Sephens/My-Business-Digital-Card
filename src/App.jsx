import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './Components/About'
import Footer from './Components/Footer'
import InfoSection from './Components/InfoSection'
import Interests from './Components/Interests'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <InfoSection/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
