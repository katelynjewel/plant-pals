import PlantCard from "./PlantCard";

function PlantContainer({allPlants}) {

  const renderPlants = allPlants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)
  
  return (
    <div>
      <h3>Plant Containers Here</h3>
      {renderPlants}
    </div>
  )
}

export default PlantContainer;