import React from 'react'
import SearchSection from '../components/SearchSection'

const browse = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <form className='w-3/4 mt-10'>
          <input type='text' className='bg-gray-200 w-full pl-8 py-5 rounded-2xl' placeholder='Search for a Plant'></input>
        </form>
        <div className='w-3/4'>
          <SearchSection name='name' price='price' numberTokens='120,000' />
          <SearchSection name='name' price='price' numberTokens='120,000' />
          <SearchSection name='name' price='price' numberTokens='120,000' />
        </div>
    </div>
  )
}

export default browse