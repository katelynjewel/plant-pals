import { Container } from 'semantic-ui-react'
import ListedPlantCard from './ListedPlantCard'
import SearchBar from './SearchBar'

function ListedPlantContainer({user, allPlants, setAllPlants, search, setSearch}) {

  if ((user.plants.length > 0)) {
    const plantFilter = allPlants.filter((plant) => plant.user.id === user.id)
    const plantMap = plantFilter.map((plant) => <ListedPlantCard key={plant.id} plant={plant} user={user} setAllPlants={setAllPlants}/>)
    return (
      <>
        <SearchBar search={search} setSearch={setSearch} />
        <Container className='container'>
          <h3>Plants that you've listed</h3>
          {plantMap}
        </Container>
      </>
    )
  } else {
    return (
      <div className='container'>
        <h3>You haven't listed any plants yet!</h3>
      </div>
    )
  }
}

export default ListedPlantContainer;