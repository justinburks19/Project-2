// components/Navigation.jsx
import '../styles/Nav.css';
import '../styles/Home.css'
import '../styles/Navigation.css'
import { useState} from 'react';
import { motion } from "framer-motion";
import { useSize } from '../helpers/size.jsx';
import { Prism } from '../backgrounds/Prism.jsx';

function Nav({ current, onClick}) {
  // Define the pages for navigation
  const PAGES = ['home', 'about', 'contact', 'calculator', 'movies', 'weather']; 
  const [button, showButton] = useState(true);
  //for size hooks
  //each call to useSize returns an object with containerRef, itemRef, and maxX
  //we can use these refs to attach to our elements and maxX for animation
  //days to complete
  const a = useSize();
  //welcome message
  const b = useSize();
  //buttons
  const c = useSize();
  //bottomline
  const d = useSize();
  // Handle click events to change pages
  const handleClick = (page) => {
    onClick(page);
  };
  const daysToComplete = () => {
    // lets have a date
    const nowDate = new Date();
    // set a future date
    const endDate = new Date('2025-10-19');
    endDate.setHours(23,60,60,1000); // set to end of day
    // calculate the difference in days
    const diffTime = endDate - nowDate;
    //math.ceil works by rounding up to the nearest whole number
    //1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day 
    if (diffTime <= 0) {
      return "Its due!";
    } else {
      return `${Math.ceil(diffTime / (1000 * 60 * 60 * 24))} days`;
    }

};
  const thumbControl = (value) => {
    const icons= [];
    for (let i = 0; i < value; i++) {
      icons.push(<motion.i 
        initial={{y: 0}}
        animate={{y: [0, 20, 0]}}
        transition={{duration: 3, repeat: Infinity, repeatType: "reverse", delay: .5*i}}
        className="bi bi-hand-thumbs-down-fill p-3 pb-0 d-flex justify-content-center m-0 text-info"
        style={{ fontSize: 'clamp(1rem, 1.5rem, 2rem)' }}
        key={i}></motion.i>);
    }
    return icons;
  }

  const handleButton = () => {
  showButton(false);
  }
    return (
      // Simple navigation component
      <div className="prism-container bg-black justify-content-center">
        <div style={{ width: '100%', height: 'clamp(2rem, 20rem, 40rem)', position: 'absolute' }}>
  <Prism
    animationType="rotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={1.6}
    hueShift={0}
    colorFrequency={1}
    noise={0.01}
    glow={1}
  />
</div>
      <div className="row d-flex flex-wrap overflow-hidden">
      <h1 ref={a.containerRef} className='col-10' style={{fontSize:'clamp(.5rem, 1rem, 2rem)'} }>Days to complete:

        <motion.span ref ={a.itemRef} style={{fontSize:'clamp(1rem, 1.5rem, 2rem)', fontFamily: 'fantasy', display: 'inline-block', whiteSpace: 'nowrap'}}
          initial={{ x: 0}}
          animate={{ x: [0, a.maxX] }}
          transition={{duration: 3, ease: "easeOut", repeat: Infinity, repeatType: "reverse"}} >
            {`${daysToComplete()}`}
          </motion.span>

      </h1>
      {/* Welcome message with animation */}
      {button && (
        <motion.div
          ref={b.containerRef}
          initial={{ x: 0, y: 10 }}
          animate={{ x: [-10, b.maxX], y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >

          <h1 className='col-7 d-flex flex-wrap justify-content-center mx-auto text-center'> Welcome to <span style={{textDecoration: 'underline'}}>-Project 2-</span> <span className='text-danger' onClick={() => alert("Hello Professor!")} style={{ cursor: 'pointer' }}>Professor</span>
          </h1>

          <div ref={b.itemRef} className='d-flex justify-content-center'>

            {/* lets have a button to acknowledge the professor and to close above!*/}
            <button className='btn btn-danger' onClick={handleButton}>Acknowledge</button>
          </div>
        </motion.div>
      )}

      {/* thumbs control! */}
          <p className='d-flex justify-content-center pb-1'>{thumbControl(5)}</p>

      {/* Render navigation links */}
      <nav className="container d-flex justify-content-center ">
        <ul className="list-unstyled d-flex flex-wrap justify-content-center">
          {PAGES.map((page) => (
            /* Motion list item for animation */
            <motion.li 
              style={{border: '2px solid black', borderRadius: '10px'}}
              ref={c.containerRef} key={page} 
              className="btn-cell p-0 m-2 onHover"
              initial={{ rotate: 0 }}
              animate={{ rotate: [1, 1, -10, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: page.length * 0.8 }}
              >
              {/* Navigation link with active state styling */}
              <a ref={c.itemRef} href={`#${page}` }
                className={`btn btn-lg btn-primary m-0 ${current === page ? 'active' : ''}`}
                style={{ color: current === page ? 'yellow' : 'white', textDecoration: 'none', cursor: `help` }}
                // Handle click events to change pages
                onClick={(e) => {handleClick(page); e.preventDefault();}}
                // Highlight the current page for screen readers
                aria-current={current === page ? 'page' : undefined}
                >{page.charAt(0).toUpperCase() + page.slice(1)}</a>
            </motion.li>
            
          ))}
        </ul>
      </nav>
      <motion.p 
      ref={d.containerRef}
      className='d-flex justify-content-center flex-wrap'
      style={{display: 'inline-block', transformOrigin: 'center', overflow: 'hidden'}}
      initial={{scale:1}}
      animate={{scale:d.maxX}}
      transition={{duration: 3, repeat: Infinity, repeatType: "reverse", delay: .5}}
      >______________________________________________________________________________________________</motion.p>
    </div>
    </div>
    );
}
export default Nav;