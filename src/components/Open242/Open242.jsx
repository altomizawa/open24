import { useState, useEffect } from "react";
import WodDescription from "../WodDescription";

export default function Open242() {
    const [isRowActive, setIsRowActive] = useState(true)
    const [isDeadliftActive, setIsDeadliftActive] = useState(false)
    const [isDoubleUnderActive, setIsDoubleUnderActive] = useState(false)
    const [count, setCount] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [totalCount, setTotalCount] = useState(0);


  //Activate row

  useEffect(()=>{
    if (totalCount===30 | totalCount===120 | totalCount ===210 | totalCount===300 | totalCount===390 | totalCount===480 | totalCount===570 | totalCount===660 | totalCount===750 | totalCount===840) {
        setCount(0)
        setIsRowActive(false)
        setIsDeadliftActive(true)
    }
    else if (totalCount===40 | totalCount===130 | totalCount ===220 | totalCount===310 | totalCount===400 | totalCount===490 | totalCount===580 | totalCount===670 | totalCount===760 | totalCount===850){
        setCount(0)
        setIsDeadliftActive(false)
        setIsDoubleUnderActive(true)
    } else if (totalCount===90 | totalCount===180 | totalCount ===270 | totalCount===360 | totalCount===450 | totalCount===540 | totalCount===630 | totalCount===720 | totalCount===810 | totalCount===900){
        setCount(0)
        setIsDoubleUnderActive(false)
        setIsRowActive(true)

    }
  }),[totalCount]


  //Add one more, ten more, one less and ten less to count and totalCount
  const handleAddReps= (e) =>{
    const type = e.target.name

    if(e.target.name ==='oneMore') {
        setCount((count) => count +1)
        setTotalCount((totalCount) => totalCount +1)
    }
    else {
        setCount((count) => count +10)
        setTotalCount((totalCount) => totalCount +10)
    }    
}

  const handleSubtractReps= (e) =>{
    const type = e.target.name

    if(e.target.name ==='oneLess') {
        if((count-1)<0) {
            return
        }
        setCount((count) => count -1)
        setTotalCount((totalCount) => totalCount -1)
    }
    else {
        if ((count-10)<0) {
            return} 
        setCount((count) => count -10)
        setTotalCount((totalCount) => totalCount -10)}    
  }

    return (
        <>
            <WodDescription
            totalCount={totalCount}
            isRowActive={isRowActive}
            isDeadliftActive={isDeadliftActive}
            isDoubleUnderActive={isDoubleUnderActive}
            />
            {/* <Timer /> */}
            
            <div className="reps">
                <div className="reps__button-wrapper">
                    <button className='reps__button'
                    name="oneLess" 
                    onClick={handleSubtractReps}>
                    -1
                    </button>
                    <button className='reps__button' 
                    name="tenLess"
                    onClick={handleSubtractReps}>
                    -10
                    </button>
                </div>
                <div className='reps__counter'>
                    <h2>{count}</h2>
                    <h4>reps</h4>
                </div>
                <div className="reps__button-wrapper"> 
                    <button className='reps__button' name="oneMore" onClick={handleAddReps}>
                    +1
                    </button>
                    <button className='reps__button' name="tenMore" onClick={handleAddReps}>
                    +10
                    </button>
                </div> 
            </div>
            <h2>TOTAL: {totalCount}</h2>
        </>
    )
}