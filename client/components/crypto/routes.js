import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import Crypto from './crypto'
import Reference from './reference'

/**
 * COMPONENT
 */
const CryptoRoutes = () => (
  <Switch>
    <Route exact path="/crypto" component={Crypto} />
    <Route path="/crypto/reference" component={Reference} />
  </Switch>
)

export default withRouter(CryptoRoutes)
