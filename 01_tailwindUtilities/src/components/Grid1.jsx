import React from 'react'

function Grid1() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className=' flex-1 h-40 col-span-2 bg-red-400'></div>
      <div className=' flex-1 h-40 bg-blue-400'></div>
      <div className=' flex-1 h-40 bg-red-400'></div>
    </div>
  )
}

export default Grid1
