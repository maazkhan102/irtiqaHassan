import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/listing" element={<Page1 />} />
        <Route path="/residential" element={<Page2 />} />
        <Route path="/project-detail" element={<Page3 />} />
      </Routes>
    </Router>
  )
}

export default App
