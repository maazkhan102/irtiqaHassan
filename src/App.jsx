import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageOneSectionOne from './components/page one/sectionOne';
import PageOneSectionTwo from './components/page one/sectionTwo';
import PageOneSectionThree from './components/page one/sectionThree';
import PageOneSectionFour from './components/page one/sectionFour';
import PageTwoSectionOne from './components/page two/sectionOne';
import PageTwoSectionTwo from './components/page two/Slider';
import PageTwoSectionThree from './components/page two/sectionThree';
import PageThreeSectionOne from './components/page three/sectionOne';
import Page1 from './pages/page1';
import Page3 from './pages/page3';
import Page2 from './pages/page2';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page9 from './pages/page9';
import Page10 from './pages/page10';
import Page2p2 from './pages/page2p2';
import Page11 from './pages/page11';
import Page12 from './pages/page12';
import Page13 from './pages/page13';
import Page14 from './pages/page14';



function App() {


  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/listing" element={<Page1 />} />
        <Route path="/residential" element={<Page2 />} />
        <Route path="/commercial" element={<Page2p2 />} />
        <Route path="/architectural" element={<Page9 />} />
        <Route path="/furniture" element={<Page10 />} />

        {/* Residential childs */}
        <Route path="/residential/modern-luxury" element={<Page3 />} />
        <Route path="/residential/contemporary" element={<Page6 />} />
        <Route path="/residential/japandi" element={<Page7 />} />
        <Route path="/residential/parisian" element={<Page8 />} />

        {/* Commercial childs */}
        <Route path="/commercial/showroom" element={<Page4 />} />
        <Route path="/commercial/salon" element={<Page5 />} />
        <Route path="/commercial/gym" element={<Page11 />} />
        <Route path="/commercial/corporate" element={<Page12 />} />
        <Route path="/commercial/hospitality" element={<Page13 />} />
        <Route path="/commercial/retail" element={<Page14 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
