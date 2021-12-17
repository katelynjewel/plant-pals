import { Route, Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ListedPlantContainer from "./ListedPlantContainer";
import AddPlant from "./AddPlant";
import Landing from "./Landing";
import NavBar from "./NavBar";
import Home from "./Home";

function Main({user, setUser}) {
  const [allPlants, setAllPlants] = useState([])

  useEffect(()=> {
    fetch('/plants')
    .then((resp)=> resp.json())
    .then((plants) => console.log(plants))
  },[])

  return (
    <div>
        <NavBar onLogout={setUser}/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/home">
            <Home allPlants={allPlants}/>
          </Route>
          <Route exact path="/listed-plants">
            <ListedPlantContainer/>
          </Route>
          <Route exact path="/post-plant">
            <AddPlant/>
          </Route>
        </Switch>
    </div>
  )
}

export default Main;