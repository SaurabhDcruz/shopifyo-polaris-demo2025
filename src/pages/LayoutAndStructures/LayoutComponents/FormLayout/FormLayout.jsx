import { LegacyCard, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import DefaultFormLayout from './FormLayoutComponents/DefaultFormLayout'
import FieldGroup from './FormLayoutComponents/FieldGroup'
import CondensedFieldGroup from './FormLayoutComponents/CondensedFieldGroup'

const FormLayout = () => {
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
      children: <DefaultFormLayout />
    },
    {
      id: '1',
      content: 'Field group',
      panelID: '1',
      children: <FieldGroup />
    },
    {
      id: '2',
      content: 'Condensed field group',
      panelID: '2',
      children: <CondensedFieldGroup />
    }
  ]

  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Text variant='headingXl' as='h2'>
          Form layout
        </Text>
        <Text tone='subdued' variant='bodyLg' as='p'>
          Use form layout to arrange fields within a form using standard
          spacing. By default it stacks fields vertically but also supports
          horizontal groups of fields.
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

export default FormLayout
