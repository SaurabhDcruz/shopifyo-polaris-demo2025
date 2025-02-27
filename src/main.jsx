import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import enTranslations from '@shopify/polaris/locales/en.json'
import { AppProvider, Page } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import LayoutStructure from './components/layout/LayoutStructure.jsx'
import Actions from './pages/Actions/Actions.jsx'
// import Dashboard from './Dashboard.jsx'
// import RecentActivity from './RecentActivity.jsx'
// import Project from './Project.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <AppProvider i18n={enTranslations}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutStructure />} >
          <Route index path="/home" element={<Home />}/>
          <Route path='/action'  element={<Actions />} />
          {/* <Route path="project/:id" element={<Project />} /> */}
        </Route> 
      </Routes>
    </BrowserRouter>
  </AppProvider>
)
