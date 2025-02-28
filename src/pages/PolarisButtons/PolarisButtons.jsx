import React from 'react'
import { LegacyCard, Tabs, Text } from '@shopify/polaris'
import { useState, useCallback } from 'react'
import DefaultButton from './ButtonComponents/DefaultButton'
import PlaneButton from './ButtonComponents/PlaneButton'
import { TeritiaryButton } from './ButtonComponents/TeritiaryButton'
import PlaneCriticalButton from './ButtonComponents/PlaneCriticalButton'
import PrimaryButton from './ButtonComponents/PrimaryButton'
import PrimaryCriticalButton from './ButtonComponents/PrimaryCriticalButton'
import LargeButton from './ButtonComponents/LargeButton'
import FullwidthButton from './ButtonComponents/FullwidthButton'
import TextAlignedButton from './ButtonComponents/TextAlignedButton'
import PressedButton from './ButtonComponents/PressedButton'
import PlaneDisclouser from './ButtonComponents/PlaneDisclouser'
import RightAlignedDisclosureButton from './ButtonComponents/RightAlignedDisclosureButton'
import SelectDisclosureButton from './ButtonComponents/SelectDisclosureButton'
import SplitButton from './ButtonComponents/SplitButton'
import DisabledStateButtons from './ButtonComponents/DisabledStateButtons'
import LoadingStateBtn from './ButtonComponents/LoadingStateBtn'
import IconButton from './ButtonComponents/IconButton'
import IconOnly from './ButtonComponents/IconOnly'
const PolarisButtons = () => {
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
      children: <DefaultButton />
    },
    {
      id: '1',
      content: 'Plane',
      panelID: '1',
      children: <PlaneButton />
    },
    {
      id: '2',
      content: 'Tertiary',
      panelID: '2',
      children: <TeritiaryButton />
    },
    {
      id: '3',
      content: 'Plane Critical',
      panelID: '3',
      children: <PlaneCriticalButton />
    },
    {
      id: '4',
      content: 'Primary',
      panelID: '4',
      children: <PrimaryButton />
    },
    {
      id: '5',
      content: 'Primary Critical',
      panelID: '5',
      children: <PrimaryCriticalButton />
    },
    {
      id: '6',
      content: 'Large',
      panelID: '6',
      children: <LargeButton />
    },
    {
      id: '7',
      content: 'Full Width',
      panelID: '7',
      children: <FullwidthButton />
    },
    {
      id: '8',
      content: 'Text Aligned',
      panelID: '8',
      children: <TextAlignedButton />
    },
    {
      id: '9',
      content: 'Pressed',
      panelID: '9',
      children: <PressedButton />
    },
    {
      id: '10',
      content: 'Plain Disclosure',
      panelID: '10',
      children: <PlaneDisclouser />
    },
    {
      id: '11',
      content: 'Right Aligned Disclosure',
      panelID: '11',
      children: <RightAlignedDisclosureButton />
    },
    {
      id: '12',
      content: 'Select Disclosure',
      panelID: '12',
      children: <SelectDisclosureButton />
    },
    {
      id: '13',
      content: 'Split',
      panelID: '13',
      children: <SplitButton />
    },
    {
      id: '14',
      content: 'Disabled State',
      panelID: '14',
      children: <DisabledStateButtons />
    },
    {
      id: '15',
      content: 'Loading State',
      panelID: '15',
      children: <LoadingStateBtn />
    },
    {
      id: '16',
      content: 'With Icon',
      panelID: '16',
      children: <IconButton />
    },
    {
      id: '17',
      content: 'Icon Only',
      panelID: '17',
      children: <IconOnly />
    }
  ]
  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Button
        </Text>
        <Text tone='subdued' variant='bodyLg' as='p'>
          Buttons are used primarily for actions, such as “Add”, “Close”,
          “Cancel”, or “Save”. Plain buttons, which look similar to links, are
          used for less important or less commonly used actions, such as “view
          shipping settings”.
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

export default PolarisButtons
