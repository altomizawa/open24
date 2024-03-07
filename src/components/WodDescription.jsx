export default function WodDescription(props){
    const {totalCount, setQueueType}= props;

    return (
        <div className='wod'>
        <h2>For Time:</h2>
        <p className={totalCount<21 ? setQueueType(0,21) : 'wod__description_done'}>21 dumbbell snatches, arm 1</p>
        <p className={totalCount<42 ? setQueueType(21,42) : 'wod__description_done'}>21 lateral burpees over dumbbell</p>
        <p className={totalCount<63 ? setQueueType(42,63) : 'wod__description_done'}>21 dumbbell snatches, arm 2</p>
        <p className={totalCount<84 ? setQueueType(63,84) : 'wod__description_done'}>21 lateral burpees over dumbbell</p>
        <p className={totalCount<99 ? setQueueType(84,99) : 'wod__description_done'}>15 dumbbell snatches, arm 1</p>
        <p className={totalCount<114 ? setQueueType(99,114) : 'wod__description_done'}>15 lateral burpees over dumbbell</p>
        <p className={totalCount<129 ? setQueueType(114,129) : 'wod__description_done'}>15 dumbbell snatches, arm 2</p>
        <p className={totalCount<144 ? setQueueType(129,144) : 'wod__description_done'}>15 lateral burpees over dumbbell</p>
        <p className={totalCount<153 ? setQueueType(144,153) : 'wod__description_done'}>9 dumbbell snatches, arm 1</p>
        <p className={totalCount<162 ? setQueueType(153,162) : 'wod__description_done'}>9 lateral burpees over dumbbell</p>
        <p className={totalCount<171 ? setQueueType(162,171) : 'wod__description_done'}>9 dumbbell snatches, arm 2</p>
        <p className={totalCount<180 ? setQueueType(171,180) : 'wod__description_done'}>9 lateral burpees over dumbbell</p>
        <div className='wod__obs'>
          <p>*Time cap: 15 minutes <br></br>35-lb (15-kg) dumbbell </p>
        </div>
      </div>
    )
}