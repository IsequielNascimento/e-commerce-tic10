import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header/> */}
     {/* <Home/> */}
     <Footer/>
    </>
  )
}

export default App
