import { useState } from 'react'

function Login({onLogin}) {
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
      resp.json().then((user) => onLogin(user));
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
      <h3>Sign in Here:</h3>
      <form onSubmit={handleSubmit} className='login'>
        <label> Username: <input name='username' type='text' value={user.username} onChange={handleChange} placeholder='plant-lover'></input></label>
        <label> Password: <input name='password' type='password' value={user.password} onChange={handleChange} placeholder='top-sercret'></input></label>
        <button className='bttns' type="submit">Signin</button>
      </form>
    </div>
  )
}

export default Login;