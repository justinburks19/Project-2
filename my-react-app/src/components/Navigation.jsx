// components/Navigation.jsx
import '../styles/Nav.css';

export default function Nav({ current, onClick }) {
  // Define the pages for navigation
  const PAGES = ['home', 'about', 'contact', 'calculator', 'movies', 'weather'];
  // Handle click events to change pages
  const handleClick = (page) => {
    onClick(page);
  };
  
    return (
      // Simple navigation component
      <nav>
        <ul className="navigation list-unstyled" > 
          {/* Render navigation links */}
          {PAGES.map((page) => (
            <li key={page} className={`btn btn-primary m-1 animation`} >
              <a href={`#${page}`} 
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
    )
}
