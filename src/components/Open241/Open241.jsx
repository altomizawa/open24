import WodDescription from "../WodDescription";

export default function Open241(props) {
    const {totalCount, setQueueType, handleOneLess, handleOneMore, count} = props;


    return (
        <>
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