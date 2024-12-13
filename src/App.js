import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importazione delle pagine
import Feed from './pages/Feed';
import Contesti from './pages/Contesti';
import Attori from './pages/Attori';
import Articoli from './pages/Articoli';
import Video from './pages/Video';
import Podcast from './pages/Podcast';
import Infografiche from './pages/Infografiche';
import Formazione from './pages/Formazione';
import ChiSiamo from './pages/ChiSiamo';
import FAQ from './pages/FAQ';
import Risorse from './pages/Risorse';
import Contattaci from './pages/Contattaci';
import Sostienici from './pages/Sostienici';
import Profilo from './pages/Profilo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/contesti" element={<Contesti />} />
          <Route path="/attori" element={<Attori />} />
          <Route path="/articoli" element={<Articoli />} />
          <Route path="/video" element={<Video />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/infografiche" element={<Infografiche />} />
          <Route path="/formazione" element={<Formazione />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/risorse" element={<Risorse />} />
          <Route path="/contattaci" element={<Contattaci />} />
          <Route path="/sostienici" element={<Sostienici />} />
          <Route path="/profilo" element={<Profilo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
