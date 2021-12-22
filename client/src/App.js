import { useEffect, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Landing from './Landing'
import Main from './Main'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  if (!user) return <Landing onLogin={setUser}/>

  return (
    <div>
      <Main user={user} setUser={setUser}/>
    </div>
  );
}

export default App;

