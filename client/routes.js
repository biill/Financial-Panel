import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Login, Signup, UserHome, Stock, Currency} from './components'
import {me} from './store'
import {gotStock, getWeekly} from './reducer/stockReducer'
import {Jumbotron} from 'react-bootstrap'
/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Jumbotron>
        <Switch>
          <Route path="/stock" component={Stock} />
          <Route path="/currency" component={Currency} />
          <Route path="/crypto" />
          <Route exact path="/" />
        </Switch>
      </Jumbotron>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)

/**
 * PROP TYPES
 */
