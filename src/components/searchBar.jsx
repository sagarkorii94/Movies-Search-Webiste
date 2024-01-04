import React from 'react'

function SearchBar({searchMovie,setSearchMovie,fetchMovieData}) {
  return (
    <div className='main flex justify-center py-5 px-3 '>
      <input className=' rounded-l-lg w-80 bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2
        border-gray-500 text-black' 
        value={searchMovie}
        onChange={(e)=>setSearchMovie(e.target.value)
        }
      type='text' 
      placeholder='Search...' />
      <button 
      onClick={fetchMovieData}
      className='bg-[#40407a] px-4 text-white rounded-r-lg border-b-3 border-t-3 border-r-3 border-gray-500 shadow-md'>Search</button>
    </div>
  )
}

export default SearchBar;



