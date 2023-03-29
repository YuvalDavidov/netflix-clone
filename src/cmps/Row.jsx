import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title,fetchURL,rowId}) => {
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])

    function slide(direction){
        const slider = document.getElementById('slider'+rowId)
        if(direction === 'left') slider.scrollLeft -= 500
        else slider.scrollLeft += 500      
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <section className='relative flex items-center group'>
            <MdChevronLeft 
            onClick={()=>{slide('left')}} 
            size={40} 
            className="bg-white absolute left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
            <div id={'slider' + rowId} className="w-full h-full overflow-x-scroll relative whitespace-nowrap scroll-smooth scrollbar-hide">
                {movies?.map((item,id)=>{
                    return <Movie key={id} item={item} />
                })}
            </div>
            <MdChevronRight 
            onClick={()=>{slide()}} 
            size={40} 
            className="bg-white absolute right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        </section>
    </>
  )
}

export default Row