import React from 'react'
import {Button, PageHeader} from 'react-bootstrap'

const crypto = props => {
  return (
    <div>
      <PageHeader>
        Cryptocurrencies<small>Subtext for header</small>
      </PageHeader>
      <Button bsStyle="primary" href="/crypto/reference">
        Cryptocurrencies Symbol Reference
      </Button>
    </div>
  )
}

export default crypto
