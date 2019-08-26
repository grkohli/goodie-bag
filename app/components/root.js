import React from 'react'
import {Hashrouter as Router, Route, Link} from 'react-router-dom'
import CandiesList from './CandiesList'

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/api/candies">Goodie Bag</Link>
      </nav>
      {/* <Router>
        <Route path="/api/candies" component={CandiesList} />
      </Router> */}

      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
  )
}

export default Root;
