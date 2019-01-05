import React from 'react'
import {Button, PageHeader} from 'react-bootstrap'
import CryptoInfor from './crypto'

const crypto = props => {
  return (
    <div>
      <PageHeader>
        Cryptocurrencies<small> (Based on USD)</small>
      </PageHeader>
      <Button bsStyle="primary" href="/crypto/reference">
        Cryptocurrencies Symbol Reference
      </Button>
      <CryptoInfor />
    </div>
  )
}

export default crypto
