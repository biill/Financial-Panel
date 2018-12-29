import React from 'react'
import {connect} from 'react-redux'
import {gotStockStat} from '../../reducer/stockReducer'
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'

const stockDataType = props => {
  const handleClick = e => {
    e.persist()
    const {stockName, updateData} = props
    updateData(stockName, e.target.innerHTML)
  }
  return (
    <ButtonToolbar id="filter" onClick={handleClick}>
      <ButtonGroup bsSize="xsmall">
        <Button type="button" bsStyle="info" autoFocus="true">
          Daily
        </Button>
      </ButtonGroup>
      <ButtonGroup bsSize="xsmall">
        <Button type="button" bsStyle="info">
          Weekly
        </Button>
      </ButtonGroup>
      <ButtonGroup bsSize="xsmall">
        <Button type="button" bsStyle="info">
          Monthly
        </Button>
      </ButtonGroup>

      <ButtonGroup bsSize="xsmall">
        <Button type="button" bsStyle="success">
          Minutes
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  )
}

const mapStateToProps = state => ({
  stock: state.stock.data,
  stockName: state.stock.name
})

const mapDispatchToProps = dispatch => ({
  updateData: (stockName, interval) =>
    dispatch(gotStockStat(stockName, interval))
})

export default connect(mapStateToProps, mapDispatchToProps)(stockDataType)
