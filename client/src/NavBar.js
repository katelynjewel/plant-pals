import { Link, useHistory } from 'react-router-dom'
import { Button, Menu, Item } from 'semantic-ui-react'

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
      <h1 id='header'>Plant Pals</h1>
        <Menu className='navlinks'>
          <Item className='navlinks'><Link to='/home'>
              Home
          </Link></Item>
          <Item className='navlinks'><Link to='/listed-plants'>
              Listed Plants        
          </Link></Item>
          <Item className='navlinks'><Link to='/post-plant'>
              Post Plant 
          </Link></Item>
          <Item className='navlinks'><Button as={Link} to='/' onClick={handleLogout}>
              Logout
          </Button></Item>
        </Menu>
    </div>
  )
}

export default NavBar;
