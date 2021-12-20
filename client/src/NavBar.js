import { Link, useHistory } from "react-router-dom"
import { Button } from 'semantic-ui-react'


function NavBar({onLogout}){
  const history = useHistory();

  function handleLogout(){
    fetch('/logout',{
      method: 'DELETE',
    }).then((resp) => {
      if (resp.ok) {
          onLogout(null)
      }
      history.push("/");
    })
  }

  return(
    <div id='navbar'>
      <h1 id="header">Plant Pals</h1>
        <ul className='navlinks'>
          <li className='navlinks'><Link to="/home">
              Home
          </Link></li>
          <li className='navlinks'><Link to="/listed-plants">
              Listed Plants        
          </Link></li>
          <li className='navlinks'><Link to="/post-plant">
              Post Plant 
          </Link></li>
          <li className='navlinks'><Button as={Link} to='/' onClick={handleLogout}>
              Logout
          </Button></li>
        </ul>
    </div>
  )
}

export default NavBar;
