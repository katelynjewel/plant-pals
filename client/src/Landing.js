import { Button, Modal } from 'semantic-ui-react'
import "fomantic-ui-css/semantic.min.css"
import { useState } from 'react'
import Login from "./Login"
import SignUp from "./SignUp"

function Landing({onLogin}) {
  const [openLog, setOpenLog] = useState(false)
  const [openSign, setOpenSign] = useState(false)

  return (
    <div id='land'>
      <Modal
        onClose={() => setOpenLog(false)}
        onOpen={() => setOpenLog(true)}
        header= {"Sign in Here"}
        content = {<Login onLogin = {onLogin} />}
        open={openLog}
        trigger={<Button>Login</Button>}
      />
      <Modal
        onClose={() => setOpenSign(false)}
        onOpen={() => setOpenSign(true)}
        header= {"Create an Account"}
        content = {<SignUp onLogin = {onLogin} />}
        open={openSign}
        trigger={<Button>SignUp</Button>}
      />
    </div>
  )
}

export default Landing;