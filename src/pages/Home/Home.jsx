import { FooterHelp, Layout, LegacyCard, Link, Page } from '@shopify/polaris'
import React from 'react'

const Home = () => {
  const footerMarkup = (
    <FooterHelp>
      Learn more about{' '}
      <Link url='https://polaris.shopify.com'>Shopify Polaris</Link>.
    </FooterHelp>
  )
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <LegacyCard title='Online store dashboard' sectioned>
            <p>View a summary of your online store’s performance.</p>
          </LegacyCard>
        </Layout.Section>
      </Layout>
      {footerMarkup}
    </Page>
  )
}

export default Home
