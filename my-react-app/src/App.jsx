
import {Nav} from './components/Navigation.jsx'
import {Home} from './components/Home.jsx'
import {About} from './components/About.jsx'
import {Weather} from './components/Weather.jsx'
import {Movies} from './components/Movies.jsx'
import {Calculator} from './components/Calculator.jsx'
import {Contact} from './components/Contact.jsx'
import { useState} from 'react'
import { ApiProvider} from './Context/ApiProvider.jsx'
import { LiquidEther } from './backgrounds/LiquidEther.jsx';
import { LightRays } from './backgrounds/LightRays.jsx';

 const PAGES = {home: <Home />, about: <About />, calculator: <Calculator />, weather: <Weather />, movies: <Movies />};
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
      {page === 'calculator' ? (
        <div 
          style={{
    position: 'fixed',
    inset: 0,
    zIndex: 100000,   // max
    pointerEvents: 'auto', // won't block clicks
    overflow: 'hidden',
    background: 'transparent'
  }}>
        <LiquidEther

          mouseForce={60}
          cursorSize={40}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          // We need a style prop to set the size of the liquid background
          //width and height 100% to fill the parent container
          //display block to remove any inline gaps
          style={{ width: '100vw', height: '100%', display: 'block' }}
        />
        </div>
      ) : null}

      {page === 'movies' ? (
        <div style={{
    position: 'fixed',
    inset: 0,
    zIndex: 1,   // max
    pointerEvents: 'auto', // won't block clicks
    overflow: 'hidden',
    background: 'transparent',
    }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={3}
    lightSpread={1}
    rayLength={1}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>
      ) : null}
    

      <div className='app-background bg-black over' style={{ minHeight: '100vh' }}>
        <div className='container'>
          <Nav current={page} onClick={setPage} className="navigation"/>

          {currentPage}
        </div>
      </div>
    </div>
  );
}

