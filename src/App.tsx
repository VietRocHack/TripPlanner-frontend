import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import PlanScreen from './pages/PlanScreen/PlanScreen'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/plan" element={<PlanScreen />} />
      </Routes>
    </Router>
  )
}

export default App
