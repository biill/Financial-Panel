import React from 'react'
import {Table, Panel, Pager} from 'react-bootstrap'
import cryptoInfor from './digital_currency.json'

const cryptoSymbol = props => {
  return (
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Crypto Symbol Lookup</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Pager>
          <Pager.Item previous href="/crypto">
            &larr; Back to Crypto
          </Pager.Item>
          <Pager.Item next href="/">
            Home &rarr;
          </Pager.Item>
        </Pager>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Crypto code</th>
              <th>Crypto Name</th>
            </tr>
          </thead>
          <tbody>
            {cryptoInfor.map(data => {
              return (
                <tr key={data['currency code']}>
                  <td style={{fontWeight: 'bold'}}>{data['currency code']}</td>
                  <td
                    style={{
                      fontFamily: 'Arial, Helvetica, sans-serif'
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

export default cryptoSymbol
