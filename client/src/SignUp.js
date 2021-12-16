import { useState } from 'react'

function SignUp({onLogin}) {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  function handleSubmit(e){
    e.preventDefault()
    const userSignUp = {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    }
    fetch('/signup',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userSignUp)
    })
    .then((resp) => {
      resp.json().then((user) => onLogin(user));
    })
  }

  function handleChange(e){
    setNewUser((currentUsers) => ({
      ...currentUsers,
      [e.target.name]: e.target.value
    }))
}

  return (
    <div>
      <h3>Create an Account:</h3>
        <form onSubmit={handleSubmit} className='signup'>
          <label> Username: <input name='username' type='text' value={newUser.username} onChange={handleChange} placeholder='plant-lover'></input></label>
          <label> Email: <input name='email' type='text' value={newUser.email} onChange={handleChange} placeholder='plant-lover@example.com'></input></label>
          <label> Password: <input name='password' type='password' value={newUser.password} onChange={handleChange} placeholder='top-sercret'></input></label>
          <button className='bttns' type="submit">SignUp</button>
        </form>
    </div>
  )
}

export default SignUp;
