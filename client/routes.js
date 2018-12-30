import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Stock, Currency, Crypto, Home} from './components'
import {Jumbotron} from 'react-bootstrap'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Jumbotron>
        <Switch>
          <Route path="/crypto" component={Crypto} />
          <Route path="/stock" component={Stock} />
          <Route path="/currency" component={Currency} />
          <Route exact path="/" component={Home} />
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
