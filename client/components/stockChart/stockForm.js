import React from 'react'
import {connect} from 'react-redux'
import {gotStockStat} from '../../reducer/stockReducer'
import {
  ControlLabel,
  FormGroup,
  FormControl,
  Form,
  Button,
  Grid,
  Row,
  Glyphicon
} from 'react-bootstrap'

const stockForm = props => {
  const {handleSubmit} = props
  return (
    <Grid>
      <Row className="show-grid">
        <Form inline onSubmit={handleSubmit}>
          <FormGroup>
            <ControlLabel>
              <span>Please Enter Stock Symbol: </span>
            </ControlLabel>
            <FormControl
              name="stockName"
              type="text"
              placeholder="Enter stock name here"
            />
            <Button bsStyle="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Row>
    </Grid>
  )
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const stockName = evt.target.stockName.value
      evt.target.stockName.value = ''
      dispatch(gotStockStat(stockName, 'daily'))
    }
  }
}

export default connect(null, mapDispatch)(stockForm)
