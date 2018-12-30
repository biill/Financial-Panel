import React from 'react'
import {connect} from 'react-redux'
import {gotStockStat, removeStock} from '../../reducer/stockReducer'
import {Button, ButtonToolbar, ButtonGroup, Glyphicon} from 'react-bootstrap'

const stockDataType = props => {
  const handleClick = e => {
    // e.persist()
    const {stockName, updateData, clear} = props
    if (e.target.name === 'clear') {
      clear(e.target.name)
    } else updateData(stockName, e.target.innerHTML)
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
      {props.stock.length > 0 ? (
        <ButtonGroup
          bsSize="xsmall"
          className="pull-right"
          onClick={handleClick}
        >
          <Button type="button" bsStyle="danger" name="clear">
            <Glyphicon glyph="trash" /> Clear
          </Button>
        </ButtonGroup>
      ) : null}
    </ButtonToolbar>
  )
}

const mapStateToProps = state => ({
  stock: state.stock.data,
  stockName: state.stock.name
})

const mapDispatchToProps = dispatch => ({
  updateData: (stockName, interval) =>
    dispatch(gotStockStat(stockName, interval)),
  clear: () => dispatch(removeStock)
})

export default connect(mapStateToProps, mapDispatchToProps)(stockDataType)
