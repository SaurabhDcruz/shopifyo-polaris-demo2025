import { Button } from '@shopify/polaris'
import React from 'react'

const TextAlignedButton = () => {
  return (
    <Button variant='plain' textAlign='left'>
      This is a really long string of text that overflows onto the next line we
      need to put in a lot of words now you can see the alignment. It is very
      long but a customer could potentially name something this long.
    </Button>
  )
}

export default TextAlignedButton
