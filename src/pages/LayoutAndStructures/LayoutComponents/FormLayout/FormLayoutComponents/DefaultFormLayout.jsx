import {FormLayout, TextField} from '@shopify/polaris';
import React from 'react';

export default function DefaultFormLayout() {
  return (
    <FormLayout>
      <TextField label="Store name" onChange={() => {}} autoComplete="off" />
      <TextField
        type="email"
        label="Account email"
        onChange={() => {}}
        autoComplete="email"
      />
    </FormLayout>
  );
}