import { LegacyCard, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import TwoColumnsGrid from './GridComponents/TwoColumnsGrid'
import TwoThirdAndOneThirdGrid from './GridComponents/TwoThirdAndOneThirdGrid'
import ThreeOneThirdColumnGrid from './GridComponents/ThreeOneThirdColumnGrid'
import CustomLayoutGrid from './GridComponents/CustomLayoutGrid'

const Grid = () => {
  const [selected, setSelected] = useState(0)

  const handleTabChange = useCallback(
    selectedTabIndex => setSelected(selectedTabIndex),
    []
  )
  const tabs = [
    {
      id: '0',
      content: 'Two column',
      panelID: '0',
      children: <TwoColumnsGrid />
    },
    {
      id: '1',
      content: 'Two-thirds and one-third column',
      panelID: '1',
      children: <TwoThirdAndOneThirdGrid/>
    },
    {
      id: '2',
      content: 'Three one-third column',
      panelID: '2',
      children: <ThreeOneThirdColumnGrid />
    },
    {
      id: '3',
      content: 'Custom layout',
      panelID: '3',
      children: <CustomLayoutGrid />
    }
  ]

  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Grid
        </Text>
        <Text tone='subdued' variant='bodyLg' as='p'>
          Use to create a two column layout that wraps at a breakpoint and
          aligns to a twelve column grid.
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

export default Grid
