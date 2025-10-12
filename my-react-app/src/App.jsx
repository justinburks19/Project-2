
import Nav from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Weather from './components/Weather.jsx'
import Movies from './components/Movies.jsx'
import Calculator from './components/Calculator.jsx'
import Contact from './components/Contact.jsx'

import { useState} from 'react'

function App() {
  // State to track the current page
  const [page, setPage] = useState('home');

  // Mapping of page names to components
  const PAGES = {
    home: <Home />,
    about: <About />,
    calculator: <Calculator />,
    weather: <Weather />,
    movies: <Movies />,
    contact: <Contact />
  }

  return (
    <>
      <div className="App container">
        <Nav current={page} onClick={setPage} className="navigation" />
        {/* Render the current page component or not found*/}
        {PAGES[page] || <h1>Page Not Found</h1>}

      </div>

    </>
  )
}

export default App