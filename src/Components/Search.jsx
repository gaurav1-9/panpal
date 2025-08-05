import { useState } from "react";
import Button from "./Button"
import { LuTextSearch } from "react-icons/lu";
import { MoonLoader } from "react-spinners";

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const [showInput, setShowInput] = useState(null)
    const [isSearching, setIsSearching] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const recipeList = JSON.parse(localStorage.getItem('recipeList'))
    const [filteredList, setFilteredList] = useState([])
    const searchResult = () => {
        setShowInput(searchInput)
        const filtered = recipeList
            .filter(recipe =>
                recipe.recipeName.toLowerCase().includes(searchInput.toLowerCase()) ||
                recipe.ingredients.toLowerCase().includes(searchInput.toLowerCase()) ||
                recipe.equipments.toLowerCase().includes(searchInput.toLowerCase())
            )
        setFilteredList(filtered);
    }
    const category = [
        'main course',
        'beverage',
        'sweet dish',
        'appetizers',
        'snacks'
    ]
    const searching = (e) => {
        e.preventDefault()
        if (searchInput.trim()) {
            setIsSearching(true)
            setTimeout(() => {
                setIsSearching(false)
                searchResult()
                setSearchInput('')
            }, 700);
        }
        else {
            setIsEmpty(true)
            setTimeout(() => {
                setIsEmpty(false)
            }, 3000);
        }
    }
    return (
        <div
            className='absolute top-0 right-0 backdrop-blur-md z-30 w-screen h-full  font-kurb'
        >
            <div
                className='w-full lg:w-150 lg:right-0 lg:absolute px-4 lg:px-6 pt-25 lg:pt-38 h-fit py-3 lg:h-full bg-seashell shadow-[-4px_0_17px_rgba(0,0,0,0.1)]'
            >
                <form
                    className="relative text-base lg:text-xl flex flex-col"
                    onSubmit={searching}
                >
                    <input
                        type="text"
                        placeholder="Search recipes here..."
                        className=" lowecase border-1 border-blackBean w-full rounded-md px-4 py-2 outline-xanthous mb-4"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <p
                        className={`text-xs lg:text-sm font-semibold text-fireBrick/80 absolute 
                            ${(isEmpty)
                                ? 'top-10.5 lg:top-11 opacity-100'
                                : 'top-8 opacity-0'
                            } duration-300 ease-in-out left-2`}
                    >Please enter a search token</p>
                    <Button
                        icon={
                            (isSearching)
                                ? <MoonLoader size={18} color="#f7ebe8" />
                                : <LuTextSearch className="text-2xl" />
                        }
                        text={(isSearching)
                            ? 'Searching...'
                            : 'Search'}
                        isSaving={isSearching}
                    />
                </form>
                {
                    showInput &&
                    <div className="mt-3 flex flex-col gap-2 max-h-50 lg:max-h-full overflow-y-auto overflow-x-hidden scrollbar pr-2">
                        {
                            (filteredList.length !== 0) &&
                            <p className="text-sm text-blackBean font-light">Search results for <span className="font-semibold">{showInput}</span>...</p>
                        }
                        {
                            (filteredList.length > 0 && showInput)
                                ? filteredList.map((recipe, index) => (
                                    <div
                                        key={index}
                                        className="bg-xanthous w-full rounded-lg flex overflow-clip p-2 text-blackBean font-kurb font-semibold items-center gap-3 h-fit hover:opacity-95 cursor-pointer hover:ml-1 ease-in-out duration-200"
                                    >
                                        <img src={recipe.image} className="w-15 aspect-square object-cover rounded-lg" />
                                        <div>
                                            <p className="text-xl">{recipe.recipeName}</p>
                                            <p className="text-sm rounded-full bg-blackBean text-seashell px-4 py-1 w-fit">{category[recipe.category]}</p>
                                        </div>
                                    </div>
                                ))
                                : <div className="flex justify-start items-center my-2">
                                    <img src="/Searching 1 Streamline Lagos.png" className="aspect-square w-40" />
                                    <div className="flex flex-col text-blackBean text-lg lg:text-xl font-light">
                                        <p>Couldn't find anything for </p>
                                        <p className="font-semibold">{showInput}...</p>
                                    </div>
                                </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Search