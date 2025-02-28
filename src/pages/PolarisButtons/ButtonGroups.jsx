import { Text } from '@shopify/polaris'
import React from 'react'

const ButtonGroups = () => {
  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Account connection
        </Text>
        <Text tone='subdued' variant='bodyLg' as='p'>
          The account connection component is used so merchants can connect or
          disconnect their store to various accounts. For example, if merchants
          want to use the Facebook sales channel, they need to connect their
          Facebook account to their Shopify store. Account connection component
          examples Default
        </Text>
      </div>
    </>
  )
}

export default ButtonGroups
