import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CalculatorFC from '../Calculator'
import Layout from '../Layout/Layout'
import Settings from '../Settings'



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
        <Route index element={<CalculatorFC />} />
        <Route path="homecc" element={<CalculatorCCPage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App