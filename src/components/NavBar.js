import React from 'react'
import fish from '../images/fish.png'

export default function NavBar() {
  return (
    <div className="NavBar">
      <img src={fish} alt="" />
      <h1>Fish Game</h1>
    </div>
  )
}
