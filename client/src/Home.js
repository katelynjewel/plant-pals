import { useState } from 'react'
import PlantContainer from './PlantContainer'
import SearchBar from './SearchBar'

function Home({allPlants, setAllPlants}) {
  const [search, setSearch] = useState("")

  const filterPlants = allPlants.filter(plant => {
    return (
      plant.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} setAllPlants={setAllPlants}/>
      <PlantContainer allPlants={filterPlants}/>
    </div>
  )
}

export default Home;
