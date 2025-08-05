import { useState } from "react";
import Button from "./Button"
import { LuTextSearch } from "react-icons/lu";
import { MoonLoader } from "react-spinners";

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const searching = (e) => {
        e.preventDefault()
        if (searchInput.trim()) {
            console.log(searchInput)
            setIsSearching(true)
            setTimeout(() => {
                setIsSearching(false)
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
            </div>
        </div>
    )
}

export default Search