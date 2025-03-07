
import {FormLayout, TextField} from '@shopify/polaris';
import React from 'react';

export default function CondensedFieldGroup() {
  return (
    <FormLayout>
      <FormLayout.Group condensed>
        <TextField label="Length" onChange={() => {}} autoComplete="off" />
        <TextField label="Width" onChange={() => {}} autoComplete="off" />
        <TextField label="Height" onChange={() => {}} autoComplete="off" />
        <TextField label="Unit" onChange={() => {}} autoComplete="off" />
      </FormLayout.Group>
    </FormLayout>
  );
}