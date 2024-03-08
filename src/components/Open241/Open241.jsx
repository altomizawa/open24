import { useState, useEffect } from "react";
import WodDescription from "../WodDescription";

export default function Open241() {
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

    const handleTenMore = () =>{
        setCount((count) => count +10)
        setTotalCount((totalCount) => totalCount +10)
    }

    const handleOneLess = () =>{
        if (totalCount>0 && count>0) {
        setCount((count) => count -1)
        setTotalCount((totalCount) => totalCount -1)
        console.log(totalCount)
        }
    }

    const handleTenLess = () =>{
        if (totalCount>0 && count>0) {
        setCount((count) => count -10)
        setTotalCount((totalCount) => totalCount -10)
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