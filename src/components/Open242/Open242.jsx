import { useState, useEffect } from "react";
import WodDescription from "../WodDescription";

export default function Open242() {
    const [isRowActive, setIsRowActive] = useState(true)
    const [isDeadliftActive, setIsDeadliftActive] = useState(false)
    const [isDoubleUnderActive, setIsDoubleUnderActive] = useState(false)
    const [count, setCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0);

    const rounds = Math.floor(totalCount/90)


    //Activate row
    useEffect(()=>{
        if(isRowActive && count>=30){
            count>30 ? setCount(totalCount%30) : setCount(0)
            setIsRowActive(false)
            setIsDeadliftActive(true)
        } else if(isDeadliftActive && count>=10){
            count>10 ? setCount(totalCount%40) : setCount(0)
            setIsDeadliftActive(false)
            setIsDoubleUnderActive(true)
        } else if(isDoubleUnderActive && count>=50){
            count>50 ? setCount(totalCount%90) : setCount(0)
            setIsDoubleUnderActive(false)
            setIsRowActive(true)
        }
    }),[totalCount]


    //Add one more, ten more, one less and ten less to count and totalCount
    const handleAddReps= (e) =>{
        const type = e.target.name

        if(type ==='oneMore') {
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

    if(type ==='oneLess') {
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
            <div className='wodDescription__wrapper'>
                <WodDescription
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
                <p style={{fontSize: '1rem', fontWeight: '500'}}>{rounds} Rounds + {totalCount%90} Reps</p>
                <h2 style={{fontSize: '2rem'}}>TOTAL: {totalCount}</h2>
            </div>
        </>
    )
}