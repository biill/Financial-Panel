import React from 'react'
import {Table, Panel, Pager} from 'react-bootstrap'
import currencyInfor from './currency.json'

const currencySymbol = props => {
  console.log(currencyInfor)
  return (
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Currency Symbol Lookup</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Pager>
          <Pager.Item previous href="/currency">
            &larr; Back to Currency
          </Pager.Item>
          <Pager.Item next href="/">
            Home &rarr;
          </Pager.Item>
        </Pager>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Currency code</th>
              <th>Currency Name</th>
            </tr>
          </thead>
          <tbody>
            {currencyInfor.map(data => {
              return (
                <tr key={data['currency code']}>
                  <td style={{fontWeight: 'bold'}}>{data['currency code']}</td>
                  <td
                    style={{
                      fontFamily: 'Apple Chancery'
                    }}
                  >
                    {data['currency name']}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Panel.Body>
    </Panel>
  )
}

export default currencySymbol
