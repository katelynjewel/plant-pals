import { useState } from 'react'
import PlantContainer from './PlantContainer'
import SearchBar from './SearchBar'

function Home({ allPlants }) {
  const [search, setSearch] = useState("")

  let filterPlants = allPlants.filter(plant => {
    return (
      plant.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <PlantContainer allPlants={filterPlants}/>
    </div>
  )
}

export default Home;
