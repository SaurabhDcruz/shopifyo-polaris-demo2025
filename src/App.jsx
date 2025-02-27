import { useState } from 'react'
import './App.css'
import LayoutStructure from './components/layout/LayoutStructure'
import { Outlet } from 'react-router-dom'

function App () {

  return (
    <>
    <LayoutStructure />
    <Outlet/>
    </>
  )
}

export default App
