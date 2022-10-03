import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Settings from '../Settings'

const CalculatorFCPage = () => {
  return (
    <div>CalculatorFC</div>
  )
}

const CalculatorCCPage = () => {
  return (
    <div>CalculatorCC</div>
  )
}

const NotFound = () => {
  return (
    <div>404</div>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CalculatorFCPage />} />
        <Route path="homecc" element={<CalculatorCCPage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App