import Home from './Home.jsx';

//create a nav bar component with bootstrap
function Nav({children}) {
  return (
    <nav className="justify-content-top">
      <ul className="
        nav 
        nav-tabs 
        bg-info  
        font-monospace 
        row
        justify-content-around
        align-items-center
        "
      >
          {/*dropdown menu*/}
        <span className="nav-item dropdown col-1">
          <button className="btn btn-secondary dropdown-toggle m-1" type="button" data-bs-toggle="dropdown">
            <span className="bi bi-lightbulb"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item background-light" href="#calculator" onClick={() => children('calculator')}>Calculator</a></li>
            <li><a className="dropdown-item" href="#toDoList" onClick={() => children('toDoList')}>To Do List</a></li>
            <li><a className="dropdown-item" href="#recipes" onClick={() => children('recipes')}>Recipes</a></li>
          </ul>
        </span>
          {/*home, about, contact*/}
          <li className="nav-item col-3 align-content-center"><a className="nav-link" href="#home" onClick={() => children('Home')}>Home</a></li>
          <li className="nav-item col-3 align-content-center"><a className="nav-link" href="#about" onClick={() => children('about')}>About</a></li>
          <li className="nav-item col-3 align-content-center"><a className="nav-link" href="#contact" onClick={() => children('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}
export default Nav;