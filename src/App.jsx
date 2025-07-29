import { useState } from 'react'
import Navbar from './Components/Navbar'
import InitialForm from './Pages/InitialForm'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import AddRecipe from './Pages/AddRecipe'

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
          ? <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/add' element={<AddRecipe />} />
          </Routes>
          : <InitialForm onSetNickname={handleSetNickname} />
      }
    </div>
  )
}

export default App
