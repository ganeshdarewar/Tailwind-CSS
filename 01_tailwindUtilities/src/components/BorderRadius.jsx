import React from 'react'

const BorderRadius = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='rounded border-2 border-blues-500 flex-1 h-40 col-span-2 bg-red-400'></div>
      <div className='rounded-full border-t-4 border-sky-800 flex-1 h-40 bg-blue-400'></div>
      <div className='rounded-tr-full flex-1 h-40 bg-red-400'></div>
    </div>
  )
}

export default BorderRadius
