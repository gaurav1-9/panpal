import React from 'react'

const Button = ({ icon }) => {
    return (
        <button className='flex bg-blackBean text-seashell justify-center items-center gap-2 w-full lg:w-3/10 py-3 rounded-md mt-2 text-xl lg:text-2xl font-semibold hover:bg-blackBean/90 cursor-pointer'>
            {icon}
            <p>Add Recipe</p>
        </button>
    )
}

export default Button