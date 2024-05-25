import React from 'react'

const Animation = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='animate-bounce transition-all duration-1000 ease-out flex-1 h-40 col-span-2 bg-red-400'></div>
      <div className=' hover:animate-spin transition-all duration-1000   flex-1 h-40 bg-blue-400'></div>
      <div className='animate-pulse  flex-1 h-40 bg-red-400'></div>
    </div>
  )
}

export default Animation
