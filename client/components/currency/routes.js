import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import Currency from './currency'
import Reference from './reference'

/**
 * COMPONENT
 */
const CurrencyRoutes = () => (
  <Switch>
    <Route exact path="/currency" component={Currency} />
    <Route path="/currency/reference" component={Reference} />
  </Switch>
)

export default withRouter(CurrencyRoutes)
