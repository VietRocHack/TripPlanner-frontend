import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import PlanScreen from './pages/PlanScreen/PlanScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/plan" element={<PlanScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
