import React from 'react'
import StockForm from './stockForm'
import ChartComponent from './index'
import StockDataType from './stockDataType'
import {PageHeader} from 'react-bootstrap'

const stock = props => {
  return (
    <div>
      <PageHeader>STOCK</PageHeader>
      <StockForm />
      <StockDataType />
      <ChartComponent />
    </div>
  )
}

export default stock
