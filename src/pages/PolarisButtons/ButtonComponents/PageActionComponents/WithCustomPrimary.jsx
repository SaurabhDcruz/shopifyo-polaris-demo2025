import { Button, PageActions } from '@shopify/polaris'
import React from 'react'

export const WithCustomPrimary = () => {
  return (
    <PageActions
      primaryAction={<Button variant="primary">Save</Button>}
      secondaryActions={[
        {
          content: 'Delete',
          destructive: true,
        },
      ]}
    />
  )
}
