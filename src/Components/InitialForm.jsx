import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"

const InitialForm = () => {
    return (
        <div className='-z-1 absolute top-0 h-full w-full bg-xanthous flex justify-center items-center px-6 lg:px-26 flex-col font-kurb gap-4 lg:gap-8 pb-10 text-night'>
            <p className='text-3xl text-center lg:text-5xl font-semibold'>Hey <span className='text-seashell uppercase'>foodie</span>...what should we call you?</p>

            <form className="flex flex-col lg:flex-row w-full lg:w-6/10 gap-2 lg:gap-4">
                <input
                    type="text"
                    className='px-4 py-3 text-xl lg:text-3xl bg-seashell flex-1 lg:flex-2/3 rounded-md outline-none placeholder:text-night/30'
                    placeholder='Name...'
                />
                <button className='flex justify-center items-center gap-3 lg:gap-4 bg-blackBean text-seashell w-full py-3 rounded-md flex-1 lg:flex-1/3 hover:bg-blackBean/90 cursor-pointer'>
                    <p className='text-xl lg:text-3xl font-semibold'>Lets Go</p>
                    <FaArrowRightLong className='text-xl lg:text-3xl' />
                </button>
            </form>
        </div>
    )
}

export default InitialForm