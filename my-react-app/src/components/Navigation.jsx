// components/Navigation.jsx
import '../styles/Nav.css';
import '../styles/Home.css'
import { useState } from 'react';
import { motion } from "framer-motion";

function Nav({ current, onClick}) {
  // Define the pages for navigation
  const PAGES = ['home', 'about', 'contact', 'calculator', 'movies', 'weather']; 
  const [button, showButton] = useState(true);
  // Handle click events to change pages
  const handleClick = (page) => {
    onClick(page);
  };
  const daysToComplete = () => {
    // lets have a date
    const date = new Date();
    // set a future date
    const endDate = new Date('2025-10-17');
    // calculate the difference in days
    const diffTime = Math.abs(endDate - date);
    //math.ceil works by rounding up to the nearest whole number
    //1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) {
      return "Project Due!";
  }
  return diffDays;
};
  
  const handleButton = () => {
  showButton(false);
  }
    return (
      // Simple navigation component
      <div className="nav-wrapper">
        <div className='row'>
      <h1 className='col-3' style={{fontSize:'clamp(.5rem, 1rem, 2rem)'}}>Days to complete:
         <span className='rainbow' style={{fontSize:'clamp(1rem, 1.5rem, 2rem)'}}>{daysToComplete()}</span></h1>

      </div>
      {button && (
        <>
          <h1 className='col-12 text-center'> Welcome to <span style={{textDecoration: 'underline'}}>Project 2</span> <span className='text-danger' onClick={() => alert("Hello Professor!")} style={{ cursor: 'pointer' }}>Professor</span></h1>
          <p className='bigger text-center'> Feel free to check out my page and all the tabs below!</p>
          <div className='d-flex justify-content-center'>
            {/* lets have a button to acknowledge the professor and to close above!*/}
            <button className='btn btn-danger' onClick={handleButton}>Acknowledge</button>
          </div>
        </>
      )}

      <monav className="container d-flex justify-content-center">
        <motion.ul className="list-unstyled d-flex justify-content-center">
          <p> 
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