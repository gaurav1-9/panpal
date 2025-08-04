import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='sticky top-0 left-0 flex justify-between items-center bg-xanthous px-4 lg:px-26 py-4 lg:py-2 z-10'>
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
                localStorage.getItem('nickname')
                    ? <div className="shadow-lg rounded-full p-2 lg:p-4 cursor-pointer hover:scale-[1.05] duration-100 hover:bg-night/2 ">
                        <IoSearchOutline className="text-2xl lg:text-4xl text-seashell "/>
                    </div>
                    : null
            }
        </div>
    )
}

export default Navbar