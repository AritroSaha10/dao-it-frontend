import React from 'react'
import WishlistSection from '../components/WishlistSection'
import ProfilePage from '../components/ProfilePage'
import Vote from '../components/Vote'

const wishlist = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl mt-16'>Wishlist</h1>
        <div className='w-3/4'>
          <WishlistSection name='AVAX' price='US$18.24' numberTokens='120,000.23' />
          <WishlistSection name='MATIC' price='US$0.814' numberTokens='50,000.91' />
          <WishlistSection name='ETH' price='US$1431.68' numberTokens='204.54' />
          <ProfilePage fundName='Panda Fund' fundSymbol='NASDAQ:AAPL' numberTokens='100,000' numberVotes='32'/>
          <Vote action='Buy' fundName='$PANDA' fundAmount='100 Tokens' fundSymbol='UNISWAP:HEXWETH' price='US$100,000'/>
        </div>
    </div>
  )
}

export default wishlist