import { PageActions } from '@shopify/polaris'
import React from 'react'

export const DefaultPageAction = () => {
  return (
    <PageActions
    primaryAction={{
      content: 'Save',
    }}
    secondaryActions={[
      {
        content: 'Delete',
        destructive: true,
      },
    ]}
  />
  )
}
