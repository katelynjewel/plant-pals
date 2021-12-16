import { Button, Modal } from 'semantic-ui-react'
import { useState } from 'react'
import Login from "./Login"
import SignUp from "./SignUp"

function Landing({onLogin}) {
  const [openLog, setOpenLog] = useState(false)
  const [openSign, setOpenSign] = useState(false)

  return (
    <div>
      <Button open={openLog}>Login</Button>
      <Modal 
      onClose={() => setOpenLog(false)}
      onOpen={() => setOpenLog(true)}>
        <Modal.Header>Sign in Here:</Modal.Header>
        <Modal.Content>
          <Login handleClose={() => setOpenLog(false)} onLogin = {onLogin} />
        </Modal.Content>
      </Modal>

      <Button open={openSign}>SignUp</Button>
      <Modal 
      onClose={() => setOpenSign(false)}
      onOpen={() => setOpenSign(true)}>
        <Modal.Header>Create an Account:</Modal.Header>
        <Modal.Content>
          <SignUp handleClose={() => setOpenSign(false)} onLogin = {onLogin} />
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default Landing;

/* <div id="landing">
      <Login onLogin = {onLogin}/>
      <SignUp onLogin = {onLogin}/>
    </div> */