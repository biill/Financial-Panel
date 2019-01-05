import React from 'react'
import {Button, PageHeader} from 'react-bootstrap'

import CurrencyPage from './currency'

const currency = props => {
  return (
    <div>
      <PageHeader>
        Currency <small>Search for Exchange Rate</small>
      </PageHeader>
      <Button bsStyle="primary" href="/currency/reference">
        Symbol Reference
      </Button>
      <CurrencyPage />
    </div>
  )
}

export default currency
