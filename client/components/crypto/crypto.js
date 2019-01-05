import React from 'react'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import digitalCurrency from './digital_currency.json'
import Axios from 'axios'
const APIKEY = 'XUKO1LP3IY0YZRJ6'
class cryptoInfor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cryto: '',
      infor: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    const res = await Axios.get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${
        this.state.cryto
      }&to_currency=USD&apikey=${APIKEY}`
    )

    // const res = await Axios.get(
    //   'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo'
    // )

    this.setState({infor: res.data})
    console.log(this.state)
  }

  handleChange = evt => {
    this.setState({
      cryto: evt.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>From</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              name="currency1"
            >
              {digitalCurrency.map(data => (
                <option
                  value={data['currency code']}
                  key={data['currency code']}
                >
                  {data['currency code']} - {data['currency name']}
                </option>
              ))}
            </FormControl>
          </FormGroup>
          <br />
          <Button bsStyle="success" type="submit">
            Submit
          </Button>
        </form>
        <br />
        {this.state.infor === null || this.state.infor === undefined ? null : (
          <div className="currencyInfo">
            The Exchange Rate for : <br />
            {
              this.state.infor['Realtime Currency Exchange Rate'][
                '2. From_Currency Name'
              ]
            }{' '}
            to{' '}
            {
              this.state.infor['Realtime Currency Exchange Rate'][
                '4. To_Currency Name'
              ]
            }{' '}
            is ${' '}
            <span>
              {parseFloat(
                this.state.infor['Realtime Currency Exchange Rate'][
                  '5. Exchange Rate'
                ]
              ).toFixed(8)}
            </span>
            <br />
            <small>
              Last Updated:
              {
                this.state.infor['Realtime Currency Exchange Rate'][
                  '6. Last Refreshed'
                ]
              }{' '}
              {
                this.state.infor['Realtime Currency Exchange Rate'][
                  '7. Time Zone'
                ]
              }
            </small>
          </div>
        )}
      </div>
    )
  }
}

export default cryptoInfor
