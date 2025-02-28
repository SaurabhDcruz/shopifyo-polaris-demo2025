import { Button } from '@shopify/polaris'
import React, { useState } from 'react'

const PlaneDisclouser = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <Button
      variant='plain'
      disclosure={expanded ? 'up' : 'down'}
      onClick={() => {
        setExpanded(!expanded)
      }}
    >
      {expanded ? 'Show less' : 'Show more'}
    </Button>
  )
}

export default PlaneDisclouser
