import { FormLayout, TextField } from '@shopify/polaris'
import React from 'react'

export default function FieldGroup () {
  return (
    <FormLayout>
      <FormLayout.Group>
        <TextField
          type='number'
          label='Minimum order'
          onChange={() => {}}
          autoComplete='off'
        />
        <TextField
          type='number'
          label='Maximum order'
          onChange={() => {}}
          autoComplete='off'
        />
      </FormLayout.Group>
    </FormLayout>
  )
}
