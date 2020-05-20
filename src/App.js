import React, {Component} from 'react'
import AppDisplay from './AppDisplay'
import './App.css';
import FishContextProvider from './FishContext';

class App extends Component {

  state = {
    // fishCount: 0,
    // fps: 0,
    // fpc: 1,
    fishPoleImg: require('./images/fishingrod.png')
  }

  // handleClick = () => {
  //   this.setState( prevState => {
  //     return {fishCount: prevState.fishCount + prevState.fpc}
  //   })
  // }

  render()  {
      return (
        <div>
          <FishContextProvider>
            <AppDisplay state={this.state} handleClick={this.handleClick}/>
          </FishContextProvider>
        </div>
      )
  }
}

export default App;
