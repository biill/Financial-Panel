import React from 'react'
import Chart from './Chart'
import {getData} from './utils'
import {connect} from 'react-redux'

class ChartComponent extends React.Component {
  UNSAFE_componentWillReceiveProps() {
    getData().then(data => {
      this.setState({
        data: this.props.stock.reverse()
      })
    })
  }

  render() {
    if (this.state == null) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h4 id="stockName">Chart for {this.props.stockName.toUpperCase()}</h4>
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
