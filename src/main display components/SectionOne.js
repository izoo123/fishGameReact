import React from 'react'
import FishButton from '../components/FishButton'
import FishPole from '../components/FishPole'
import FishCount from '../components/FishCount'
import BaitShop from '../components/BaitShop'

function SectionOne(props) {
    return (
        <div className="SectionOne">
            <FishPole fishPoleImg={props.state.fishPoleImg} />
            <FishButton handleClick={props.handleClick}/>
            <FishCount fps={props.state.fps} fishCount={props.state.fishCount} />
            <BaitShop />
        </div>
    )
}

export default SectionOne