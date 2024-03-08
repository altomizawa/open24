import { useState, useEffect } from 'react'
import korLogo from './assets/kor-logo.svg'
import './App.css'
import Timer from './components/Timer'
import Open241 from './components/Open241/Open241'
import Open242 from './components/Open242/Open242'

function App() {
  return (
    <>
      <div className='header'>
       <img src={korLogo} className="logo" alt="KOR logo" />
       <h1>OPEN 24.2</h1>
      </div>
      {/* <Open241 /> */}
      <Open242 />
    </>
  )
}

export default App
