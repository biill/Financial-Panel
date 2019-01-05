import React from 'react'
import {PageHeader} from 'react-bootstrap'
import StockChart from './stockChart'

const home = props => {
  return (
    <div>
      <PageHeader>Welcome to Financial Panel!</PageHeader>
      <StockChart />
    </div>
  )
}

export default home
