import React from 'react'

function StructureStoreDisplay (props) {
  return (
    <div className="StructureStore">
        <div id="structureStoreTitle">Store</div>
        <div id="fishingPole" class="StructureStoreItems">Fishing Pole
          <p id="fishingPoleAmounts">Price: {props.state.fishPole.price}, Owned: {props.state.fishPole.amount}</p>
          <button
            type="button"
            className="BuyButton"
            id="fishingPoleBtn"
            name="fishPole"
            onClick={props.handleClick}
          >Buy</button>
        </div>
        <div id="net" class="StructureStoreItems"> { props.state.fishPole.amount >= 1 ? "Net" : "???" }
          <p id="netAmounts">{ props.state.fishPole.amount >= 1 ? `Price: ${props.state.net.price}, Owned: ${props.state.net.amount}`: null }</p>
          <button
            type="button"
            className="BuyButton"
            id="netBtn"
            name="net"
            onClick={props.handleClick}
          >Buy</button>
        </div>
        <div id="boat" class="StructureStoreItems"> { props.state.net.amount >= 1 ? "Boat" : "???" }
          <p id="boatAmounts">{ props.state.net.amount >= 1 ? `Price: ${props.state.boat.price}, Owned: ${props.state.boat.amount}`: null }</p>
          <button
            type="button"
            class="BuyButton"
            id="boatBtn"
            name="boat"
            onClick={props.handleClick}
          >Buy</button>
        </div>
        <div id="crew" class="StructureStoreItems"> { props.state.boat.amount >= 1 ? "Crew" : "???" }
          <p id="crewAmounts">{ props.state.boat.amount >= 1 ? `Price: ${props.state.crew.price}, Owned: ${props.state.crew.amount}`: null }</p>
          <button
            type="button"
            class="BuyButton"
            id="crewBtn"
            name="crew"
            onClick={props.handleClick}
          >Buy</button>
        </div>
        <div id="yacht" class="StructureStoreItems"> { props.state.crew.amount >= 1 ? "Yacht" : "???" }
          <p id="yachtAmounts">{ props.state.crew.amount >= 1 ? `Price: ${props.state.yacht.price}, Owned: ${props.state.yacht.amount}`: null }</p>
          <button
            type="button"
            class="BuyButton"
            id="yachtBtn"
            name="yacht"
            onClick={props.handleClick}
          >Buy</button>
        </div>
        <div id="fishFactory" class="StructureStoreItems"> { props.state.yacht.amount >= 1 ? "Fish Factory" : "???" }
          <p id="fishFactoryAmounts">{ props.state.yacht.amount >= 1 ? `Price: ${props.state.factory.price}, Owned: ${props.state.factory.amount}`: null }</p>
          <button
            type="button"
            class="BuyButton"
            id="fishFactoryBtn"
            name="factory"
            onClick={props.handleClick}
          >Buy</button>
        </div>
        <div id="fishPortal" class="StructureStoreItems"> { props.state.factory.amount >= 1 ? "Fish portal" : "???" }
          <p id="fishPortalAmounts">{ props.state.factory.amount >= 1 ? `Price: ${props.state.portal.price}, Owned: ${props.state.portal.amount}`: null }</p>
          <button
            type="button"
            class="BuyButton"
            id="fishPortalBtn"
            name="portal"
            onClick={props.handleClick}
          >Buy</button>
        </div>
      </div>
  )
}

export default StructureStoreDisplay
