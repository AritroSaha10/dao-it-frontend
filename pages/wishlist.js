import React from 'react'
import WishlistSection from '../components/WishlistSection'
import ProfilePage from '../components/ProfilePage'
import Vote from '../components/Vote'

const wishlist = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl mt-16'>Wishlist</h1>
        <div className='w-3/4'>
          <WishlistSection name='name' price='price' numberTokens='120,000' />
          <WishlistSection name='name' price='price' numberTokens='120,000' />
          <WishlistSection name='name' price='price' numberTokens='120,000' />
          <ProfilePage />
          <Vote action='Buy' fundName='Panda Stock' fundAmount='100 Stocks' fundSymbol='UNISWAP:HEXWETH' price='100,000'/>
        </div>
    </div>
  )
}

export default wishlist