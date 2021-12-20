import ListedPlantCard from "./ListedPlantCard";

function ListedPlantContainer({user, allPlants}) {

  if ((user.plants.length > 0)) {
    const plantFilter = allPlants.map((plant) => <ListedPlantCard key={plant.id} plant={plant}/>)
    return (
      <div className="container">
      {plantFilter}
      </div>
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