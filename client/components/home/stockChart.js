import React from 'react'
import {PageHeader, ProgressBar} from 'react-bootstrap'
import {Treemap} from 'react-vis'
import Axios from 'axios'
const APIKEY = 'XUKO1LP3IY0YZRJ6'

const STYLES = {
  GREEN: {
    border: 'thin solid #ddd',
    background: 'green'
  },
  RED: {
    border: 'thin solid #ddd',
    background: 'red',
    fontSize: '200'
  }
}

const getData = async () => {
  return await Axios.get(
    `https://www.alphavantage.co/query?function=SECTOR&apikey=${APIKEY}`
    // `https://www.alphavantage.co/query?function=SECTOR&apikey=demo`
  )
}

const getAPIData = datafromAPI => {
  return {
    name: 'data for today',
    children: [
      {
        name: 'Consumer Discretionary',
        size: parseFloat(datafromAPI['Consumer Discretionary']).toFixed(3)
      },
      {
        name: 'Real Estate',
        size: parseFloat(datafromAPI['Real Estate']).toFixed(3)
      },
      {
        name: 'Health Care',
        size: parseFloat(datafromAPI['Health Care']).toFixed(3)
      },
      {
        name: 'Financials',
        size: parseFloat(datafromAPI['Financials']).toFixed(3)
      },
      {
        name: 'Utilities',
        size: parseFloat(datafromAPI['Utilities']).toFixed(3)
      },
      {
        name: 'Consumer Staples',
        size: parseFloat(datafromAPI['Consumer Staples']).toFixed(3)
      },
      {
        name: 'Communication Services',
        size: parseFloat(datafromAPI['Communication Services']).toFixed(3)
      },
      {
        name: 'Information Technology',
        size: parseFloat(datafromAPI['Information Technology']).toFixed(3)
      },
      {
        name: 'Industrials',
        size: parseFloat(datafromAPI['Industrials']).toFixed(3)
      },
      {
        name: 'Materials',
        size: parseFloat(datafromAPI['Materials']).toFixed(3)
      },
      {name: 'Energy', size: parseFloat(datafromAPI['Energy']).toFixed(3)}
    ]
  }
}

const convertData = infor => {
  infor.positive = false
  let result = infor.children.map(e => {
    if (e.size >= 0) e.positive = 'true'
    else {
      e.positive = 'false'
      e.size = Math.abs(e.size)
      e.style = STYLES['RED']
    }
    return e
  })
  infor.children = result
  return infor
}

export default class DynamicTreemapExample extends React.Component {
  state = {
    hoveredNode: false,
    treemapData: null,
    information: ''
  }

  async componentDidMount() {
    const res = await getData()
    const data = convertData(getAPIData(res.data['Rank B: 1 Day Performance']))
    console.log(res)
    this.setState({treemapData: data, information: res.data['Meta Data']})
  }

  render() {
    const {hoveredNode, information, treemapData} = this.state
    const treeProps = {
      data: treemapData,
      onLeafMouseOver: x => this.setState({hoveredNode: x}),
      onLeafMouseOut: () => this.setState({hoveredNode: false}),
      height: 600,
      mode: 'squarify',
      getLabel: x =>
        x.positive === 'true'
          ? x.name + ' ' + x.size + '%'
          : x.name + ' - ' + x.size + '%',
      width: 900,
      style: STYLES['GREEN']
    }
    return this.state.treemapData ? (
      <div className="dynamic-treemap">
        <PageHeader id="stockInfo">
          <small>
            <span className="homepage">
              {hoveredNode && hoveredNode.data.name}
            </span>{' '}
            {hoveredNode ? (
              hoveredNode.data.positive === 'true' ? (
                <span id="up">
                  Today is Up: {hoveredNode && hoveredNode.value} %{' '}
                </span>
              ) : (
                <span id="down">
                  Today is Down: - {hoveredNode && hoveredNode.value} %{' '}
                </span>
              )
            ) : (
              <div id="infor"> {information.Information}</div>
            )}
          </small>
        </PageHeader>
        <Treemap {...treeProps} />
        <div id="information">
          {' '}
          Last Updated: {information['Last Refreshed']}
        </div>
      </div>
    ) : (
      <ProgressBar active now={45} />
    )
  }
}
