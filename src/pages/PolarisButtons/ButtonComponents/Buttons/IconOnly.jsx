import React from 'react'
import { Button } from '@shopify/polaris'
import { PlusIcon } from '@shopify/polaris-icons'

export default function IconOnly () {
  return <Button icon={PlusIcon} accessibilityLabel="Add theme" />
}
