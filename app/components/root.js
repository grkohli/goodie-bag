import React from 'react'
import {BrowserRouter as Router,
  Route,
  NavLink,
  Switch} from 'react-router-dom'
import CandiesList from './CandiesList'

const Root = () => {
  return (
    <Router>
    <div>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/candies">Goodie Bag</NavLink>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
      <Switch>
        <Route path="/candies" component={CandiesList} />
      </Switch>
    </div>
    </Router>
  )
}

export default Root;
