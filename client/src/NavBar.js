import { Link } from "react-router-dom"

function NavBar(){

  return(
    <div id='navbar'>
      <Link className='navlinks' exact to="/home">
          Home
      </Link>
      <Link className='navlinks' to="/listed-plants">
          Listed Plants        
      </Link>
      <Link className='navlinks' to="/post-plant">
          Post Plant 
      </Link>
      <button className="bttns" as={Link} to='/'>
          Logout
      </button>
    </div>
  )
}

export default NavBar;
