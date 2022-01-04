import { Route, Switch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ListedPlantContainer from './ListedPlantContainer'
import AddPlant from './AddPlant'
import Landing from './Landing'
import NavBar from './NavBar'
import Home from './Home'

function Main({user, setUser}) {
  const [allPlants, setAllPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch('/plants')
    .then((resp)=> resp.json())
    .then((allPlants) => setAllPlants(allPlants))
  },[])

  let filterPlants = allPlants.filter(plant => {
    return (
      plant.name.toLowerCase().includes(search.toLowerCase())
      ||
      plant.details.toLowerCase().includes(search.toLowerCase())
    )
  }) 

  return (
    <div>
        <NavBar onLogout={setUser}/>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route exact path='/home'>
            <Home allPlants={filterPlants} search={search} setSearch={setSearch}/>
          </Route>
          <Route exact path='/listed-plants'>
            <ListedPlantContainer user={user} allPlants={filterPlants} setAllPlants={setAllPlants} search={search} setSearch={setSearch}/>
          </Route>
          <Route exact path='/post-plant'>
            <AddPlant user={user} setAllPlants={setAllPlants}/>
          </Route>
        </Switch>
    </div>
  )
}

export default Main;