
import Nav from './components/Navigation.jsx'
import {Home} from './components/Home.jsx'
import {About} from './components/About.jsx'
import {Weather} from './components/Weather.jsx'
import {Movies} from './components/Movies.jsx'
import {Calculator} from './components/Calculator.jsx'
import {Contact} from './components/Contact.jsx'
import { useState} from 'react'
import { ApiProvider} from './Context/ApiProvider.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';

 const PAGES = ({home: <Home />, about: <About />, calculator: <Calculator />, weather: <Weather />, movies: <Movies />, contact: <Contact />});
export default function App() {
  const [page, setPage] = useState('home'); // State to track the current page
  // Render the main content with navigation and current page
  return <MainContent page={page} setPage={setPage} PAGES={PAGES} />;
}
// Main content component to render navigation and current page
function MainContent({ page, setPage, PAGES }) {
  const currentPage = PAGES[page] || <h1>Page Not Found</h1>;
  return (
    <div>
      <div className="App container">
        <Nav current={page} onClick={setPage} className="navigation" />
        {currentPage}
      </div>
    </div>
  );
}

