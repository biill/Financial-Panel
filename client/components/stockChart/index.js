import React from 'react'
import Chart from './Chart'
import {getData} from './utils'
import {connect} from 'react-redux'
import {Tooltip} from 'react-bootstrap'

class ChartComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  UNSAFE_componentWillReceiveProps() {
    getData().then(data => {
      this.setState({
        data: this.props.stock.reverse()
      })
    })
  }

  handleClick = () => {
    this.setState({data: null})
  }
  render() {
    if (this.state == null || this.state.data.length === 0) {
      return (
        <Tooltip placement="top" className="in" id="tooltip-top">
          Chart for Stock (After Submit Stock Symbol)
        </Tooltip>
      )
    }
    return (
      <div>
        <h4
          className="stockName"
          style={{
            fontFamily: 'Comic Sans MS'
          }}
        >
          Chart for {this.props.stockName.toUpperCase()}
        </h4>

        <Chart data={this.state.data} />
      </div>
    )
  }
}

const mapStateToDispatch = state => ({
  stock: state.stock.data,
  stockName: state.stock.name
})

export default connect(mapStateToDispatch, null)(ChartComponent)
