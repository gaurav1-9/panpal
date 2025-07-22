import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import Button from '../Components/Button';
import Footer from './Footer';

const NoRecipe = () => {
    return (
        <div className='text-blackBean mt-6 lg:mb-7.5'>
            <p className='flex gap-1 items-end text-xl lg:text-3xl'>
                <span>no recipes found</span>
                <img src="/thinking-face_1f914.png" alt="" className='h-7 lg:h-9' draggable="false" />
            </p>
            <Button icon={<FaCirclePlus />} />
            <img src="/Dessert 1 Streamline Lagos.png" alt="desert img" className='mt-5 lg:mt-0' draggable="false" />
            <div className='w-9/10 absolute bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default NoRecipe