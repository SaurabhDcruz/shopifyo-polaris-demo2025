import {Card, Text} from '@shopify/polaris';
import React from 'react';

export default function CardWithResponsiveBorderRadius() {
  return (
    <Card roundedAbove="md" background="bg-surface-secondary">
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
    </Card>
  );
}