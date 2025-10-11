
import Nav from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

import { useState} from 'react'

function App() {
  // State to track the current page
  const [page, setPage] = useState(null);


  return (
    <>
      <div>
        <Nav current={page} onChange={setPage} />
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
      </div>

    </>
  )
}

export default App