import React from 'react'

const Shadows = () => {
  return (
    <div className='grid grid-cols-2 gap-4 bg-black'>
      <div className='shadow-md shadow-purple-300/50 hover:shadow-purple-300/90 flex-1 h-40 col-span-2 bg-red-400'></div>
      <div className='shadow-xl flex-1 h-40 bg-blue-400'></div>
      <div className='shadow-xl flex-1 h-40 bg-red-400'></div>
    </div>
  )
}

export default Shadows
