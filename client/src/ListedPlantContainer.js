import ListedPlantCard from "./ListedPlantCard";
import { Container } from 'semantic-ui-react'

function ListedPlantContainer({user, allPlants}) {

  if ((user.plants.length > 0)) {
    const plantFilter = allPlants.map((plant) => <ListedPlantCard key={plant.id} plant={plant}/>)
    return (
      <Container className="container">
      {plantFilter}
      </Container>
    )
  } else {
    return (
      <div className="container">
        <h3>You haven't listed any plants yet!</h3>
      </div>
    )
  }
}

export default ListedPlantContainer;