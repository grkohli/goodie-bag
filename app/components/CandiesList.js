import React from 'react'
import {connect} from 'react-redux'
import {List} from './utils'
import {getCandies} from '../reducers/index'

class Candies extends React.Component {

    componentDidMount() {
      this.props.getCandies();
    }

    render () {
      const {candies} = this.props
      return (
        <div>
          <List
            forEachOfThese={candies}
            doThis={candy => (
              <div key={candy.id}>
                <img src={candy.imageUrl} />
                <p>{candy.name}</p>
              </div>
            )}
            unlessEmpty={() => <div>Where are the pets?!?</div>}
          />
        </div>
      )
    }
  }

  const mapState = (state) => {
    return {
      candies: state.candies
    }
  }

  const mapDispatch = (dispatch) => {
    return {
      getCandies: () => dispatch(getCandies())
    }
  }

  export default connect(mapState, mapDispatch)(Candies)
