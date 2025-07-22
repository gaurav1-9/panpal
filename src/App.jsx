import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import InitialForm from './Components/InitialForm'

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
          ?'hello'
          : <InitialForm onSetNickname={handleSetNickname} />
      }
    </div>
  )
}

export default App
