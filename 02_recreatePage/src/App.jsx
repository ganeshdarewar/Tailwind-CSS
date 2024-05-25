import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#242424] text-[rgba(255,255,255,0.87)] flex flex-col justify-center items-center gap-2 text-center'>
      <div className='p-8'>
        <div className='flex gap-12 mx-w-[418px] w-full mx-auto'>
          <a href="https://vitejs.dev" target="_blank" className='shrink-0'>
            <img src={viteLogo} className="h-24 hover:[filter:drop-shadow(0_0_2em_#646cffaa)]" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className='shrink-0'>
            <img src={reactLogo} className="h-24 hover:[filter:drop-shadow(0_0_2em_#61dafbaa)] animate-spin [animation-duration:20s]" alt="React logo" />
          </a>
        </div>
        <h1 className='text-5xl font-bold my-12 text-center'>Vite + React</h1>
        <div className="card">
          <button className='rounded-lg bg-[#1a1a1a] px-[19.2px] py-[9.6px] cursor-pointer border border-transparent hover:border-[#646cff] transition-all' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className='my-4 font-light'>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-[#888] mt-16 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
