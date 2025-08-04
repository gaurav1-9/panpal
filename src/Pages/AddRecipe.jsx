import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Button from "../Components/Button";
import { FaListCheck } from "react-icons/fa6";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(0)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImage(base64String);
            };
            reader.readAsDataURL(file);
        }
    };
    const [dishName, setDishName] = useState("")
    const [step, setStep] = useState("")
    const [isEmpty, setisEmpty] = useState(false)
    const [isSaving, setisSaving] = useState(false)
    const saveRecipe = (e) => {
        e.preventDefault()
        if (dishName.trim() && step.trim() && image) {
            setisSaving(true)
            setTimeout(() => {
                setisSaving(false)
                setDishName("")
                setStep("")
                setImage(null)
                navigate('/', {
                    state: {
                        showMsg: true
                    },
                    replace: true
                })
            }, 2000);
            const recipeDate = {
                dishID: Date.now() + Math.floor(Math.random()*100),
                recipeName: dishName,
                procedure: step,
                image: image,
                category: category
            }
            const existingRecipes = JSON.parse(localStorage.getItem("recipeList")) || [];
            existingRecipes.push(recipeDate);

            localStorage.setItem("recipeList", JSON.stringify(existingRecipes));
        }
        else {
            setisEmpty(true)
            setTimeout(() => {
                setisEmpty(false)

            }, 3000);
        }
    }
    return (
        <div className='px-4 lg:px-26 mt-5 lg:mt-12 font-kurb h-fit'>

            <div className={`z-50 fixed lg:absolute ${(isEmpty)
                ? 'top-22 lg:top-36 opacity-100'
                : 'top-17 lg:top-31'
                } opacity-0 left-0 w-full flex justify-center items-center duration-500 ease-in-out`}>
                <div className="bg-seashell shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-md overflow-clip">
                    <p className="px-3 pt-3 pb-2 ">All input fields are required</p>
                    <div className="w-full h-2 bg-fireBrick"></div>
                </div>
            </div>

            <div className='flex flex-col text-4xl lg:text-6xl text-blackBean font-semibold capitalize'>
                <span>Got a Dish in Mind?</span>
                <div className='flex gap-2'>
                    <div className="flex">
                        <img src="/winking-face_1f609.png" alt="" className='w-6 h-6 lg:h-9 lg:w-9' draggable={false} />
                        <img src="/thumbs-up_1f44d.png" alt="" className='w-6 h-6 lg:w-9 lg:h-9' draggable={false} />
                    </div>
                    <span className='text-xl lg:text-3xl font-light'>
                        Let's Savour It!
                    </span>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-3 mt-5 lg:mt-10 mb-3'>
                <div className='flex-1/3'>
                    <div className="w-full lg:w-8/10 rounded-lg aspect-square flex justify-center items-center cursor-pointer hover:bg-blackBean/2">
                        <label
                            htmlFor="image-upload"
                            className="w-full aspect-square border-2 border-dashed border-blackBean/40 rounded-lg flex items-center justify-center text-blackBean/60 cursor-pointer hover:bg-blackBean/5 transition overflow-hidden"
                        >
                            {
                                image ? (
                                    <img src={image} alt="Uploaded" className="w-full h-full object-cover" draggable={false} />
                                ) : (
                                    <div className="flex flex-col items-center gap-1">
                                        <FaCamera className="text-xl lg:text-3xl" />
                                        <p>Click to add image</p>
                                    </div>
                                )
                            }
                        </label>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/jpeg,image/jpg,image/png"
                            onChange={handleImageChange}
                            className="hidden"
                            disabled={isSaving}
                        />
                    </div>
                </div>

                <div className='flex-2/3'>
                    <form
                        className="text-base lg:text-xl flex flex-col gap-2"
                        onSubmit={saveRecipe}
                    >
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Enter dish name..."
                                className=" capitalize border-1 border-blackBean w-full rounded-md px-4 py-2 outline-xanthous "
                                value={dishName}
                                onChange={e => setDishName(e.target.value)}
                                disabled={isSaving}
                            />
                            <select
                                className="rounded-md bg-blackBean text-seashell px-3 cursor-pointer"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                disabled={isSaving}
                            >
                                <option value="0">main course</option>
                                <option value="1">beverage</option>
                                <option value="2">sweet dish</option>
                                <option value="3">appetizers</option>
                                <option value="4">snacks</option>
                            </select>
                        </div>
                        <textarea
                            placeholder="Write the magic steps here..."
                            className="border-1 border-blackBean w-full rounded-md px-4 py-2 outline-xanthous resize-none h-40 lg:h-50 scrollbar"
                            value={step}
                            onChange={e => setStep(e.target.value)}
                            disabled={isSaving}
                        />
                        <Button
                            icon={(isSaving) ? <MoonLoader size={18} color="#f7ebe8" /> : <FaListCheck />}
                            text={(isSaving)
                                ? 'Saving...'
                                : 'Save Recipe'}
                            isSaving={isSaving}
                        />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddRecipe