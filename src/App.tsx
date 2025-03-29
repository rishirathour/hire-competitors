
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CompleteSignup from './pages/CompleteSignup';
import VerifyOTP from './pages/VerifyOTP';
import NotFound from './pages/NotFound';
import HowItWorksPage from './pages/HowItWorks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete-signup" element={<CompleteSignup />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
