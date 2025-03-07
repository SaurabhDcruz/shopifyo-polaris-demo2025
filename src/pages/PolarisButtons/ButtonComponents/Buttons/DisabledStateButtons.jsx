import { ButtonGroup, Button } from '@shopify/polaris'
import React from 'react'

export default function DisabledStateButtons () {
  return (
    <ButtonGroup>
      <Button disabled>Buy shipping label</Button>
      <Button variant='primary' disabled>
        Buy shipping label
      </Button>
      <Button tone='critical' disabled>
        Buy shipping label
      </Button>
      <span style={{ color: '#bf0711' }}>
        <Button variant='monochromePlain' disabled>
          Buy shipping label
        </Button>
      </span>
      <Button variant='plain' disabled>
        Buy shipping label
      </Button>
      <Button variant='plain' tone='critical' disabled>
        Buy shipping label
      </Button>
    </ButtonGroup>
  )
}
