import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Flexbox1 from './components/Flexbox1'
import Grid1 from './components/Grid1'
import SnapScroll from './components/SnapScroll'
import Shadows from './components/Shadows'
import BorderRadius from './components/BorderRadius'
import Hover from './components/Hover'
import Animation from './components/Animation'
import Responsive from './components/Responsive'

function App() {
  return (
    <>
          <h1 className='bg-orange-400 mt-40 text-[14px]'>Hello world</h1>
          {/* <Flexbox1/> */}
          {/* <Grid1/> */}
          {/* <SnapScroll/> */}
          {/* <Shadows/> */}
          {/* <BorderRadius/> */}
          {/* <Hover/> */}
          {/* <Animation/> */}
          <Responsive/>
    </>
  )
}

export default App
