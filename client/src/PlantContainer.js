import PlantCard from "./PlantCard";

function PlantContainer({allPlants}) {

  const renderPlants = allPlants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)
  
  return (
    <div className="container">
      <h3>Plants:</h3>
      {renderPlants}
    </div>
  )
}

export default PlantContainer;