import PlantContainer from './PlantContainer'
import SearchBar from './SearchBar'

function Home({allPlants, search, setSearch}) {

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <PlantContainer allPlants={allPlants}/>
    </div>
  )
}

export default Home;
