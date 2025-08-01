import { FaCirclePlus } from "react-icons/fa6";
import Button from '../Components/Button';
import Footer from './Footer';
import { Link } from 'react-router-dom'

const RecipeListing = () => {
    return (
        <div className='text-blackBean mt-6 lg:mb-7.5 w-full'>
            <div className="w-full lg:w-105">
                <Link to={'/add'} >
                    <Button icon={<FaCirclePlus />} text={"Add Recipe"} />
                </Link>
            </div>
        </div>
    )
}

export default RecipeListing