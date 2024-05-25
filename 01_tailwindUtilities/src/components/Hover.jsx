import React from 'react'

const Hover = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='hover:bg-slate-500 transition-all duration-1000 ease-out flex-1 h-40 col-span-2 bg-red-400'></div>
      <div className='hover:bg-slate-500 transition-all duration-1000 hover:scale-50  flex-1 h-40 bg-blue-400'></div>
      <div className='hover:bg-slate-500  flex-1 h-40 bg-red-400'></div>
    </div>
  )
}

export default Hover
