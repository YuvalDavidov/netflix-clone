import React, { useRef,useEffect,useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc,doc,onSnapshot, arrayRemove } from '@firebase/firestore'

const SavedMovies = () => {
    const [movies,setMovies] = useState([])
    const {user} = UserAuth()
    const sliderRef = useRef()

    useEffect(()=>{
        onSnapshot(
           doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows)
           }
        )
    },[user?.email])

    const movieRef = doc(db,'users',`${user?.email}`)

    function slide(direction){
        const slider = sliderRef.current
        if(direction === 'left') slider.scrollLeft -= 500
        else slider.scrollLeft += 500      
    }

    const truncateString = (str,num) =>{
        return  str?.length > num ? str.slice(0, num) + '...' : str
    }

    const removeMovie = async (itemId) =>{
          try {
            const resullt = movies.filter((item)=> item.id !== itemId)
            await updateDoc(movieRef , {
                savedShows: resullt
            })
          } catch (error) {
            console.log(error);
          }

      }

  return (
    <>
         <h2 className='text-white font-bold md:text-xl p-4'>My Movies</h2>
        <section className='relative flex items-center group'>
            <MdChevronLeft 
            onClick={()=>{slide('left')}} 
            size={40} 
            className="bg-white absolute left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
            <div ref={sliderRef} className="w-full h-full overflow-x-scroll relative whitespace-nowrap scroll-smooth scrollbar-hide">
                {movies?.map((item,id)=>{
                    return  (
                    <section key={id} className='p-2 relative cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200px] w-[160px]'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full'>
                            {truncateString(item?.title,30)}
                         </p>
                         <p onClick={()=>removeMovie(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
                    </div>
                 </section>
                 )
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

export default SavedMovies