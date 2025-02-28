import { Button, PageActions } from '@shopify/polaris'
import React from 'react'

const WithCustomSecondary = () => {
  return (
    <PageActions
      primaryAction={{
        content: 'Save',
      }}
      secondaryActions={<Button>Save</Button>}
    />
  )
}

export default WithCustomSecondary