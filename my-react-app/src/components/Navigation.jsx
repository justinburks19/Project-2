// components/Navigation.jsx
export default function Nav({ current, onClick }) {
  // Define the pages for navigation
  const PAGES = ['home', 'about', 'contact', 'calculator', 'recipes', 'weather'];
    return (
      // Simple navigation component
      <nav>
        <ul className="navigation list-unstyled" > 
          {/* Render navigation links */}
          {PAGES.map((page) => (
            <li key={page} className="navigation-item">
              <a href={`#${page}`} 
                style={{textDecoration: 'none'}}
                // Handle click events to change pages 
                onClick={(e) => {onClick(page); e.preventDefault();}}
                // Highlight the current page for screen readers
                aria-current={current === page ? 'page' : undefined}
                >{page.charAt(0).toUpperCase() + page.slice(1)}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
}
