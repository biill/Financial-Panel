import React from 'react'
import {Button, PageHeader} from 'react-bootstrap'

const currency = props => {
  return (
    <div>
      <PageHeader>
        Currency <small>Subtext for header</small>
      </PageHeader>
      <Button bsStyle="primary" href="/currency/reference">
        Symbol Reference
      </Button>
    </div>
  )
}

export default currency
