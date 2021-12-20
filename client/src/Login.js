import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'

function Login({onLogin}) {
  const [erros, setErrors] = useState([]);
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  function handleSubmit(e){
    e.preventDefault()
    const userLogin= {
      username: user.username,
      password: user.password
    }
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userLogin)
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => onLogin(user));
        history.push("/home");
      } else {
        resp.json().then((data) => setErrors(data.errors))
      }
    })
  }

  function handleChange(e){
    setUser((currentUser)=> ({
      ...currentUser,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className='form'>
        <label> Username: <input name='username' type='text' value={user.username} onChange={handleChange} placeholder='plant-lover'></input></label>
        <br/>
        <label> Password: <input name='password' type='password' value={user.password} onChange={handleChange} placeholder='top-sercret'></input></label>
        <br/>
        <Button className='bttns' type="submit">Signin</Button>
      </Form>
    </div>
  )
}

export default Login;