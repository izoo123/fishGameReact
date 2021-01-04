import React, { CreateContext, Component } from 'react'

export const StructureContext = CreateContext()

class StructureContextProvider extends Component {
    state = {
        fishPole: {
          price: 50,
          fps: 0.5,
          ammount: 0
        },
        net: {
          price: 300,
          fps: 2,
          ammount: 0
        },
        boat: {
          price: 2500,
          fps: 15,
          ammount: 0
        },
        crew: {
          price: 21000,
          fps: 120,
          ammount: 0
        },
        yacht: {
          price: 180000,
          fps: 900,
          ammount: 0
        },
        factory: {
          price: 1000000,
          fps: 8000,
          ammount: 0
        },
        portal: {
          price: 10000000,
          fps: 70000,
          ammount: 0
        }
      }

    render() { 
        return (  
            <StructureContext.Provider value={{ structures: this.state }}>
                {this.props.children}
            </StructureContext.Provider>
        )
    }
}
 
export default StructureContextProvider 