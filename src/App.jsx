import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import korLogo from './assets/kor-logo.svg'
import './App.css'
import DonePage from './components/DonePage'
import Timer from './components/Timer'
import WodDescription from './components/WodDescription'

function App() {
  const [count, setCount] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [totalCount, setTotalCount] = useState(0);


  //Check if athlete has finished and reset counter after every completed exercise
  useEffect(()=>{
    if(totalCount===180) {
      setIsDone(true);
    }
    if (totalCount===21 | totalCount===42 | totalCount===63 | totalCount===84 | totalCount===99 | totalCount===114 | totalCount===129 | totalCount === 144 | totalCount === 153 | totalCount === 162 | totalCount === 171 ){
      setCount(0)
    }
  }), [count]

  //Add one more and one less to count and totalCount
  const handleOneMore = () =>{
    setCount((count) => count +1)
    setTotalCount((totalCount) => totalCount +1)
  }

  const handleOneLess = () =>{
    if (totalCount>0 && count>0) {
      setCount((count) => count -1)
      setTotalCount((totalCount) => totalCount -1)
      console.log(totalCount)
    }
  }

  //Define if the line is done or still in the queue
  const setQueueType = (start, end) => {
    if (totalCount>=start && totalCount<end) {
      return 'wod__description'
    } else {return 'wod__description_queue'}
  }

  return (
    <>
      {isDone && <DonePage setCount={setCount} setIsDone={setIsDone} setTotalCount={setTotalCount} />}
      <div className='header'>
       <img src={korLogo} className="logo" alt="KOR logo" />
       <h1>OPEN 24.1</h1>
      </div>
      <WodDescription totalCount={totalCount} setQueueType={setQueueType} />
      {/* <Timer /> */}
      
      <div className="reps">
        <button className='reps__button' 
          onClick={handleOneLess}>
          -
        </button>
        <div className='reps__counter'>
          <h2>{count}</h2>
          <h4>reps</h4>
        </div>
        <button className='reps__button' onClick={handleOneMore}>
          +
        </button>
      </div>
      <h2>TOTAL: {totalCount}</h2>
    </>
  )
}

export default App
