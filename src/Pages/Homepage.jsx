import { useEffect, useState } from 'react'
import NoRecipe from '../Components/NoRecipe';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
    const location = useLocation()
    const [nickname, setNickname] = useState('')
    const [recipe, setRecipe] = useState([])
    const [showMsg, setShowMsg] = useState(location.state?.showMsg || false)

    useEffect(() => {
        setNickname(localStorage.getItem('nickname'))
    }, [nickname])
    useEffect(() => {
        setRecipe(localStorage.getItem('recipe'))
    }, [recipe])

    useEffect(() => {
        if (location.state?.showMsg) {
            setTimeout(() => {
                setShowMsg(false)
            }, 3000);
        }
    }, [showMsg])
    return (
        <div className='px-4 lg:px-26 mt-5 lg:mt-12 font-kurb h-fit'>
            {
                showMsg &&
                <div className={`z-50 fixed lg:absolute ${(location.state.showMsg)
                    ? 'top-22 lg:top-36 opacity-100'
                    : 'top-17 lg:top-31'
                    } opacity-0 left-0 w-full flex justify-center items-center duration-500 ease-in-out`}>
                    <div className="bg-seashell shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-md overflow-clip">
                        <p className="px-3 pt-3 pb-2 ">Recipe added successfully</p>
                        <div className="w-full h-2 bg-xanthous"></div>
                    </div>
                </div>
            }

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