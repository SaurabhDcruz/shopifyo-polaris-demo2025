import React from 'react'

import { Link, AccountConnection, Text } from '@shopify/polaris'
import { useState, useCallback } from 'react'
const Actions = () => {
  const [connected, setConnected] = useState(false)
  const accountName = connected ? 'Jane Appleseed' : ''

  const handleAction = useCallback(() => {
    setConnected(connected => !connected)
  }, [])

  const buttonText = connected ? 'Disconnect' : 'Connect'
  const details = connected ? 'Account connected' : 'No account connected'
  const terms = connected ? null : (
    <p>
      By clicking <strong>Connect</strong>, you agree to accept Sample App’s{' '}
      <Link url='Example App'>terms and conditions</Link>. You’ll pay a
      commission rate of 15% on sales made through Sample App.
    </p>
  )

  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Account connection
        </Text>
        <Text tone="subdued" variant='bodyLg' as='p'>
          The account connection component is used so merchants can connect or
          disconnect their store to various accounts. For example, if merchants
          want to use the Facebook sales channel, they need to connect their
          Facebook account to their Shopify store. Account connection component
          examples Default
        </Text>
      </div>
      <AccountConnection
        accountName={accountName}
        connected={connected}
        title='Example App'
        action={{
          content: buttonText,
          onAction: handleAction
        }}
        details={details}
        termsOfService={terms}
      />
    </>
  )
}

export default Actions
