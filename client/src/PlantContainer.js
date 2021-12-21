import { Container } from 'semantic-ui-react'
import PlantCard from './PlantCard'

function PlantContainer({allPlants}) {

  const renderPlants = allPlants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)

  return (
    <Container className='container'>
      <h3>Plants:</h3>
      {renderPlants}
    </Container>
  )
}

export default PlantContainer;