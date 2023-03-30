import React from 'react'
import SavedMovies from '../cmps/SavedMovies'

const Account = () => {
  return (
   <>
    <div className='w-full text-white'>
      <img 
      className='w-full h-[400px] object-cover' 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/c859583f-17fb-4351-ae13-81cd40780e16/IL-he-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text5xl font-bold'>My Movies</h1>
      </div>
    </div>
    <SavedMovies/>
   </>
  )
}

export default Account