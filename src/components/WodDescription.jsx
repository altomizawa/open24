import { useState } from "react";

export default function WodDescription(props){
    const {totalCount, isRowActive, isDeadliftActive, isDoubleUnderActive}= props;
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='wod'>
        <h2>AMRAP in 20 minutes:</h2>
        <p className={isRowActive ? 'wod__description' : 'wod242__description_done'}>300-meter row</p>
        <p className={isDeadliftActive ? 'wod__description' : 'wod242__description_done'}>10 deadlifts*</p>
        <p className={isDoubleUnderActive ? 'wod__description' : 'wod242__description_done'}>50 double unders</p>
        <div className='wod__obs'>
          <p>*♀ 125 lb (56 kg) ♂ | 185 lb (83 kg) </p>
        </div>
      </div>
    )
}