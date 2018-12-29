import React from 'react'
import StockForm from './stockForm'
import ChartComponent from './index'
import StockDataType from './stockDataType'

const stock = props => {
  return (
    <div>
      <StockForm />
      <StockDataType />
      <ChartComponent />
    </div>
  )
}

export default stock
