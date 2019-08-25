import React from 'react'
import {NavLink} from 'react-router-dom'
import CandiesList from './CandiesList'

const Root = () => {
  return (
    <div>
      <NavLink to="/api/candies"> Go to All Candies</NavLink>
      {/* <nav>
        Goodie Bag
        <NavLink to="/api/candies"> Go to All Candies</NavLink>
      </nav> */}
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
  )
}

export default Root
