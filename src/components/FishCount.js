import React from 'react'
import { FishContext } from '../FishContext'

function FishCount(props) {
  return(
    <FishContext.Consumer>{ (context) => {
      const { fishCount, fps } = context
      
     return(
      <div className="FishCount">
        <div id="fishCountLabel">Fish Count:</div>
        <div id="fishCount">{Math.round((fishCount * 10)) / 10}</div>
        <div id="fpsCounter">Fps: {fps}</div>
      </div>
     )
    }}
    </FishContext.Consumer>
  )
}

export default FishCount
