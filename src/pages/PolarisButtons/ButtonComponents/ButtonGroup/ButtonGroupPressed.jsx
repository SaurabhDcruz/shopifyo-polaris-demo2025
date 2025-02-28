import React from 'react'
import { ButtonGroup, Button } from '@shopify/polaris'
import { useCallback, useState } from 'react'

function ButtonGroupPressed () {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  const handleButtonClick = useCallback(
    (index) => {
      if (activeButtonIndex === index) return
      setActiveButtonIndex(index)
    },
    [activeButtonIndex]
  )

  return (
    <ButtonGroup variant='segmented'>
      <Button
        pressed={activeButtonIndex === 0}
        onClick={() => handleButtonClick(0)}
      >
        Bold
      </Button>
      <Button
        pressed={activeButtonIndex === 1}
        onClick={() => handleButtonClick(1)}
      >
        Italic
      </Button>
      <Button
        pressed={activeButtonIndex === 2}
        onClick={() => handleButtonClick(2)}
      >
        Underline
      </Button>
    </ButtonGroup>
  )
}

export default ButtonGroupPressed
