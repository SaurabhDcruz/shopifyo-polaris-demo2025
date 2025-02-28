import { LegacyCard, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import CardDefault from './CardComponents/CardDefault'
import CardWithSubduedBackground from './CardComponents/CardWithSubduedBackground'
import CardWithVaryingPadding from './CardComponents/CardWithVaryingPadding'
import CardWithResponsiveBorderRadius from './CardComponents/CardWithResponsiveBorderRadius'
import CardWithSection from './CardComponents/CardWithSection'
import CardWithSubduedSection from './CardComponents/CardWithSubduedSection'
import CardWithMultipleSections from './CardComponents/CardWithMultipleSections'
import CardWithMultipleTitledSections from './CardComponents/CardWithMultipleTitledSections'
import CardWithMultipleFooterActions from './CardComponents/CardWithMultipleFooterActions'
import CardWithSubsection from './CardComponents/CardWithSubsection'
import CardWithFlushedSection from './CardComponents/CardWithFlushedSection'
import CardWithSectionsAndActions from './CardComponents/CardWithSectionsAndActions'
import CardWithSectionsAndCriticalAction from './CardComponents/CardWithSectionsAndCriticalAction'
import CardWithSeparateHeader from './CardComponents/CardWithSeparateHeader'
import CardWithHeaderActions from './CardComponents/CardWithHeaderActions'
import CardWithHeaderIconActions from './CardComponents/CardWithHeaderIconActions'
import CardWithFooterActions from './CardComponents/CardWithFooterActions'
import CardWithCustomFooterActions from './CardComponents/CardWithCustomFooterActions'
import CardWithCriticalFooterActions from './CardComponents/CardWithCriticalFooterActions'
import CardWithCustomReactNodeTitle from './CardComponents/CardWithCustomReactNodeTitle'
import CardWithAllElements from './CardComponents/CardWithAllElements'

const Cards = () => {
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
      children: <CardDefault />
    },
    {
      id: '1',
      content: 'With subdued background',
      panelID: '1',
      children: <CardWithSubduedBackground />
    },
    {
      id: '2',
      content: 'With varying padding',
      panelID: '2',
      children: <CardWithVaryingPadding />
    },
    {
      id: '3',
      content: 'With responsive border radius',
      panelID: '3',
      children: <CardWithResponsiveBorderRadius />
    },
    {
      id: '4',
      content: 'With section',
      panelID: '4',
      children: <CardWithSection />
    },
    {
      id: '5',
      content: 'With subdued section',
      panelID: '5',
      children: <CardWithSubduedSection />
    },
    {
      id: '6',
      content: 'With multiple sections',
      panelID: '6',
      children: <CardWithMultipleSections />
    },
    {
      id: '7',
      content: 'With multiple titled sections',
      panelID: '7',
      children: <CardWithMultipleTitledSections />
    },
    {
      id: '8',
      content: 'With subsection',
      panelID: '8',
      children: <CardWithSubsection />
    },
    {
      id: '9',
      content: 'With flushed section',
      panelID: '9',
      children: <CardWithFlushedSection />
    },
    {
      id: '10',
      content: 'With sections and actions',
      panelID: '10',
      children: <CardWithSectionsAndActions />
    },
    {
      id: '11',
      content: 'With sections and critical action',
      panelID: '11',
      children: <CardWithSectionsAndCriticalAction />
    },
    {
      id: '12',
      content: 'With separate header',
      panelID: '12',
      children: <CardWithSeparateHeader />
    },
    {
      id: '13',
      content: 'With header actions',
      panelID: '13',
      children: <CardWithHeaderActions />
    },
    {
      id: '14',
      content: 'With header icon actions',
      panelID: '14',
      children: <CardWithHeaderIconActions />
    },
    {
      id: '15',
      content: 'With footer actions',
      panelID: '15',
      children: <CardWithFooterActions />
    },
    {
      id: '16',
      content: 'With multiple footer actions',
      panelID: '16',
      children: <CardWithMultipleFooterActions />
    },
    {
      id: '17',
      content: 'With custom footer actions',
      panelID: '17',
      children: <CardWithCustomFooterActions />
    },
    {
      id: '18',
      content: 'With critical footer action',
      panelID: '18',
      children: <CardWithCriticalFooterActions />
    },
    {
      id: '19',
      content: 'With custom React Node title',
      panelID: '19',
      children: <CardWithCustomReactNodeTitle />
    },
    {
      id: '20',
      content: 'With all elements',
      panelID: '20',
      children: <CardWithAllElements />
    }
];

  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Card
        </Text>
        <Text tone='subdued' variant='bodyLg' as='p'>
          Cards are used to group similar concepts and tasks together for
          merchants to scan, read, and get things done. It displays content in a
          familiar and recognizable style.
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

export default Cards
