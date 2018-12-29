import React from 'react'
import {Table, Panel, Pager} from 'react-bootstrap'

const currencySymbol = props => {
  return (
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Currency Symbol Lookup</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Currency code</th>
              <th>Currency Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
            </tr>
          </tbody>
        </Table>
        <Pager>
          <Pager.Item previous href="/currency">
            &larr; Back to Currency
          </Pager.Item>
          <Pager.Item next href="/">
            Home &rarr;
          </Pager.Item>
        </Pager>
      </Panel.Body>
    </Panel>
  )
}

export default currencySymbol
