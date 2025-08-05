import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const Navbar = ({ searchingBtn, searchBtn, nickname ,recipeAdded}) => {
    return (
        <div className='sticky top-0 left-0 flex justify-between items-center bg-xanthous px-4 lg:px-26 py-4 lg:py-2 z-50'>
            <Link to={'/'}>
                <div className='flex gap-2 lg:gap-4'>
                    <img
                        src="/Breakfast Streamline Lagos.png"
                        className='w-12 md:w-30'
                        draggable='false'
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className='text-night font-italiana text-4xl lg:text-7xl'>PanPal</h1>
                        <p className='text-night font-juliusSansOne text-[10px] lg:text-xl uppercase leading-1 lg:leading-4 mb-1'>your personalized recipe-book</p>
                    </div>
                </div>
            </Link>
            {
                nickname && recipeAdded
                    ? <button
                        className="shadow-lg rounded-full p-2 lg:p-4 cursor-pointer hover:scale-[1.05] duration-100 hover:bg-night/2 "
                        onClick={searchingBtn}
                    >
                        {
                            (searchBtn)
                                ? <FaXmark className="text-2xl lg:text-4xl text-seashell " />
                                : <IoSearchOutline className="text-2xl lg:text-4xl text-seashell " />
                        }
                    </button>
                    : null
            }
        </div>
    )
}

export default Navbar