import { Navigation, Frame } from '@shopify/polaris'
import React, { useState, useCallback, useEffect } from 'react'
import {
  HomeIcon,
  OrderIcon,
  TargetIcon,
  ProductIcon
} from '@shopify/polaris-icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'

function LayoutStructure () {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [activeSettingsPage, setActiveSettingsPage] = useState('')
  const tabs = [
    'home',
    'action',
    'button',
    'btngrp',
    'dynamic-pricing',
    'building-blocks',
    'shopify-discount-codes',
    'checkout-options',
    'assets',
    'integrations'
  ]

  const location = useLocation()
  const navigate = useNavigate()

  const toggleIsNavigationOpen = useCallback(() => {
    setIsNavigationOpen(isNavigationOpen => !isNavigationOpen)
  }, [])

  const handleNavItemClick = useCallback(
    (tabTitle, path) => {
      if (path) {
        navigate(path)
      }
    },
    [navigate]
  )
  useEffect(() => {
    const active = tabs.find(el => location.pathname.includes(el))
    setActiveSettingsPage(active || '')
  }, [location.pathname])

  const topBarMarkup = (
    <Topbar showNavigationToggle onNavigationToggle={toggleIsNavigationOpen} />
  )

  const navigationMarkup = (
    <Navigation location='/'>
      <Navigation.Section
        items={[
          {
            label: 'Home',
            icon: HomeIcon,
            onClick: () => handleNavItemClick('home', 'home'),
            selected: activeSettingsPage === 'home'
          },
          {
            url:'/',
            label: 'Actions',
            icon: OrderIcon,
            onClick: () => handleNavItemClick('action', 'action'),
            badge: '15',
            selected: activeSettingsPage === 'action',
            subNavigationItems: [
              {
                url: '/',
                disabled: false,
                matches:activeSettingsPage === 'button',
                label: 'Button',
                onClick: () => handleNavItemClick('button', 'button'),
              },
              {
                url: '/',
                disabled: false,
                matches:activeSettingsPage === 'btngrp',
                label: 'Button Groups',
                onClick: () => handleNavItemClick('btngrp', 'btngrp'),
              }
            ]
          },
          {
            url: '#',
            excludePaths: ['#'],
            label: 'Marketing',
            icon: TargetIcon,
            badge: '15',
            subNavigationItems: [
              {
                url: '#',
                excludePaths: ['#'],
                disabled: false,
                label: 'Reports'
              },
              {
                url: '#',
                excludePaths: ['#'],
                disabled: false,
                label: 'Live view'
              }
            ]
          },
          {
            url: '#',
            label: 'Products',
            icon: ProductIcon,
            selected: true,
            subNavigationItems: [
              {
                url: '#',
                excludePaths: ['#'],
                disabled: false,
                label: 'Collections'
              },
              {
                url: '#',
                disabled: false,
                label: 'btngrp'
              }
            ]
          }
        ]}
      />
    </Navigation>
  )

  const logo = {
    topBarSource:
      'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
    width: 86,
    accessibilityLabel: 'Shopify'
  }

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={isNavigationOpen}
      onNavigationDismiss={toggleIsNavigationOpen}
      logo={logo}
    >
      <Outlet />
    </Frame>
  )
}

export default LayoutStructure
