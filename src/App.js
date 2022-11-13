import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about/AboutPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Services from './pages/service/Services';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
