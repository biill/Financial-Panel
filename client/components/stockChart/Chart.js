import React from 'react'
import PropTypes from 'prop-types'

import {format} from 'd3-format'
import {timeFormat} from 'd3-time-format'

import {ChartCanvas, Chart} from 'react-stockcharts'
import {BarSeries, CandlestickSeries} from 'react-stockcharts/lib/series'
import {XAxis, YAxis} from 'react-stockcharts/lib/axes'
import {
  CrossHairCursor,
  MouseCoordinateX,
  MouseCoordinateY
} from 'react-stockcharts/lib/coordinates'

import {discontinuousTimeScaleProvider} from 'react-stockcharts/lib/scale'
import {OHLCTooltip} from 'react-stockcharts/lib/tooltip'
import {fitWidth} from 'react-stockcharts/lib/helper'
import {last} from 'react-stockcharts/lib/utils'

class CandleStickChartWithCHMousePointer extends React.Component {
  render() {
    const {
      type,
      data: initialData,
      width,
      ratio,
      zoomEvent,
      panEvent
    } = this.props

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    )
    const {data, xScale, xAccessor, displayXAccessor} = xScaleProvider(
      initialData
    )

    const start = xAccessor(last(data))
    const end = xAccessor(data[Math.max(0, data.length - 150)])
    const xExtents = [start, end]

    const margin = {left: 70, right: 70, top: 30, bottom: 30}

    const height = 400

    const gridHeight = height - margin.top - margin.bottom
    const gridWidth = width - margin.left - margin.right

    const showGrid = true
    const yGrid = showGrid
      ? {innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2}
      : {}
    const xGrid = showGrid
      ? {innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2}
      : {}

    return (
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={width}
        margin={{left: 70, right: 70, top: 10, bottom: 30}}
        type={type}
        seriesName="MSFT"
        zoomEvent={zoomEvent}
        panEvent={panEvent}
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >
        <Chart id={1} yExtents={[d => [d.high, d.low]]}>
          <XAxis
            axisAt="bottom"
            orient="bottom"
            zoomEnabled={zoomEvent}
            {...xGrid}
          />
          <YAxis
            axisAt="right"
            orient="right"
            ticks={5}
            zoomEnabled={zoomEvent}
            {...yGrid}
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format('.2f')}
          />
          <CandlestickSeries />
          <OHLCTooltip origin={[-40, -8]} />
        </Chart>
        <Chart
          id={2}
          height={150}
          yExtents={d => d.volume}
          origin={(w, h) => [0, h - 150]}
        >
          <YAxis
            axisAt="left"
            orient="left"
            ticks={5}
            tickFormat={format('.2s')}
          />

          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeFormat('%Y-%m-%d')}
          />
          <MouseCoordinateY
            at="left"
            orient="left"
            displayFormat={format('.4s')}
          />

          <BarSeries
            yAccessor={d => d.volume}
            fill={d => (d.close > d.open ? '#6BA583' : '#FF0000')}
          />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
    )
  }
}

CandleStickChartWithCHMousePointer.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired
  //   type: PropTypes.oneOf(['svg', 'hybrid']).isRequired
}

CandleStickChartWithCHMousePointer.defaultProps = {
  type: 'svg'
}
CandleStickChartWithCHMousePointer = fitWidth(
  CandleStickChartWithCHMousePointer
)

export default CandleStickChartWithCHMousePointer
