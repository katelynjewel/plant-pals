import PlantContainer from "./PlantContainer"
import Search from "./Search"

function Home({allPlants}) {

  return (
    <div>
      <PlantContainer allPlants={allPlants}/>
      <Search/>
    </div>
  )
}

export default Home;
