import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import CustomizerPage from './pages/CustomizerPage';
import TutorialsPage from './pages/TutorialsPage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cream">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/customizer" element={<CustomizerPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;