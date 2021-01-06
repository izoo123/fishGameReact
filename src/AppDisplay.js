import React from 'react'
import NavBar from './components/NavBar'
import SectionOne from './main display components/SectionOne'
import StructureStore from './components/StructureStore'
import Structures from './components/Structures'

function AppDisplay (props) {
  return (
    <div className="App">
      <NavBar />

      <div className="AppMain">
        <SectionOne/>

        <div className="SectionTwo">
         <Structures />
        </div>

        <div className="SectionThree">
          <StructureStore/>
        </div>
      </div>

    </div>
  )
}

export default AppDisplay
