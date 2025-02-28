import {Card, Text} from '@shopify/polaris';
import React from 'react';

export default function CardDefault() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
    </Card>
  );
}