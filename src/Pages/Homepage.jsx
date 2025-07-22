import React, { useEffect, useState } from 'react'
import NoRecipe from '../Components/NoRecipe';

const Homepage = () => {
    const [nickname, setNickname] = useState('')
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
        setNickname(localStorage.getItem('nickname'))
    }, [nickname])
    useEffect(() => {
        setRecipe(localStorage.getItem('recipe'))
    }, [recipe])
    return (
        <div className='px-4 lg:px-26 mt-12 font-kurb h-fit bg-green-300'>
            <p className='flex flex-wrap font-kurb text-4xl lg:text-6xl text-blackBean font-semibold capitalize'>
                Hey, {nickname.split(" ")[0]}...
            </p>
            {
                (recipe)
                    ? ''
                    : <NoRecipe />
            }
        </div>
    )
}

export default Homepage