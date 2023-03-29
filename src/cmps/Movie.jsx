import React, { useState } from 'react'
import { FaHeart,FaRegHeart } from 'react-icons/fa'

const Movie = ({item}) => {
    const [like,setLike] = useState(false)

    
    const truncateString = (str,num) =>{
        return  str?.length > num ? str.slice(0, num) + '...' : str
    }
  return (
    <section className='p-2 relative cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200px] w-[160px]'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full'>{truncateString(item?.title,30)}</p>
            <p>
            {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
            </p>
         </div>
     </section>
  )
}

export default Movie