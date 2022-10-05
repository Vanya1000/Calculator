import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CalculatorFC from '../Calculator'
import CalculatorCC from '../CalculatorCC'
import Layout from '../Layout/Layout'
import Settings from '../Settings'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CalculatorFC />} />
        <Route path="homecc" element={<CalculatorCC />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  )
}

export default App