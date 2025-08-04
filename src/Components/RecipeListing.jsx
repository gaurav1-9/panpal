import { FaCirclePlus } from "react-icons/fa6";
import Button from '../Components/Button';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

const RecipeListing = () => {
    const [recipeList, setRecipeList] = useState([]);
    const category = [
        'main course',
        'beverage',
        'sweet dish',
        'appetizers',
        'snacks'
    ]

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('recipeList'));
        setRecipeList(stored)
    }, [])

    return (
        <div className='text-blackBean mt-6 lg:mb-7.5 w-full'>
            <div className="w-full lg:w-105">
                <Link to={'/add'}>
                    <Button icon={<FaCirclePlus />} text={"Add Recipe"} />
                </Link>
            </div>

            <div className="mt-10 flex flex-col gap-3 w-full">
                {category.map((dishType, index) => {
                    const recipes = recipeList.filter((r) => parseInt(r.category) === index);
                    if (recipes.length === 0) return null;

                    return (
                        <div key={index} className="flex flex-col w-full">
                            <div className="flex gap-3 items-center">
                                <div className="w-10 lg:w-25 h-0.5 rounded-full bg-night/30"></div>
                                <p className="font-light uppercase text-night/50">{dishType}</p>
                                <div className="w-35 lg:w-80 h-0.5 rounded-full bg-night/30"></div>
                            </div>

                            <div className="flex mt-3 overflow-x-auto scrollbar pb-3">
                                <div className="flex gap-3 lg:gap-5">
                                    {
                                        recipes.map((recipe, recipeIndex) => (
                                            <Link to={`/recipe/${category[recipe.category]}-${recipe.dishID}`}>
                                                <div
                                                    key={recipeIndex}
                                                    className="bg-xanthous w-70 lg:w-85 h-74 rounded-lg overflow-clip text-blackBean hover:-translate-y-2 cursor-pointer duration-200 ease-in-out hover:opacity-90"
                                                >
                                                    <div className="w-full h-6/10">
                                                        <img
                                                            src={recipe.image}
                                                            draggable={false}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-3">
                                                        <p className="text-3xl font-semibold">{recipe.recipeName}</p>
                                                        <div className="line-clamp-2 whitespace-pre-wrap">{recipe.procedure}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default RecipeListing