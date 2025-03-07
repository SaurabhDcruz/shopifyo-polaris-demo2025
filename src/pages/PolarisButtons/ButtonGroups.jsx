import { LegacyCard, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import ButtonGroupDefaultExample from './ButtonComponents/ButtonGroup/ButtonGroupDefaultExample'
import ButtonGroupSegmented from './ButtonComponents/ButtonGroup/ButtonGroupSegmented'
import ButtonGroupPressed from './ButtonComponents/ButtonGroup/ButtonGroupPressed'

const ButtonGroups = () => {
  const [selected, setSelected] = useState(0)

  const handleTabChange = useCallback(
    selectedTabIndex => setSelected(selectedTabIndex),
    []
  )

  const tabs = [
    {
      id: '0',
      content: 'Default',
      panelID: '0',
      children: <ButtonGroupDefaultExample />
    },
    {
      id: '1',
      content: 'With segmented buttons',
      panelID: '1',
      children: <ButtonGroupSegmented />
    },
    {
      id: '2',
      content: 'Pressed with segmented buttons',
      panelID: '2',
      children: <ButtonGroupPressed />
    },
  ]
  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Button group
        </Text>
        <Text tone='subdued' variant='bodyLg' as='p'>
          Button group displays multiple related actions stacked or in a
          horizontal row to help with arrangement and spacing.
        </Text>
      </div>

      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <LegacyCard.Section title={tabs[selected].content}>
          <div>{tabs[selected].children}</div>
        </LegacyCard.Section>
      </Tabs>
    </>
  )
}

export default ButtonGroups
