import axios from 'axios'
import history from '../history'
const APIKEY = 'XUKO1LP3IY0YZRJ6'
var stocks = new Stocks(APIKEY)

/**
 * ACTION TYPES
 */
const GET_STOCK = 'GET_DATA'
const REMOVE_STOCK = 'REMOVE_STOCK'

/**
 * INITIAL STATE
 */
const stockData = {name: '', data: []}

/**
 * ACTION CREATORS
 */
const getStock = (name, data) => ({type: GET_STOCK, name, data})
export const removeStock = {type: REMOVE_STOCK}
/**
 * THUNK CREATORS
 */
export const gotStockStat = (stockName, interval) => async dispatch => {
  console.log(stockName, interval)
  if (interval === 'Minutes') interval = '5min'
  try {
    const data = await stocks.timeSeries({
      symbol: stockName,
      interval: interval.toLowerCase()
    })
    dispatch(getStock(stockName, data))
  } catch (err) {
    //dispatch(removeStock())
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = stockData, action) {
  switch (action.type) {
    case GET_STOCK:
      return {name: action.name, data: action.data}
    case REMOVE_STOCK:
      return stockData
    default:
      return state
  }
}
