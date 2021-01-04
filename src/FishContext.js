import React, { createContext, Component } from 'react'

export const FishContext = createContext()

class FishContextProvider extends Component {

    state = {  
        fishCount: 0,
        fps: 0,
        fpc: 1,
        structures: {}
    }

    devFishCount = () => {
        this.setState({
            fishCount: 100000000000
        })
    }

    handleClick = () => {
        this.setState( prevState => {
            return {fishCount: prevState.fishCount + prevState.fpc}
        })
    }
    
    handleStructureBuy = (structure) => {
        if (this.state.fishCount >= structure.price) {
            this.setState( prevState => {
                return {
                    fishCount: prevState.fishCount - structure.price
                }
            })
        }

    }

    getStructures = (structures) => {
        this.setState({
            structures: structures
        })
    }

    //for some reason when I make the fishcount round to the nearest tenth it stop at certain numbers 2.3 etc
    //I dont understand why but if I dont do this it is a very long decimal with a lot of 9s
    handleFishUpdate = (structures) => {
        this.setState( prevState => {
            return {
                fishCount: prevState.fishCount + (prevState.fps)/10
                //((Math.round(prevState.fishCount + (prevState.fps)/10)) * 10)/10
                //prevState.fishCount + (prevState.fps)/10
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.structures !== prevState.structures) {
            this.setState({
                fps: this.state.structures.fishPole.fps * this.state.structures.fishPole.amount +
                     this.state.structures.net.fps * this.state.structures.net.amount +
                     this.state.structures.boat.fps * this.state.structures.boat.amount +
                     this.state.structures.crew.fps * this.state.structures.crew.amount +
                     this.state.structures.yacht.fps * this.state.structures.yacht.amount +
                     this.state.structures.factory.fps * this.state.structures.factory.amount +
                     this.state.structures.portal.fps * this.state.structures.portal.amount 
                     
            })
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.handleFishUpdate(this.state), 100)
      }

    render() { 
        return (  
            <FishContext.Provider value={{ ...this.state, handleClick: this.handleClick, 
                handleStructureBuy: this.handleStructureBuy, handleFishUpdate: this.handleFishUpdate,
                getStructures: this.getStructures, devFishCount: this.devFishCount }}>
                {this.props.children}
            </FishContext.Provider>
        )
    }
}
 
export default FishContextProvider 