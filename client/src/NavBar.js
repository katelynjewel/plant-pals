import { Link } from "react-router-dom"

function NavBar(){

  return(
    <div id='navbar'>
      <h1 id="header">Plant Pals</h1>
        <ul className='navlinks'>
          <li className='navlinks'><Link exact to="/home">
              Home
          </Link></li>
          <li className='navlinks'><Link to="/listed-plants">
              Listed Plants        
          </Link></li>
          <li className='navlinks'><Link to="/post-plant">
              Post Plant 
          </Link></li>
          <li className='navlinks'><button as={Link} to='/'>
              Logout
          </button></li>
        </ul>
    </div>
  )
}

export default NavBar;
