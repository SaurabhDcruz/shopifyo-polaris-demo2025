import { LegacyCard, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { DefaultPageAction } from './ButtonComponents/PageActionComponents/DefaultPageAction'
import { PrimaryActionOnly } from './ButtonComponents/PageActionComponents/PrimaryActionOnly'
import { WithCustomPrimary } from './ButtonComponents/PageActionComponents/WithCustomPrimary'
import WithCustomSecondary from './ButtonComponents/PageActionComponents/WithCustomSecondary'

const PageAction = () => {
  const [selected, setSelected] = useState(0)

  const handleTabChange = useCallback(
    selectedTabIndex => setSelected(selectedTabIndex),
    []
  )

  const tabs = [
    {
      id: '0',
      content: 'Default',
      accessibilityLabel: 'Default',
      panelID: '0',
      children: <DefaultPageAction />
    },
    {
      id: '1',
      content: 'Primary Action Only',
      panelID: '1',
      children: <PrimaryActionOnly />
    },
    {
      id: '2',
      content: 'With Custom Primary Action',
      panelID: '2',
      children: <WithCustomPrimary />
    },
    {
      id: '3',
      content: 'With Custom Secondary Action',
      panelID: '3',
      children: <WithCustomSecondary />
    }
  ]
  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Page actions
        </Text>
        <Text tone='subdued' variant='bodyLg' as='p'>
          Page actions let merchants take key actions at the bottom of specific
          pages in the interface. This is important because sometimes the
          primary call to action is hard to access when merchants are at the
          bottom of a page.
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

export default PageAction
