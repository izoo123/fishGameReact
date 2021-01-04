import React from 'react'
import { FishContext } from '../FishContext'

function FishButton () {
  return (
    <FishContext.Consumer >{(context) => {
      const { handleClick } = context

      return (
        <div className="FishButton">
          <button id="fishButton" type="button" onClick={handleClick}>Go Fishing!</button>
        </div>
      )
    }}
    </FishContext.Consumer>
  )
}

export default FishButton
