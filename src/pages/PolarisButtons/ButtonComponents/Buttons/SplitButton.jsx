import {
  ActionList,
  InlineStack,
  Button,
  ButtonGroup,
  Popover
} from '@shopify/polaris'
import React, { useState } from 'react'
import { ChevronDownIcon } from '@shopify/polaris-icons'

export default function SplitButton () {
  const [active, setActive] = useState(null)

  const toggleActive = id => () => {
    setActive(activeId => (activeId !== id ? id : null))
  }
  return (
    <div style={{ height: '100px' }}>
      <InlineStack gap='500'>
        <ButtonGroup variant='segmented'>
          <Button variant='primary'>Save</Button>

          <Popover
            active={active === 'popover1'}
            preferredAlignment='right'
            activator={
              <Button
                variant='primary'
                onClick={toggleActive('popover1')}
                icon={ChevronDownIcon}
                accessibilityLabel='Other save actions'
              />
            }
            autofocusTarget='first-node'
            onClose={toggleActive('popover1')}
          >
            <ActionList
              actionRole='menuitem'
              items={[{ content: 'Save as draft' }]}
            />
          </Popover>
        </ButtonGroup>

        <ButtonGroup variant='segmented'>
          <Button>Save</Button>

          <Popover
            active={active === 'popover2'}
            preferredAlignment='right'
            activator={
              <Button
                onClick={toggleActive('popover2')}
                icon={ChevronDownIcon}
                accessibilityLabel='Other save actions'
              />
            }
            autofocusTarget='first-node'
            onClose={toggleActive('popover2')}
          >
            <ActionList
              actionRole='menuitem'
              items={[{ content: 'Save as draft' }]}
            />
          </Popover>
        </ButtonGroup>
      </InlineStack>
    </div>
  )
}
