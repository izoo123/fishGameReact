import React from 'react'
import FishButton from '../components/FishButton'
import FishPole from '../components/FishPole'
import FishCount from '../components/FishCount'
import BaitShop from '../components/BaitShop'

function SectionOne(props) {
    return (
        <div className="SectionOne">
            <FishPole />
            <FishButton handleClick={props.handleClick}/>
            <FishCount />
            <BaitShop />
        </div>
    )
}

export default SectionOne