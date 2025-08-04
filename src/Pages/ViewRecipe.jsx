import { useParams } from "react-router-dom"

const ViewRecipe = () => {
    const { recipeID } = useParams()
    const recipe = JSON.parse(localStorage.getItem('recipeList')).find(recipe => recipe.dishID.toString() === recipeID.split('-')[1])

    const category = [
        'main course',
        'beverage',
        'sweet dish',
        'appetizers',
        'snacks'
    ]

    return (
        <div className="px-4 lg:px-26 mt-5 lg:mt-12 text-blackBean font-light font-kurb">
            <div className="flex flex-row items-center justify-between">
                <p className="text-4xl lg:text-6xl font-semibold">{recipe.recipeName}</p>
                <p className="w-fit px-4 py-1 rounded-full text-base lg:text-xl font-semibold bg-blackBean text-seashell">{category[recipe.category]}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 mt-5 lg:mt-5 mb-3'>
                <div className='flex-1/3'>
                    <div className="w-full lg:w-8/10 rounded-lg aspect-square border-2 border-blackBean overflow-clip">
                        <img src={recipe.image} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className='flex-2/3'>
                    <p className="text-base lg:text-xl underline underline-offset-4">Recipe Information</p>
                    <div className="whitespace-pre-wrap bg-xanthous w-full lg:w-fit p-3 rounded-2xl mt-3">
                        {recipe.procedure}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRecipe