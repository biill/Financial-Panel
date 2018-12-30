import React from 'react'
import {Button, PageHeader} from 'react-bootstrap'

const crypto = props => {
  return (
    <div>
      <PageHeader>
        Crypto Currency <small>Subtext for header</small>
      </PageHeader>
      <Button bsStyle="primary" href="/crypto/reference">
        Symbol Reference
      </Button>
    </div>
  )
}

export default crypto
