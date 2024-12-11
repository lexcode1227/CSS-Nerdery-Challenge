// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import GraficSection from './components/GraficSection'
import MainSection from './components/MainSection'
import Sidebar from './components/Sidebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Sidebar/>
      <MainSection/>
      <GraficSection/>
    </main>
  )
}

export default App
