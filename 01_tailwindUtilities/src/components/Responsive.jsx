import React from 'react'

const Responsive = () => {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      <div className='  flex-1 h-40 bg-red-400'></div>
      <div className='  flex-1 h-40 bg-blue-400'></div>
      <div className='  flex-1 h-40 bg-red-400'></div>
      <div className='  flex-1 h-40 bg-blue-400'></div>
      <div className='  flex-1 h-40 bg-red-400'></div>
      <div className='  flex-1 h-40 bg-blue-400'></div>
    </div>
  )
}

export default Responsive
