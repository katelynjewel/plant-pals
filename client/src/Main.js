import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ListedPlantContainer from "./ListedPlantContainer";
import AddPlant from "./AddPlant";
import Landing from "./Landing";
import NavBar from "./NavBar";
import Home from "./Home";

function Main() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/listed-plants">
            <ListedPlantContainer/>
          </Route>
          <Route exact path="/post-plant">
            <AddPlant/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Main;