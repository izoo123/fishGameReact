import React, {Component} from 'react'
import StructureStoreDisplay from './StructureStoreDisplay'
import { FishContext } from '../FishContext'

class StructureStore extends Component { 
  state = {
    fishPole: {
      price: 50,
      fps: 0.5,
      amount: 0
    },
    net: {
      price: 300,
      fps: 2,
      amount: 0
    },
    boat: {
      price: 2500,
      fps: 15,
      amount: 0
    },
    crew: {
      price: 21000,
      fps: 120,
      amount: 0
    },
    yacht: {
      price: 180000,
      fps: 900,
      amount: 0
    },
    factory: {
      price: 1000000,
      fps: 8000,
      amount: 0
    },
    portal: {
      price: 10000000,
      fps: 70000,
      amount: 0
    }
  }

  static contextType = FishContext

  // Im having an issue where the first buy doesnt result in a getStructures being called after the buy. 
  // this was because setState is non synchronis so I used the callback function on setState to make this work.
  handleClick = (event) => {
    const { getStructures, handleStructureBuy, fishCount } = this.context
    const { name } = event.target

    handleStructureBuy(this.state[name])

    if ( fishCount >= this.state[name].price ) {
      this.setState( prevState => {
        return { [name]: {
          price: Math.round(prevState[name].price * 1.2),
          fps: prevState[name].fps,
          amount: prevState[name].amount + 1
        }}
      }, () => { getStructures(this.state) } )
    }

  }

  test = () => {
    const { devFishCount } = this.context

    devFishCount()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <StructureStoreDisplay state={this.state} handleClick={this.handleClick} />
        <button onClick={this.test}> Test </button>
        <button onClick={this.saveGame}>Save</button>
      </div>
    )
  }
}

export default StructureStore
