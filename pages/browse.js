import React from 'react'
import SearchSection from '../components/SearchSection'

const browse = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <form className='w-3/4 mt-10'>
          <input type='text' className='bg-gray-200 w-full pl-8 py-5 rounded-2xl' placeholder='Search for a Mutual Fund'></input>
        </form>
        <div className='w-3/4'>
          <SearchSection name='AVAX' price='US$18.24' numberTokens='120,000.23' />
          <SearchSection name='MATIC' price='US$0.814' numberTokens='50,000.91' />
          <SearchSection name='ETH' price='US$1431.68' numberTokens='204.54' />
        </div>
    </div>
  )
}

export default browse