
function Search({search, setSearch}) {

  return (
    <div className="search">
      <input 
        type="text" 
        value={search}
        placeholder="Search..." 
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search;