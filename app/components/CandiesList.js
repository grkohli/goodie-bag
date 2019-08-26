import React from 'react'
import {connect} from 'react-redux'
import SingleCandy from './SingleCandy'
import {getCandies} from '../reducers/index'

class CandiesList extends React.Component {
    componentDidMount() {
      this.props.getCandies();
    }

    render () {
      return (
          <div>
            <h2 className="section-title">Candies</h2>
            <ul className="candy-container">
              {
                this.props.candies.map(candy => {
                  return (<div className="single-candy" key={candy.id}>
                    <SingleCandy candy={candy} />
                          </div>)
                })
              }
            </ul>
          </div>
      )
    }
  }

  const mapStatetoProps = (state) => {
    return {
      candies: state.allCandies
    }
  }

  const mapDispatchtoProps = (dispatch) => {
    return {
      getCandies: () => dispatch(getCandies())
    }
  }

  export default connect(mapStatetoProps, mapDispatchtoProps)(CandiesList)
