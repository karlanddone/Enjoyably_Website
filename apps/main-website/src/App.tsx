import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { YTC } from './pages/YTC';
import { Courses } from './pages/Courses';
import { Work } from './pages/Work';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ytc" element={<YTC />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/work" element={<Work />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

