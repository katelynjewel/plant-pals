import { Search } from 'semantic-ui-react'

function SearchBar({search, setSearch}) {
  return (
    <Search 
      className='search'
      type='text'
      value={search}
      placeholder='Search...'
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar;