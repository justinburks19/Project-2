// components/Navigation.jsx
import '../styles/Nav.css';


function Nav({ current, onClick}) {
  // Define the pages for navigation
  const PAGES = ['home', 'about', 'contact', 'calculator', 'movies', 'weather']; 
  // Handle click events to change pages
  const handleClick = (page) => {
    onClick(page);
  };
  
    return (
      // Simple navigation component
      <div className="nav-wrapper">
      <nav className="container d-flex justify-content-center">
        <ul className="list-unstyled d-flex justify-content-center"> 
          {/* Render navigation links */}
          {PAGES.map((page) => (
            <li key={page} className="btn-cell "> 
              <a href={`#${page}`} 
              className={`btn btn-lg btn-primary m-4 animation ${current === page ? 'active' : ''}`} 
                style={{ color: current === page ? 'yellow' : 'white', textDecoration: 'none' }}
                // Handle click events to change pages
                onClick={(e) => {handleClick(page); e.preventDefault();}}
                // Highlight the current page for screen readers
                aria-current={current === page ? 'page' : undefined}
                >{page.charAt(0).toUpperCase() + page.slice(1)}</a>
            </li>
            
          ))}
        </ul>
      </nav>
    </div>
    
    );
}
export default Nav;