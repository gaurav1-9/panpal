const Navbar = () => {
    return (
        <div className='sticky top-0 left-0 flex justify-between bg-xanthous px-4 lg:px-26 py-4 lg:py-2 z-10'>
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
        </div>
    )
}

export default Navbar