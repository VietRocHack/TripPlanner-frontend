import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import PlanScreen from './pages/PlanScreen/PlanScreen'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService/TermsOfService'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/plan" element={<PlanScreen />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsOfService />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
