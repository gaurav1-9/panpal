import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import InitialForm from './Pages/InitialForm'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import AddRecipe from './Pages/AddRecipe'
import Footer from './Components/Footer'
import ViewRecipe from './Pages/ViewRecipe'
import Search from './Components/Search'

const App = () => {
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'))
  const [recipeAdded, setRecipeAdded] = useState(localStorage.getItem('recipeList') || false)
  const [searchBtn, setsearchBtn] = useState(false)

  const handleSetNickname = (name) => {
    localStorage.setItem('nickname', name)
    setTimeout(() => {
      setNickname(name)
    }, 400);
  }

  const searchingBtn = () => {
    setsearchBtn(!searchBtn)
  }

  useEffect(() => {
    if (searchBtn) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [searchBtn])

  return (
    <div>
      <Navbar searchingBtn={searchingBtn} searchBtn={searchBtn} nickname={nickname} recipeAdded={recipeAdded} />
      {
        searchBtn && <Search />
      }
      {
        nickname
          ? <>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/add' element={<AddRecipe setRecipeAdded={setRecipeAdded} />} />
              <Route path='/recipe/:recipeID' element={<ViewRecipe />} />
            </Routes>
            <Footer bgColor={'bg-seashell'} />
          </>
          : <InitialForm onSetNickname={handleSetNickname} />
      }
    </div>
  )
}

export default App
