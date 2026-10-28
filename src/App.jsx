import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Research from './pages/Research.jsx';
import Teaching from './pages/Teaching.jsx';
import ContentDetail from './pages/ContentDetail.jsx';
import Guide from './pages/Guide.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <Header />
      <main id="main" className="container" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ContentDetail type="research" />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/teaching/:slug" element={<ContentDetail type="teaching" />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
