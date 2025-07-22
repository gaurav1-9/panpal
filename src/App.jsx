import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import InitialForm from './Pages/InitialForm'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer'

const App = () => {
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'))

  const handleSetNickname = (name) => {
    localStorage.setItem('nickname', name)
    setTimeout(() => {
      setNickname(name)
    }, 400);
  }

  return (
    <div>
      <Navbar />
      {
        nickname
          ? <Homepage />
          : <InitialForm onSetNickname={handleSetNickname} />
      }
    </div>
  )
}

export default App
